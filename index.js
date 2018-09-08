const request = require('./lib/request') // importing request for making get request
const cheerio = require('cheerio') // import cheerio for making use of css selector to get info
const {ifError} = require('./lib/error') // error file
const {getWinner} = require('./lib/awards') // awards are provided
const {getCast, getPoster} = require('./lib/photo') // poster and cast info is given by this function
const {getRating, getGenre, getPro, getStory, getTitle, getRuntime, getYear} = require('./lib/data')
const {getTrending, getTrendingGenre} = require('./lib/trending') // provide trending functions
const {search, simpleSearch} = require('./lib/search') // provide search functions

function scrapper (id) {
  return request.get(`http://www.imdb.com/title/${id}/?ref_=nv_sr_1`).then((data) => {
    const $ = cheerio.load(data)

    return {...getTitle($), ...getRuntime($), ...getYear($), ...getStory($), ...getPro($), ...getGenre($), ...getRating($), ...getPoster($), ...getPoster($)}
    // return{...getTitle($)}
  }).catch(ifError)
} // combining all the low level api in the single one

function awardsPage (id) {
  return request.get(`http://www.imdb.com/title/${id}/awards?ref_=tt_awd`).then((data) => {
    const $ = cheerio.load(data)
    return {...getWinner(4, $), ...getWinner(7, $), ...getWinner(10, $)}
  }).catch(ifError)
}

function getFull (id) {
  return Promise.all([scrapper(id), awardsPage(id), getCast(id)]).then((data) => {
    return {...data[0], ...data[1], ...data[2]}
  }).catch(ifError)
}
getTrendingGenre('comedy', 7).then((data)=>{
  console.log(data)
})

module.exports = {scrapper, getTrendingGenre, getTrending, search, getFull, awardsPage, getCast, simpleSearch, ifError}
