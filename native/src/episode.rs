use std::str::FromStr;

use select::{document::Document,predicate::*};

#[derive(Debug)]
pub struct Season{
    pub id:u32,
    pub episodes:Vec<Option<EpisodeMeta>>
}

#[derive(Debug)]
pub struct EpisodeMeta{
    pub id:String,
    pub rating:f32,
    pub poster:String,
    pub air_date:String,
    pub description:String,
    pub title:String,
}

pub fn parse_season(s:&str)->Result<Season,String>{
    let document=Document::from(s);
    let episodes=document.find(Class("list_item")).map(|node|{
        let img=match node.find(Name("img")).nth(0){
            Some(img)=>img,
            None=>return None,
        };
        Some(
            EpisodeMeta{
                id: match node.find(Class("hover-over-image")).nth(0){
                    Some(node)=>match node.attr("data-const"){
                        Some(val)=>val.to_owned(),
                        None=>return None,
                    },
                    None=>return None,
                },
                rating: match node.find(Class("ipl-rating-star__rating")).nth(0) {
                    Some(rating)=>match rating.text().parse(){
                        Err(_)=>0.0,
                        Ok(val)=>val,
                    }
                    None=>0.0,
                },
                poster: match img.attr("src"){
                    Some(v)=>v.to_owned(),
                    None=>"N/A".to_owned()
                },
                air_date: match node.find(Class("airdate")).nth(0) {
                    Some(date)=>date.text().trim().to_owned(),
                    None=>"N/A".to_owned(),
                },
                description: match node.find(Class("item_description")).nth(0) {
                    Some(des)=>des.text().trim().to_owned(),
                    None=>"N/A".to_owned(),
                },
                title:match img.attr("alt") {
                    Some(val)=>val.to_owned(),
                    None=>"N/A".to_owned()
                }
            }
        )
    }).collect::<Vec<Option<EpisodeMeta>>>();
    let id=match document.find(Attr("selected","selected")).nth(0){
        Some(id)=>match u32::from_str(id.text().as_str().trim()){
            Ok(val)=>val,
            Err(_)=>0
        }
        None=>0
    };
    Ok(Season{
        id,
        episodes,
    })
}