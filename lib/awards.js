const request=require('request-promise-native');
const cheerio=require('cheerio');
var movie={}
function getAwards(n,f,$){

    const k= n===1?2:1
    const position=$(`table.awards:nth-child(${f}) > tbody:nth-child(1) > tr:nth-child(${n}) > td:nth-child(${k})`).text()
    var refactor=position.split("\n").join("").split("  ");
    const category=refactor[6];
    const wonBy=refactor[10];
    return {category,wonBy};
}
function getAwardCategory(n,$) {
    //table.awards:nth-child(n) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(3)
    const position = $(`table.awards:nth-child(${n}) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(3)`).text()
    return position
}
  function getWinner( k,$) {
    movie.awards={}
    var type=getAwardCategory(k,$)
    movie.awards[type]=[];
    var loop=$(`table.awards:nth-child(${k}) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)`)[0].attribs.rowspan
    //table.awards:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)
    var i=1;
     while (loop--) {
        movie.awards[type].push(getAwards(i,k,$))
        i++;
    }
    return movie
}
function singleImage($) {
    request.get('http://www.imdb.com/title/tt3107288/').then((data)=>{
         const images=  Array.from($('img')).map((data)=> {
            return {
              name: data.attribs.alt,
              image: data.attribs.src
          };
      })
        movie.images=images;
    })}

function awardsScraper(k,id){
    request.get(`http://www.imdb.com/title/${id}/awards?ref_=tt_awd`).then((data)=>{
        const $=cheerio.load(data)
     return getWinner(k,$)


    })
}


// eg awardsScraper(7,'tt3107288')

module.exports={awardsScraper,getWinner,getAwardCategory,getAwards}
