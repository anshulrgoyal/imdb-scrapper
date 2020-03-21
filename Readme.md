# IMDB Scrapper

This is one stop tool/lib for getting any type of data from IMDB website. For instance, you can get cast(s) of a movie or awards won by that movie and some of it's basic information. All the images function provides images with title and poster of high quality.
Every function in this lib is asynchronous, they all return a promise. The module is made to be modular for different functions. It provides many functions:

1.  `scrapper(id)`: `id` refers to IMDBID like _tt1825683_. This function provides some basic metadata like genre, runtime, plot etc.
2.  `awardsPage(id)`: `id` refers to IMDBID like _tt1825683_. This function provides list of awards won by the movie. By default it provides first three awards or most rated ones.
3.  `getCast(id[,n])`: `id` refers to IMDBID like _tt1825683_, `n` is optional, it specify number of actors and actresses. By default it is set to 20. This function provide cast of the movies.
4.  `getFull(id)`: `id` refers to IMDBID like _tt1825683_. This function is the amalgamation of above three. And its configurations are set to default.
5.  For making a get request use **request**
6.  `getActor(id)` : to get detail of the actor id is the actor id like _nm43124_.This function provide basic info about the actor like name ,birthdate, image etc
7.  `searchActor(term)`:This function provide the serach functionality for actors
8.  `episodePage(id,seasonNumber)`:the season no. is the season which is required
9.  `simpleSearch(term)` :This provide a fast way to get autocomplete suggestions .Under the hood it uses the imdb api for result.No scrapping is involved in the process.
10. `serach(term)` : This provide api to serach for `term` using scrapping.
11. `getTrendingGenre(genre,n), getTrending(n,type)`:get movies trending based on `genre` or `type =['tv','movies']`.
12. `getStarsBornToday(),getStarsBorn(date)`:gives the stars born on `date` or today.
13. `changeQuality(url,n)` a function to change the quality of image in `url` based on the scale of _0-5_ n specify the scale .

### Check test.js for example of allmost very function usage and returned data ;)

## Using above function in different PNC

If awards and cast is only required,

```javascript
const funs = [awardsPage("tt1825683"), getCast("tt1825683", 14)];
Promise.all(funs)
  .then(data => {
    return { ...data[0], ...data[1] };
  })
  .then(movieDetails => {
    console.log(movieDetails);
  });
```

### To install the package

```
npm install --save imdb-scrapper
```

## Search APIs

The most important aspect of any movie website is search. This module provides two search strategies:

1.  `search(term,n)`: `term` represents the search query and `n` signify the required number of results. The
    function provide search results from all the genres.
2.  `simpleSearch(term)`: `term` represents the search query. This function is faster as it directly uses
    the ajax calls made by IMDB page and is suited for auto complete feature.

## Trending Movies

This section is not provided by any other api or scrapper including cast and awards.
There are two different ways of scrapping provide by this lib:

1.  `getTrending([n])`: `n` is an optional parameter, representing the count of result required. This function provides
    the trending movies known as _trending 250_ on IMDB website.
2.  `getTrendingGenre(genre [,n])`: `n` is an optional parameter, representing the count of result required. This function provide results sorted on the basis of genres.

**_Have a look at outputGenerator for expamle and output for output example also have look at [example](https://github.com/hack-throne/imdb-scrapper/blob/master/EXAMPLE.md)_**

_I hope it helps._


**Currenly I am in process of converting this scrapper to use rust under the hood for scrapping, will start with few basic functions and then move towards full rewrite**
