const request = require('./lib/request') // importing request for making get request
const cheerio = require('cheerio') // import cheerio for making use of css selector to get info

const {ifError} = require('./lib/error') // error file
const {getWinner} = require('./lib/awards') // awards are provided
const {getCast, getPoster} = require('./lib/photo') // poster and cast info is given by this function
const {getRating, getGenre, getPro, getStory, getTitle, getRuntime, getYear, getEpisodeCount} = require('./lib/data')
const {getTrending, getTrendingGenre} = require('./lib/trending') // provide trending functions
const {search, simpleSearch} = require('./lib/search') // provide search functions


function scrapper(id) {
  return request(`https://www.imdb.com/title/${id}/?ref_=nv_sr_1`).then((data) => {
    const $ = cheerio.load(data)


    return {...getTitle($), ...getRuntime($), ...getYear($), ...getStory($), ...getPro($), ...getGenre($), ...getRating($), ...getPoster($), ...getPoster($), ...getEpisodeCount($)}
    // return{...getTitle($)}
  }).catch(ifError)
} // combining all the low level api in the single one

function awardsPage(id) {
  return request(`https://www.imdb.com/title/${id}/awards?ref_=tt_awd`).then((data) => {
    const $ = cheerio.load(data)
    return { ...getWinner(4, $), ...getWinner(7, $), ...getWinner(10, $) }
  }).catch(ifError)
}

function getFull(id) {
  return Promise.all([scrapper(id), awardsPage(id), getCast(id)]).then((data) => {
    return { ...data[0], ...data[1], ...data[2] }
  }).catch(ifError)
}

function getActor(id){
  return request(`https://www.imdb.com/name/${id}/?ref_=tt_cl_t1`).then((data) => {
    const $ = cheerio.load(data);
    let result = [];
    let info = $('div.inline').text().split('\n').join(' ').split('...');
    let birthDate = $('div#name-born-info a:nth-child(1)').text();
    let birthYear = $('div#name-born-info a:nth-child(2)').text();
    let bornInfo = $('div#name-born-info a:nth-child(3)').text();
    let name = $('h1.header span.itemprop').text();
    let image = $('a img#name-poster').attr('src');
    result.push({
      actorName: name,
      actorImage: image,
      actorInfo: info[0].trim(),
      actorBirth: birthDate + ", " + birthYear,
      actorBorn: bornInfo
    });
    return result;
  }).catch(ifError)
}

function searchActor(name){
  return request(`https://www.imdb.com/find?ref_=nv_sr_fn&q=${name}&s=nm`).then((data) => {
    const $ = cheerio.load(data);
    let result = [];
    $('tr').each((index, element) => {
      let image = $(element).find('td.primary_photo > a > img').attr('src');
      let name = $(element).find('td.result_text > a').text();
      result.push({
        actorImage: image,
        actorName: name
      });
    });
    return result;
  }).catch(ifError)
}
// getTrendingGenre('comedy', 7).then((data)=>{
//   console.log(data)
// })

module.exports = {scrapper,searchActor ,getActor, getTrendingGenre, getTrending, search, getFull, awardsPage, getCast, simpleSearch, ifError}