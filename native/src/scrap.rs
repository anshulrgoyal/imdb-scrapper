use std::str::FromStr;

use select::{document::Document,predicate::*};

pub struct MovieMeta{
    pub title:String,
    pub run_time:String,
    pub year:u32,
    pub plot:String,
    pub director:Vec<String>,
    pub writer:Vec<String>,
    pub actor:Vec<String>,
    pub genre:Vec<String>,
    pub rating:f32,
    pub poster_img:String,
    pub related:Vec<Option<RelatedMeta>>,
    pub episodes:Option<u32>,
    pub seasons:Option<u32>,
}

pub struct RelatedMeta{
    pub id:String,
    pub poster:String,
    pub name:String
}



pub fn parse_movie_metadata(s:&str)->Result<MovieMeta,String>{
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
    let poster_img=match document
        .find(Descendant(Descendant(Class("poster"),Name("a")),Name("img")))
        .nth(0){
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

    let is_tv=match document.find(Class("bp_heading")).nth(0){
        Some(node)=>node.text().trim().contains("Episode Guide"),
        None=>false,
    };
    let episodes=if is_tv {
        match document.find(Class("bp_sub_heading")).nth(0){
            Some(node)=>Some(match u32::from_str(match node.text().split(" ").nth(0){
                Some(val)=>val,
                None=>"0"
            }){
                Ok(val)=>val,
                Err(_)=>0,
            }),
            None=>None,
        }
    } else {
        None
    };

    let seasons=if is_tv {
        match document
            .find(Descendant(Class("seasons-and-year-nav"),Descendant(Name("div"),Name("a"))))
            .nth(0) {
            Some(node)=>Some(match u32::from_str(node.text().trim()){
                Ok(val)=>val,
                Err(_)=>0,
            }),
            None=>None
        }
    } else {
        None
    };
    let related=document
        .find(Class("rec_item"))
        .take(10)
        .map(|node|{
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
        related,
        seasons,
        episodes,
    })
}