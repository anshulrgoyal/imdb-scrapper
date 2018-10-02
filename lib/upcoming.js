const request = require('./request')
const cheerio = require('cheerio')
const {ifError} = require('./error')

function getUpcoming (n = 50, region = null) {
    return request(`https://www.imdb.com/calendar/?ref_=nv_mv_cal${region ? `&region=${region}` : ''}`).then((data) => {
      const $ = cheerio.load(data)
      let upcoming = []
      let i = 1
      while (i <= n) {
        try {
          const m = $('#main a')[i]
          upcoming.push({
            name: m.innerHTML,
            id: m.attribs.href.split('/')[2]
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

module.exports = {getUpcoming}
