function getImageCast($) {
    let imagesCast = Array.from($('#titleCast img')).map((data) => {
        if (data.attribs.alt) {
            return {
                name: data.attribs.alt,
                image: data.attribs.src
            }
        } else return null;
    }).filter(data => data)
    imagesCast=imagesCast.map((detail,i)=>{
       try {
           return {
               ...detail,
               role: $(`tr:nth-child(${i+2}) > td:nth-child(4) > div:nth-child(1) > a:nth-child(1)`).text().split("\'").join(" ").split("\n")[0]
           }
       }
       catch (e) {
           
       }
    })
    return {cast:imagesCast}
}
function getPoster($){
    return {poster: $('.poster > a:nth-child(1) > img:nth-child(1)')[0].attribs.src}
    }
module.exports={getImageCast,getPoster};