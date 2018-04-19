const request = require('request-promise-native')
const cheerio = require('cheerio')

function getCast (id,n=20) {
  return request.get(`https://m.imdb.com/title/${id}/fullcredits/cast?ref_=m_ttfc_3`).then((data) => {
    const $ = cheerio.load(data)
    let cast = []
    let i = 0
    while (i < n) {
      try {
        cast.push({
          name: $(`h4`).slice(i, i + 1).text(),
          image: $('.media-object')[i + 1].attribs.src,
          role: $('.h4').slice(i + 1, i + 2).text().split('\n').join('')

        })
        i++
      } catch (e) {
        i++
      }
    }
    // console.log(cast)
    return {cast: cast}
  })
}

function getPoster ($) {
  return {poster: $('.poster > a:nth-child(1) > img:nth-child(1)')[0].attribs.src}
}

module.exports = {getPoster, getCast}
