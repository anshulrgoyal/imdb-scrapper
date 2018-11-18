const request = require("./request");
const cheerio = require("cheerio");
const { ifError } = require("./error");

/**
 * getCast - the function gives the cast of movie or tv show
 *
 * @param {type}   id     of movie or tv show
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

module.exports = { getPoster, getCast };
