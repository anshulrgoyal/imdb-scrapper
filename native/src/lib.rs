use neon::prelude::*;

mod request;
mod scrap;
mod episode;

struct Scrap{
    title_id:String,
}

impl Task for Scrap{
    type Output = scrap::MovieMeta;
    type Error = String;
    type JsEvent = JsObject;

    fn perform(&self) -> Result<Self::Output, Self::Error> {
       let url=format!("https://www.imdb.com/title/{}/",&self.title_id);
        let s=request::get_data(url)?;
        let data=scrap::parse_movie_metadata(s.as_str())?;
        Ok(data)
    }

    fn complete(self,mut cx: TaskContext, result: Result<Self::Output, Self::Error>) -> JsResult<Self::JsEvent> {
        match result{
            Ok(v)=>{
                let obj=cx.empty_object();
                let title=cx.string(v.title);
                let run_time=cx.string(v.run_time);
                let year=cx.number(v.year);
                let plot=cx.string(v.plot);
                let rating=cx.number(v.rating);
                let poster_img=cx.string(v.poster_img);
                match v.seasons {
                    Some(val)=>{
                        let js_num=cx.number(val);
                        obj.set(&mut cx,"seasons",js_num)?;
                    },
                    None=>(),
                }
                match v.episodes{
                    Some(val)=>{
                        let js_num=cx.number(val);
                        obj.set(&mut cx,"episodes",js_num)?;
                    },
                    None=>(),
                }

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

struct Episode{
    show_id:String,
    season:i32,
}

impl Task for Episode{
    type Output = episode::Season;
    type Error = String;
    type JsEvent = JsObject;

    fn perform(&self) -> Result<Self::Output, Self::Error> {
        let url=format!("https://www.imdb.com/title/{}/episodes?season={}",&self.show_id,&self.season);
        let s=request::get_data(url)?;
        let season=episode::parse_season(s.as_str())?;
        Ok(season)
    }

    fn complete(self,mut cx: TaskContext, result: Result<Self::Output, Self::Error>) -> JsResult<Self::JsEvent> {
       match result{
           Ok(eps)=>{
               let obj=cx.empty_object();
               let id=cx.number(eps.id);
               let episode=JsArray::new(&mut cx,eps.episodes.len() as u32);
               for (i,ep) in eps.episodes.iter().enumerate(){
                   match ep{
                       Some(ep)=>{
                           let js_object=cx.empty_object();
                           let id=cx.string(&ep.id);
                           let rating=cx.number(ep.rating as f64);
                           let air_date=cx.string(&ep.air_date);
                           let des=cx.string(&ep.description);
                           let title=cx.string(&ep.title);
                           let poster=cx.string(&ep.poster);
                           js_object.set(&mut cx,"id",id)?;
                           js_object.set(&mut cx,"rating",rating)?;
                           js_object.set(&mut cx,"airDate",air_date)?;
                           js_object.set(&mut cx,"description",des)?;
                           js_object.set(&mut cx,"title",title)?;
                           js_object.set(&mut cx,"poster",poster)?;
                           episode.set(&mut cx,i as u32,js_object)?;
                       },
                       None=>()
                   }
               }
               obj.set(&mut cx,"id",id)?;
               obj.set(&mut cx,"episodes",episode)?;
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

fn season(mut cx:FunctionContext)->JsResult<JsUndefined>{
    let id=cx.argument::<JsString>(0)?;
    let season_number=cx.argument::<JsNumber>(1)?;
    let f = cx.argument::<JsFunction>(2)?;
    let ep=Episode{show_id:id.value(),season: season_number.value() as i32 };
    ep.schedule(f);
    Ok(cx.undefined())
}

register_module!(mut cx, {
    cx.export_function("native_scrap", scrap)?;
    cx.export_function("native_episode",season)?;
    Ok(())
});

