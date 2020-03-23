/**
 * main file for library and the all the functions are exported from these file
 * and exported from here to user
 * only functions with request are added to this file
 * use functions which return the promise only
 * */

const d3TimeFormat = require("d3-time-format").timeFormat;
const cheerio = require("cheerio"); // import cheerio for making use of css selector to get info

const native =require("./native");
const {
    request,
} = require("./request"); // importing request for making get request

const { ifError } = require("./error"); // error file
const { getWinner } = require("./awards"); // awards are provided
const { getCast, getPoster, changeQuality } = require("./photo"); // poster and cast info is given by this function
const { getEpisodes } = require("./episode");
const {
    getRating,
    getGenre,
    getPro,
    getStory,
    getTitle,
    getRuntime,
    getYear,
    getEpisodeCount,
    getStars,
    getSimilarMoviesById
} = require("./data");
const { getTrending, getTrendingGenre } = require("./trending"); // provide trending functions
const { search, searchActor, simpleSearch } = require("./search"); // provide search functions
const { getUpcoming } = require("./upcoming"); // provide upcoming movies
const { getActorData } = require("./actor");

const getMonthDay = d3TimeFormat("%m-%d");
const BASE_URL = "https://www.imdb.com";

/**
 * scrapper - the function to get meta data about movie or tvshow
 *
 * @param {type} id The id of movie or tv show
 *
 * @returns {Promise<Object>} the keys are
 * title,runtime,year,story,writers|writer,producer|producers,
 * director|directors,genre,poster,episodes,seasons,related
 */
function scrapper(id) {
    return request(`${BASE_URL}/title/${id}/?ref_=nv_sr_1`)
        .then(data => {
            const $ = cheerio.load(data);
            const r= {
                ...getTitle($),
                ...getRuntime($),
                ...getYear($),
                ...getStory($),
                ...getPro($),
                ...getGenre($),
                ...getRating($),
                ...getPoster($),
                ...getEpisodeCount($),
                ...getSimilarMoviesById($)
            };
        })
        .catch(ifError);
} // combining all the low level api in the single one

/**
 * awardsPage - get top three awards won by the movies
 *
 * @param {type} id id of the movie
 *
 * @returns {Promise<Array>} array contains object
 */
function awardsPage(id) {
    return request(`${BASE_URL}/title/${id}/awards?ref_=tt_awd`)
        .then(data => {
            const $ = cheerio.load(data);
            return [getWinner(4, $), getWinner(7, $), getWinner(10, $)];
        })
        .catch(ifError);
}

/**
 * episodesPage - provides the epiosdes of particular series
 *
 * @param {String}   id         the id of movie or tv show
 * @param {number} [season=1] Description
 *
 * @returns {Promise<Array>} array contains the object
 */
function episodesPage(id, season = 1) {
    return request(`https://www.imdb.com/title/${id}/episodes?season=${season}`)
        .then(data => {
            const $ = cheerio.load(data);
            return { ...getEpisodes($) };
        })
        .catch(ifError);
}

/**
 * getStarsByBornDay - the function provide the days stars were borned
 *
 * @param {object} [date={}] the date which born stars are required
 *
 * @returns {Promise<Array>} the array contains the object
 */
function getStarsByBornDay(date = new Date()) {
    const monthday = getMonthDay(date);
    return request(
        `${BASE_URL}/search/name?birth_monthday=${monthday}&refine=birth_monthday&ref_=nv_cel_brn`
    )
        .then(data => {
            const $ = cheerio.load(data);
            return getStars($);
        })
        .catch(ifError);
}

/**
 * getStarsBornToday - get stars born today
 *
 * @returns {Promise<Array>} array contains the object
 */
function getStarsBornToday() {
    return getStarsByBornDay(Date.now());
}

/**
 * getFull - get all the details of a particular movie
 *
 * @param {type} id the id movie or the tv show
 *
 * @returns {Promise<object>}
 */
function getFull(id) {
    return Promise.all([scrapper(id), awardsPage(id), getCast(id)])
        .then(data => {
            return { ...data[0], awards: data[1], ...data[2] };
        })
        .catch(ifError);
}

/**
 * getActor - get actor detail
 *
 * @param {type} id of the actor
 *
 * @returns {Promise<Array>} the array contains the object
 */
function getActor(id) {
    return request(`https://www.imdb.com/name/${id}/?ref_=tt_cl_t1`)
        .then(data => {
            const $ = cheerio.load(data);
            return getActorData($);
        })
        .catch(ifError);
}

(function(){
    const t=Date.now();
    console.log("kkk")
    native.scrap("tt3107288").then(console.log)
    native.scrap("tt7131622").then(()=>console.log(Date.now()-t))
})()

module.exports = {
    ...native,
    scrapper,
    getTrendingGenre,
    getTrending,
    search,
    getFull,
    getStarsByBornDay,
    getStarsBornToday,
    awardsPage,
    episodesPage,
    getCast,
    getActor,
    searchActor,
    simpleSearch,
    ifError,
    request,
    getUpcoming,
    changeQuality,
};