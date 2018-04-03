
const request=require('request-promise-native');
const cheerio=require('cheerio')
function getTrending( n = 50) {
    request.get('http://www.imdb.com/chart/moviemeter').then((data)=>{
        const $=cheerio.load(data)
        let trending=[];
        let i=8
        while(i<=105) {
            try {
                trending.push({
                    name: $(`.lister-list > tr:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`).text(),
                    poster: $(`.lister-list > tr:nth-child(${i}) > td:nth-child(1) > a:nth-child(6) > img:nth-child(1)`)[0].attribs.src,
                    id: $(`.lister-list > tr:nth-child(${i}) > td:nth-child(1) > a:nth-child(6)`)[0].attribs.href.split("/")[2]
                })
                i++;
            }
            catch (e) {
                i++;
            }
            return {trending}
        }
    })

}
function getTrendingGenre(genre){
    request.get(`https://www.imdb.com/search/title?genres=${genre}`).then((data)=>{
        let trending=[];
        let i=1;
        const $=cheerio.load(data);
        while(i<=50){
            try{
                trending.push({
                    name:$(`div.lister-item:nth-child(${i}) > div:nth-child(2) > a:nth-child(1) > img:nth-child(1)`)[0].attribs.alt,
                    poster:$(`div.lister-item:nth-child(${i}) > div:nth-child(2) > a:nth-child(1) > img:nth-child(1)`)[0].attribs.src,
                    id:$(`div.lister-item:nth-child(${i}) > div:nth-child(2) > a:nth-child(1)`)[0].attribs.href.split("/")[2]
            })
                i++;
            }
            catch (e) {

            }
        }
        return {trending};
    })
}
module.exports={getTrending,getTrendingGenre}