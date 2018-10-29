const request = require('./request')
const cheerio = require('cheerio')
const {ifError} = require('./error')

function search (term, n = 4) {
  return request(`https://www.imdb.com/find?q=${term}&s=tt&exact=true&ref_=fn_al_tt_ex`).then((data) => {
    const $ = cheerio.load(data)
    let result = []
    let i = 1
    while (i <= n) {
      try {
        result.push({
          poster: $(`tr.findResult:nth-child(${i}) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)`)[0].attribs.loadlate.split('@._')[0] + '@._V1_QL50.jpg',
          title: $(`tr.findResult:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`).text(),
          id: $(`tr.findResult:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`)[0].attribs.href.split('/')[2]
        })
        i++
      } catch (e) {
        i++
      }
    }
    return result
  }).catch(ifError)
}

function simpleSearch (term) {
  let prefix = term[0].toLowerCase();
  return request(`https://v2.sg.media-imdb.com/suggests/${prefix}/${term}.json`).then((data) => {
    let termWithUnderscores = term.split(' ').join('_')
    data = data.split(`imdb$${termWithUnderscores}(`)
    let re = data[1].split('')
    re.pop()
    re = re.join('')
    return JSON.parse(re)
  }).catch(ifError)
}

function searchActor(keyword){
  return request(`https://www.imdb.com/find?ref_=nv_sr_fn&q=${keyword}&s=nm`).then((data) => {
    const $ = cheerio.load(data);
    let result = [];
    result.push({
      searchQuery: keyword
    });
    $('tr').each((index, element) => {
      try{
        var image = $(element).find('td.primary_photo > a > img').attr('src');
        var name = $(element).find('td.result_text > a').text();
        image = image.replace('"', "").replace(/\\g/, "").split("@._")[0] += '@._V1_UX1024_CR1024,1024,0,0_AL_.jpg';
        var id = $(element).find('td.primary_photo > a').attr('href').split("/")[2];
        result.push({
          actorImage: image,
          actorName: name,
          actorId: id,
        });
      }catch(e){
        console.log("An error occurred when pushing: " + e);
      }
    });
    return result;
  }).catch(ifError)
}

module.exports = {search, simpleSearch, searchActor}
