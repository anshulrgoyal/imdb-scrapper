function getEpStory ($) {
    try {
      return {story: $('div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)').text()}
    } catch (e) {
      return {story: 'N/A'}
    }
}

function getAirDate ($) {
    return {airDate: $('.title_wrapper').text().split('aired')[1].trim()}
}

function getEpRating ($) {
    return {rating: $('.ratingValue > strong > span').text()}
}

module.exports = {getEpStory, getAirDate, getEpRating}
