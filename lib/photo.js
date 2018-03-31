const request=require('request-promise-native');
const cheerio=require('cheerio');


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
function test(id) {
    request.get(`http://www.imdb.com/title/${id}/`).then((data)=>{
        const $=cheerio.load(data);
        console.log(getPoster($))


    })
}
function getImageCast($) {
    const imagesCast = Array.from($('#titleCast img')).map((data) => {
        if (data.attribs.alt) {
            return {
                name: data.attribs.alt,
                image: data.attribs.src
            }
        } else return null;
    }).filter(data => data)
    return imagesCast

}
function getPoster($){
    return $('.poster > a:nth-child(1) > img:nth-child(1)')[0].attribs.src
    }
test('tt3107288')