const { request } = require("./request");
const cheerio = require("cheerio");
const { ifError } = require("./error");

// regex for epiosde and season from string of format S01E34
const regex = /(S[0-9]+)|E[0-9]+/g;
/**
 * getShedule - The function to extract the shedule of tv shows
 *
 * @param {Object} $ The cheerio loaded html String
 *
 * @returns {Array<Object>} the data is returned in the form of an array with object
 */
function getShedule($) {
  const result = {};
  $(".day").each(function(i) {
    const date = $(this).attr("data-date");
    result[date] = [];
    $(this)
      .find(".title")
      .each(function(j) {
        const title = $(this)
          .text()
          .trim();
        result[date].push(formatName(title));
      });
  });
  return result;
}

/**
 * formatName - format the string of title to episode.
 *
 * @param {String} str title of the tv show with episode and season
 *
 * @returns {Object} the parsed data
 */
function formatName(str) {
  const match = str.match(regex);
  const result = {
    title: str.replace(regex, "").trim(),
    epiosde:
      match.length > 1 ? match[1].replace("E", "") : match[0].replace("E", ""),
    season: match.length > 1 ? match[0].replace("S", "") : ""
  };
  return result;
}

function getShedulewithInfo($) {
  const resultArray = [];
  $(".entry").each(function(i) {
    console.log($(this).text());
    const date = $(this).attr("data-date");
    const match = $(this)
      .text()
      .trim()
      .match(regex);
    const result = {
      date,
      epiosde:
        match.length > 1
          ? match[1].replace("E", "")
          : match[0].replace("E", ""),
      season: match.length > 1 ? match[0].replace("S", "") : ""
    };
    resultArray.push(result);
  });
  console.log(resultArray);
}

request("http://www.airdates.tv/s?q=info:2426").then(v => {
  getShedulewithInfo(cheerio.load(v));
});
module.exports = { getShedule };
