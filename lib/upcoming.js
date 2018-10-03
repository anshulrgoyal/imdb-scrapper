const request = require('./request')
const cheerio = require('cheerio')
const {ifError} = require('./error')

function getUpcoming (n = 50, region = null) {
    return request(`https://www.imdb.com/calendar/?ref_=nv_mv_cal${region ? `&region=${region}` : ''}`).then((data) => {
      const $ = cheerio.load(data)
      let upcoming = []
      let i = 1
      const movies = $('#main li a')
      const moviesLength = movies.length
      while (i <= n && i < moviesLength) {
        try {
          const m = movies[i]
          upcoming.push({
            name: $(m).text(),
            id: $(m).attr('href').split('/')[2]
          })
          i++
        } catch (e) {
          i++
          console.log(e)
        }
      }
      return {upcoming}
    }).catch(ifError)
}

module.exports = {getUpcoming}
