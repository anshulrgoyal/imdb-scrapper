const { request } = require("./request");
const cheerio = require("cheerio");
const { ifError } = require("./error");

/**
 * getCast - the function gives the cast of movie or tv show
 *
 * @param {type}   id     of movie or tv show
 *
 * @param {number} [n=20] top n actors
 *
 * @returns {Promise<Array>} array contains object with name poster role
 */
function getCast(id, n = 20) {
  return request(
    `https://m.imdb.com/title/${id}/fullcredits/cast?ref_=m_ttfc_3`
  )
    .then(data => {
      const $ = cheerio.load(data);
      let cast = [];
      let i = 0;
      while (i < n) {
        try {
          cast.push({
            name: $(`h4`)
              .slice(i, i + 1)
              .text(),
              id: $('.subpage')[i+1].attribs.href.match(/(nm\d{7,8})/g)[0],
            image:
              $(".media-object")[i + 1].attribs.src.split("@._")[0] +
              "@._V1_QL50.jpg",
            role: $(".h4")
              .slice(i + 1, i + 2)
              .text()
              .split("\n")
              .join("")
          });
          i++;
        } catch (e) {
          i++;
        }
      }
      // console.log(cast)
      return { cast: cast };
    })
    .catch(ifError);
}



/**
 * getPoster - return poster with high quality image
 *
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Object} keys are poster
 */
function getPoster($) {
  return {
    poster:
      $(".poster > a:nth-child(1) > img:nth-child(1)")[0].attribs.src.split(
        "@._"
      )[0] + "@._V1_QL50.jpg"
  };
}

// available quality for image
const qualities = {
  "0": "@._V1_QL50.jpg",
  "1": "@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
  "2": "@._V1_UX148_CR0,0,148,216_AL__QL50.jpg",
  "3": "@._V1_UX86_CR0,0,86,86_AL_.jpg",
  "4": "@._V1_UY99_CR43,0,99,99_AL_.jpg",
  "5": "@._V1_UX32_CR0,0,32,44_AL_.jpg"
};

/**
 * changeQuality - change the quality with six options
 *
 * @param {string} [url=""]    the url must be valid imdb url
 *
 * @param {number} [quality=0] the quality lower the quality an be between 0-5
 *
 * @returns {string} the changed quality string
 */
function changeQuality(url = "", quality = 0) {
  return url.split("@._")[0] + qualities[quality];
}

module.exports = { getPoster, getCast, changeQuality };
