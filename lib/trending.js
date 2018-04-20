const request = require('request-promise-native')
const cheerio = require('cheerio')
const {ifError} =require('./error')

function getTrending (n = 50) {
  return request.get('http://www.imdb.com/chart/moviemeter').then((data) => {
    const $ = cheerio.load(data)
    let trending = []
    let i = 1
    while (i <= n) {
      try {
        trending.push({
          name: $(`.lister-list > tr:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`).text(),
          poster: $(`.lister-list > tr:nth-child(${i}) > td:nth-child(1) > a:nth-child(6) > img:nth-child(1)`)[0].attribs.src.split('@._')[0]+'@._V1_QL50.jpg',
          id: $(`.lister-list > tr:nth-child(${i}) > td:nth-child(1) > a:nth-child(6)`)[0].attribs.href.split('/')[2]
        })
        i++
      } catch (e) {
        i++
        console.log(e)
      }
    }
    return {trending}
  }).catch(ifError)
}

function getTrendingGenre (genre, n = 7) {
  return request.get(`https://www.imdb.com/search/title?genres=${genre}`).then((data) => {
    let trending = []
    let i = 1
    const $ = cheerio.load(data)
    while (i <= n) {
      try {
        trending.push({
          name: $(`div.lister-item:nth-child(${i}) > div:nth-child(2) > a:nth-child(1) > img:nth-child(1)`)[0].attribs.alt,
          poster: $(`div.lister-item:nth-child(${i}) > div:nth-child(2) > a:nth-child(1) > img:nth-child(1)`)[0].attribs.loadlate.split('@._')[0]+'@._V1_QL50.jpg',
          id: $(`div.lister-item:nth-child(${i}) > div:nth-child(2) > a:nth-child(1)`)[0].attribs.href.split('/')[2]
        })
        i++
      } catch (e) {

      }
    }
    return {trending}
  }).catch(ifError)
}
// getTrendingGenre('action').then((data)=>{console.log(data)})
module.exports = {getTrending, getTrendingGenre}
