const request = require('./request')
const cheerio = require('cheerio')
const {ifError} = require('./error')

function getCast (id, n = 20) {
  return request(`https://m.imdb.com/title/${id}/fullcredits/cast?ref_=m_ttfc_3`).then((data) => {
    const $ = cheerio.load(data)
    let cast = []
    let i = 0
    while (i < n) {
      try {
        cast.push({
          name: $(`h4`).slice(i, i + 1).text(),
          image: $('.media-object')[i + 1].attribs.src.split('@._')[0] + '@._V1_QL50.jpg',
          role: $('.h4').slice(i + 1, i + 2).text().split('\n').join('')

        })
        i++
      } catch (e) {
        i++
      }
    }
    // console.log(cast)
    return {cast: cast}
  }).catch(ifError)
}

function getPoster ($) {
  return {poster: $('.poster > a:nth-child(1) > img:nth-child(1)')[0].attribs.src.split('@._')[0] + '@._V1_QL50.jpg'}
}

// getCast('tt0944947').then((data)=>{console.log(data)})
module.exports = {getPoster, getCast}
