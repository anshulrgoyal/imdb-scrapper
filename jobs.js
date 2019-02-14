const {
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
  getUpcoming,
  changeQuality
} = require("./index");

const jobs = excuteMe => [
  getFull("tt2193021").then(movieDetails => {
    return excuteMe("getFull-tt2193021", movieDetails);
  }),

  simpleSearch("flash").then(data => {
    return excuteMe("simpleSearch-flash", data);
  }),

  getTrending(7).then(data => {
    return excuteMe("getTrending-7", data);
  }),

  getTrendingGenre("comedy", 7).then(data => {
    return excuteMe("getTrending-comedy-7", data);
  }),

  awardsPage("tt2395427").then(movieDetails => {
    return excuteMe("awardsPage-tt5580390", movieDetails);
  }),

  scrapper("tt1825683").then(movieDetails => {
    return excuteMe("scrapper-tt1825683", movieDetails);
  }),

  search("new").then(result => {
    return excuteMe("search-'new world'", result);
  }),

  episodesPage("tt3107288", 2).then(episodes => {
    return excuteMe("episodesPage-tt3107288-2", episodes);
  }),
  getCast("tt1825683").then(movieDetails => {
    return excuteMe("getCast-tt1825683", movieDetails);
  }),

  getActor("nm2652716").then(actorDetails => {
    return excuteMe("getActor-nm2652716", actorDetails);
  }),

  searchActor("govinda").then(val => {
    return excuteMe("searchActor-govinda", val);
  }),

  getUpcoming(20).then(val => {
    return excuteMe("getUpcoming-20", val);
  })
];

module.exports = jobs;
