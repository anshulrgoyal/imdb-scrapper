const { request } = require("./request");
const cheerio = require("cheerio");
const { ifError } = require("./error");

/**
 * getTrending - the function provide trending based on type=['movie'.'tv']
 *
 * @param {number} [n=50]       number of result
 * @param {string} [type=movie] type of movie or tv
 *
 * @returns {Promise<Array>} array with result
 */
function getTrending(n = 50, type = "movie") {
  const urls = {
    tv: "https://www.imdb.com/chart/tvmeter",
    movie: "https://www.imdb.com/chart/moviemeter"
  };
  return request(urls[type])
    .then(data => {
      const $ = cheerio.load(data);
      let trending = [];
      let i = 1;
      while (i <= n) {
        try {
          trending.push({
            name: $(
              `.lister-list > tr:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`
            ).text(),
            poster:
              $(
                `.lister-list > tr:nth-child(${i}) > td:nth-child(1) > a:nth-child(6) > img:nth-child(1)`
              )[0].attribs.src.split("@._")[0] + "@._V1_QL50.jpg",
            id: $(
              `.lister-list > tr:nth-child(${i}) > td:nth-child(1) > a:nth-child(6)`
            )[0].attribs.href.split("/")[2]
          });
          i++;
        } catch (e) {
          i++;
          console.log(e);
        }
      }
      return { trending };
    })
    .catch(ifError);
}

/**
 * getTrendingGenre - Description
 *
 * @param {string} [genre=action] the genere for trending
 * @param {number} [n=7]          the number of result
 *
 * @returns {Promise<Array>} result of array
 */
function getTrendingGenre(genre = "action", n = 7) {
  return request(`https://www.imdb.com/search/title?genres=${genre}`)
    .then(data => {
      let trending = [];
      let i = 1;
      const $ = cheerio.load(data);
      while (i <= n) {
        try {
          trending.push({
            name: $(
              `div.lister-item:nth-child(${i}) > div:nth-child(2) > a:nth-child(1) > img:nth-child(1)`
            )[0].attribs.alt,
            poster:
              $(
                `div.lister-item:nth-child(${i}) > div:nth-child(2) > a:nth-child(1) > img:nth-child(1)`
              )[0].attribs.loadlate.split("@._")[0] + "@._V1_QL50.jpg",
            id: $(
              `div.lister-item:nth-child(${i}) > div:nth-child(2) > a:nth-child(1)`
            )[0].attribs.href.split("/")[2]
          });
          i++;
        } catch (e) {
          i++;
        }
      }
      return { trending };
    })
    .catch(ifError);
}
module.exports = { getTrending, getTrendingGenre };
