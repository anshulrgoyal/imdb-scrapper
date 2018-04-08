const request=require('request-promise-native')
const cheerio=require('cheerio')
const {getWinner}=require('./lib/awards');
const {getCast,getPoster}=require('./lib/photo');
const {getRating,getGenre,getPro,getStory,getTitle,getRuntime,getYear}=require('./lib/data');
const {getTrending,getTrendingGenre}=require('./lib/trending');
const {search}=require('./lib/search')

function scrapper(id){
   return request.get(`http://www.imdb.com/title/${id}/?ref_=nv_sr_1`).then((data)=>{
        const $=cheerio.load(data);

        return{...getTitle($),...getRuntime($),...getYear($),...getStory($),...getPro($),...getGenre($),...getRating($),...getPoster($),...getPoster($)}
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
    return Promise.all([scrapper(id),awardsPage(id),getCast(id)]).then((data)=>{

        return {...data[0],...data[1],...data[2]}
    })
}
getFull('tt2395427').then((movieDetails)=>{
    console.log(movieDetails)

})








module.exports={scrapper,getTrendingGenre,getTrending,search,getFull,awardsPage}
