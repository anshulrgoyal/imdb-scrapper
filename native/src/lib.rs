use neon::prelude::*;
use select::{document::Document,predicate::*};
use curl::easy::Easy;
use std::str::FromStr;

struct Scrap{
    title_id:String,
}

#[derive(Debug)]
struct RelatedMeta{
    id:String,
    poster:String,
    name:String
}

// struct Award{
//     name:String,
//     winner:Vec<Winner>
// }
//
// struct Winner{
//     category:String,
//     won_by:String,
// }

struct MovieMeta{
    title:String,
    run_time:String,
    year:u32,
    plot:String,
    director:Vec<String>,
    writer:Vec<String>,
    actor:Vec<String>,
    genre:Vec<String>,
    rating:f32,
    poster_img:String,
    related:Vec<Option<RelatedMeta>>,
}


impl Task for Scrap{
    type Output = MovieMeta;
    type Error = String;
    type JsEvent = JsObject;

    fn perform(&self) -> Result<Self::Output, Self::Error> {
       let mut easy=Easy::new();
        match easy.url(format!("https://www.imdb.com/title/{}/",&self.title_id).as_str()){
            Err(err)=>return Err(err.to_string()),
            Ok(_)=>()
        };
        let mut v=vec![];
        {
            let mut tran=easy.transfer();
            match tran.write_function(|data|{
                v.extend_from_slice(data);
                Ok(data.len())
            }){
                Err(err)=>return Err(err.to_string()),
                Ok(_)=>()
            };
            match tran.perform() {
                Err(err)=>return Err(err.to_string()),
                Ok(_)=>()
            };
        }
        let s=match std::str::from_utf8(v.as_slice()) {
            Ok(s)=>s,
            Err(err)=>return Err(err.to_string()),
        };
        let document=Document::from(s);
        let title=match document
            .find(Descendant(Class("title_wrapper"),Descendant(Name("h1"),Text)))
            .take(1)
            .nth(0){
            Some(v)=>v.text(),
            None=>"".to_string(),
        };
        let year=match document
            .find(Attr("id","titleYear"))
            .take(1)
            .nth(0){
            Some(year)=>match u32::from_str(year
                .text().chars()
                .skip(1)
                .take(4)
                .collect::<String>()
                .as_str()){
                Ok(year)=>year,
                Err(_)=>0,
            },
            None=>0,
        };

        let rating=match document.find(Attr("itemprop","ratingValue")).take(1).nth(0){
            Some(rating)=>match rating.text().parse() {
                Ok(rating)=>rating,
                Err(_)=>0 as f32,
            }
            None=>0 as f32,
        };
        let run_time=match document.find(Name("time")).take(1).nth(0){
            Some(run_time)=>run_time.text().trim().to_owned(),
            None=>"N/A".to_string()
        };
        let genre=match document
            .find(And(Class("see-more"),And(Class("inline"),Class("canwrap")))).nth(1){
            Some(node)=>node
                .find(Name("a"))
                .map(|node|node.text().trim().to_owned())
                .collect::<Vec<String>>(),
            None=>vec![],
        };

        let plot=match document
            .find(Descendant(And(Class("inline"),Class("canwrap")),Name("p")))
            .take(1)
            .nth(0){
            Some(plot)=>match plot.find(Name("span")).nth(0){
                Some(node)=>node.text().trim_start().to_owned(),
                None=>"N/A".to_string(),
            },
            None=>"N/A".to_string()
        };
        let poster_img=match document.find(Descendant(Descendant(Class("poster"),Name("a")),Name("img"))).nth(0){
            Some(node)=>match node.attr("src"){
                Some(src)=>src.to_owned(),
                None=>"N/A".to_string(),
            },
            None=>"N/A".to_string(),
        };
        let mut credits=document.find(Class("credit_summary_item"));

        let director=match credits.next(){
            Some(node)=>node.find(Name("a"))
                .map(|a|a.text())
                .filter(|s|!s.contains("more credits")).collect(),
            None=>vec![]
        };
        let writer=match credits.next(){
            Some(node)=>node.find(Name("a"))
                .map(|a|a.text())
                .filter(|s|!s.contains("more credits")).collect(),
            None=>vec![]
        };
        let actor=match credits.next(){
            Some(node)=>node.find(Name("a"))
                .map(|a|a.text())
                .filter(|s|!s.contains("full cast")).collect(),
            None=>vec![]
        };

        let related=document.find(Class("rec_item")).take(10).map(|node|{
            let poster=match node.find(Class("rec_poster_img")).nth(0){
                Some(poster)=>poster,
                None=>return None,
            };
            Some(RelatedMeta{
                id: match node.attr("data-tconst"){
                    Some(id)=>id.to_owned(),
                    None=>return None,
                },
                poster:match poster.attr("loadlate"){
                    Some(poster)=>poster.to_owned(),
                    None=>"N/A".to_string(),
                },
                name: match poster.attr("alt") {
                    Some(name)=>name.to_owned(),
                    None=>"N/A".to_string()
                }
            })
            }).collect::<Vec<Option<RelatedMeta>>>();
        Ok(MovieMeta{
            title,
            run_time,
            year,
            plot,
            director,
            writer,
            actor,
            genre,
            rating,
            poster_img,
            related
        })
    }

    fn complete(self,mut cx: TaskContext, result: Result<Self::Output, Self::Error>) -> JsResult<Self::JsEvent> {
        match result{
            Ok(v)=>{
                let obj=cx.empty_object();
                let title=cx.string(v.title);
                let run_time=cx.string(v.run_time);
                let year=cx.number(v.year);
                let plot=cx.string(v.plot);
                let director=JsArray::new(&mut cx,v.director.len() as u32);
                for (i,direct) in v.director.iter().enumerate(){
                    let js_string=cx.string(direct);
                    director.set(&mut cx,i as u32,js_string)?;
                }
                let writer=JsArray::new(&mut cx,v.writer.len() as u32);
                for (i,write) in v.writer.iter().enumerate(){
                    let js_string=cx.string(write);
                    writer.set(&mut cx,i as u32,js_string)?;
                }
                let actor=JsArray::new(&mut cx,v.actor.len() as u32);
                for(i,act) in v.actor.iter().enumerate(){
                    let js_string=cx.string(act);
                    actor.set(&mut cx,i as u32,js_string)?;
                }
                let genre=JsArray::new(&mut cx,v.genre.len() as u32);
                for(i,gen) in v.genre.iter().enumerate(){
                    let js_string=cx.string(gen);
                    genre.set(&mut cx,i as u32,js_string)?;
                }
                let rating=cx.number(v.rating);
                let poster_img=cx.string(v.poster_img);
                let related=JsArray::new(&mut cx,v.related.len() as u32);
                for(i,rel) in v.related.iter().enumerate(){
                    match rel{
                        Some(rel)=>{
                            let js_object=cx.empty_object();
                            let name=cx.string(&rel.name);
                            let poster=cx.string(&rel.poster);
                            let id=cx.string(&rel.id);
                            js_object.set(&mut cx,"name",name)?;
                            js_object.set(&mut cx,"poster",poster)?;
                            js_object.set(&mut cx,"id",id)?;
                            related.set(&mut cx,i as u32,js_object)?;
                        },
                        None=>()
                    }
                }
                obj.set(&mut cx,"title",title)?;
                obj.set(&mut cx,"runTime",run_time)?;
                obj.set(&mut cx,"year",year)?;
                obj.set(&mut cx,"plot",plot)?;
                obj.set(&mut cx,"director",director)?;
                obj.set(&mut cx,"writer",writer)?;
                obj.set(&mut cx,"actor",actor)?;
                obj.set(&mut cx,"genre",genre)?;
                obj.set(&mut cx,"rating",rating)?;
                obj.set(&mut cx,"posterImg",poster_img)?;
                obj.set(&mut cx,"related",related)?;
                Ok(obj)
            },
            Err(err)=>cx.throw_error(err.to_string())
        }
    }
}

fn scrap(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let id=cx.argument::<JsString>(0)?;
    let f = cx.argument::<JsFunction>(1)?;
    let scrap=Scrap{title_id:id.value()};
    scrap.schedule(f);
    Ok(cx.undefined())
}

register_module!(mut cx, {
    cx.export_function("scrap", scrap)
});
