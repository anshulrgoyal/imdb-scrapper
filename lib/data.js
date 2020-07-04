const request = require("./request");
const cheerio = require("cheerio");
const { ifError } = require("./error");

/**
 * getGenre - return the array of genere of the movies
 *
 * @param {Object} $ then cheerio loaded html string
 *
 * @returns {Object} object with genre key and value as array of string
 */
function getGenre($) {
  try {
    let genreString = $("div.see-more:nth-child(10)")
      .text()
      .split("\n");
    genreString.pop();
    genreString.splice(0, 2);
    return {
      genre: genreString
        .join("")
        .split("|")
        .map(gen => gen.trim())
    };
  } catch (e) {
    return { genre: ["N/A"] };
  }
}

/**
 * getStory - gives the story of the movies
 *
 * @param {Object} $ the cheerio load html string
 *
 * @returns {Object} the object with key story and value as string pf plot of movie
 */
function getStory($) {
  try {
    return {
      story: $("div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)")
        .text()
        .trim()
    };
  } catch (e) {
    return { story: "N/A" };
  }
}

/**
 * getPro - gives directors and writers
 *
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Object} the key can be director or directors and writer or writers
 */
function getPro($) {
  try {
    let creditDetails = {};
    $(".credit_summary_item").each(function(i, elem) {
      let creditText = $(".inline", elem)
        .text()
        .trim()
        .match(/\w*/)[0]
        .toLowerCase()
        .trim();

      creditDetails[creditText] = [];
      creditDetails[creditText].push(
        $("a", elem)
          .first()
          .text()
          .trim()
      ); //handle the first person

      //handle rest people  until the 'See more' links
      $("a", elem)
        .nextUntil("span")
        .each(function(index2) {
          creditDetails[creditText].push(
            $(this)
              .text()
              .trim()
          );
        });
    });
    return creditDetails;
  } catch (e) {
    return {
      directors: "N/A",
      writers: "N/A",
      stars: "NA"
    };
  }
}

/**
 * getYear - The realease year of the movie or tv
 *
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Obect} the key is year and value is string of realease year
 */
function getYear($) {
  return {
    year:
      $(`#titleYear > a:nth-child(1)`).text() ||
      $(`a[title="See more release dates"]`)
        .text()
        .match(/\d{4}/)[0]
        .trim()
  };
}

/**
 * getRuntime - The runtime of movie or tv shows
 *
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Object} the key is runtime with value is string
 */
function getRuntime($) {
  try {
    return {
      runtime: $(".subtext time")
        .text()
        .trim()
    };
  } catch (e) {
    return { runtime: "" };
  }
}

/**
 * getEpisodeCount - the function provide the number of episode and season
 *
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Object} the key is episodes and seasons
 */
function getEpisodeCount($) {
  try {
    let headingText = $(`.bp_heading`)
      .text()
      .trim();
    if (headingText == "Episode Guide") {
      return {
        episodes: $(`.bp_sub_heading`)
          .text()
          .trim(),
        seasons: $(`.seasons-and-year-nav > div:nth-child(4) > a:nth-child(1)`)
          .text()
          .trim()
      };
    } else {
      return {};
    }
  } catch (e) {
    return {};
  }
}

/**
 * getRating - it provide rating of movie and tv show
 *
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Object} the key is rating
 */
function getRating($) {
  return {
    rating: $(".ratingValue > strong:nth-child(1) > span:nth-child(1)")
      .text()
      .trim()
  };
}

function getTitle($) {
  return {
    title: $(".title_wrapper > h1:nth-child(1)")
      .text()
      .split("    ")[0]
      .trim()
  };
}

/**
 * getStar - the function to get star or cast
 *
 * @param {Object} $ cheerio loaded string
 *
 * @returns {Object} the object contains id ,name,photoUrl
 */
function getStar($) {
  return function(index, element) {
    const id = $(this)
      .find(".lister-item-image a")
      .attr("href")
      .replace("/name/", "")
      .trim();
    const name = $(this)
      .find(".lister-item-image a img")
      .attr("alt")
      .trim();
    const photoUrl = $(this)
      .find(".lister-item-image a img")
      .attr("src")
      .trim();
    return { id, name, photoUrl };
  };
}

/**
 * getStars - the functions give star and cast
 *
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Object} the keys are stars
 */
function getStars($) {
  const stars = $(".lister-list .lister-item").map(getStar($));
  return Array.from(stars);
}

/**
 * getSimilarMovieTitle - provide the similar movies or related movies
 *
 * @param {Object} $ cheerio loaded html
 *
 * @returns {Object} the keys are id ,poster,name
 */
function getSimilarMovieTitle($) {
  return function(index, element) {
    const id = $(this)
      .find("a")[0]
      .attribs.href.split("/")[2];
    const _title = $(this).find(".rec_poster_img").attr('title') || '';
    const _poster = $(this).find(".rec_poster_img").attr('loadlate') || '';
    return { id, name: _title.trim(), poster: _poster.trim() };
  };
}

/**
 * getSimilarMoviesById - provide realated movie is array
 *
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Array}
 */
function getSimilarMoviesById($) {
  const similarMoviesList = $(".rec_poster").map(getSimilarMovieTitle($));
  return { related: Array.from(similarMoviesList) };
}

module.exports = {
  getRating,
  getGenre,
  getPro,
  getStory,
  getTitle,
  getYear,
  getRuntime,
  getEpisodeCount,
  getStar,
  getStars,
  getSimilarMoviesById,
  getSimilarMovieTitle
};
