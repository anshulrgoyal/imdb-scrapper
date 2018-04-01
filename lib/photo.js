function getImageCast($) {
    const imagesCast = Array.from($('#titleCast img')).map((data) => {
        if (data.attribs.alt) {
            return {
                name: data.attribs.alt,
                image: data.attribs.src
            }
        } else return null;
    }).filter(data => data)
    return {cast:imagesCast}
}
function getPoster($){
    return {poster: $('.poster > a:nth-child(1) > img:nth-child(1)')[0].attribs.src}
    }
module.exports={getImageCast,getPoster};