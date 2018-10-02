function getGenre ($) {
  try {
    let genreString = $('div.see-more:nth-child(10)').text().split('\n')
    genreString.pop()
    genreString.splice(0, 2)
    return {genre: genreString.join('').split('|')}
  } catch (e) {
    return {genre: 'N/A'}
  }
}

function getStory ($) {
  try {
    return {story: $('div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)').text()}
  } catch (e) {
    return {story: 'N/A'}
  }
}

function getPro ($) {
  try {
    let creditDetails = {}
    $('.credit_summary_item').each(function(i, elem) {
      let creditText = $('.inline', elem).text().trim().match(/\w*/)[0].toLowerCase();

      creditDetails[creditText] = [];
      creditDetails[creditText].push($('a', elem).first().text()) //handle the first person

      //handle rest people  until the 'See more' links
      $('a', elem).nextUntil('span').each( function(index2){
        creditDetails[creditText].push($(this).text())
      });
    });
    return creditDetails;
  } catch (e) {
    console.log(e)
    return {
      directors: 'N/A',
      writers: 'N/A',
      stars: 'NA'
    }
  }
}

function getYear ($) {
  return {year: $(`#titleYear > a:nth-child(1)`).text() || $(`a[title="See more release dates"]`).text().match(/\d{4}/)[0]}
}

function getRuntime ($) {
  try {
    return {runtime:  $('.subtext time').text().trim()}
  } catch (e) {
    return {runtime: ''}
  }
}

function getEpisodeCount($){
  try {
    let headingText = $(`.bp_content .bp_description .bp_heading`).text().trim();
    if(headingText == "Episode Guide"){
      return {
        episodes: $(`.bp_content .bp_description .bp_sub_heading`).text().trim()
      }
    } else{
      return {

      }
    }
  
  } catch (e) {
    return {}
  }
}

function getRating ($) {
  return {rating: $('.ratingValue > strong:nth-child(1) > span:nth-child(1)').text()}
}

function getTitle ($) {
  return {title: $('.title_wrapper > h1:nth-child(1)').text().split('    ')[0].trim()}
}

function getStar ($) {
  return function(index, element){
    const id = $(this).find('.lister-item-image a').attr('href').replace('/name/', '');
    const name = $(this).find('.lister-item-image a img').attr('alt');
    const photoUrl = $(this).find('.lister-item-image a img').attr('src');
    return {id, name, photoUrl }
  }
}

function getStars ($) {
  const stars = $('.lister-list .lister-item').map(getStar($));
  return Array.from(stars);
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
  getStars
}
