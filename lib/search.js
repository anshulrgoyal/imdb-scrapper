const request = require('request-promise-native')
const cheerio = require('cheerio')
const {ifError} = require('./error')

function search (term, n = 4) {
  return request.get(`https://www.imdb.com/find?q=${term}&s=tt&exact=true&ref_=fn_al_tt_ex`).then((data) => {
    const $ = cheerio.load(data)
    let result = []
    let i = 1
    while (i <= n) {
      try {
        result.push({
          poster: $(`tr.findResult:nth-child(${i}) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)`)[0].attribs.loadlate.split('@._')[0] + '@._V1_QL50.jpg',
          title: $(`tr.findResult:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`).text(),
          id: $(`tr.findResult:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`)[0].attribs.href.split('/')[2]
        })
        i++
      } catch (e) {
        i++
      }
    }
    return result
  }).catch(ifError)
}

function simpleSearch (term) {
  return request.get(`https://v2.sg.media-imdb.com/suggests/${term[0]}/${term}.json`).then((data) => {
    data = data.split('imdb$flash(')
    let re = data[1].split('')
    re.pop()
    re = re.join('')
    return JSON.parse(re)
  }).catch(ifError)
}

module.exports = {search, simpleSearch}
