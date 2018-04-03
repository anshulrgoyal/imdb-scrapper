const request=require('request-promise-native');
const cheerio=require('cheerio');

function search(term,n=4) {
   return request.get(`https://www.imdb.com/find?q=${term}&s=tt&exact=true&ref_=fn_al_tt_ex`).then((data)=>{
        const $=cheerio.load(data);
        let result=[];
        let i=1;
        while(i<=n){
            try{
                result.push({
                    poster:$(`tr.findResult:nth-child(${i}) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)`)[0].attribs.src,
                    title:$(`tr.findResult:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`).text(),
                    id:$(`tr.findResult:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`)[0].attribs.href.split("/")[2],
                })
                i++;
            }
            catch (e) {
                i++;
            }
        }
        return result;
    })
}
module.exports={search}