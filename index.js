const request=require('request-promise-native')
const cheerio=require('cheerio')
const {getWinner}=require('./lib/awards');
const {getImageCast,getPoster}=require('./lib/photo');
const {getRating,getGenre,getPro,getStory,getTitle}=require('./lib/data');

function scrapper(id){
   return request.get(`http://www.imdb.com/title/${id}/?ref_=nv_sr_1`).then((data)=>{
        const $=cheerio.load(data);

        return{...getTitle($),...getStory($),...getPro($),...getGenre($),...getRating($),...getPoster($),...getImageCast($),...getPoster($)}
       // return{...getTitle($)}
    })
}
function awardsPage(id){
   return request.get(`http://www.imdb.com/title/${id}/awards?ref_=tt_awd`).then((data)=>{
        const $=cheerio.load(data)
        return {...getWinner(4,$),...getWinner(7,$),...getWinner(10,$)}
    })
}

function getFull(id){
    return Promise.all([scrapper(id),awardsPage(id)]).then((data)=>{
        return {...data[0],...data[1]}
    })
}
getFull('tt5013056').then(data=>console.log(data))









module.exports={scrapper}
