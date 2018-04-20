function getGenre ($) {
  try {
    let hello = $('div.see-more:nth-child(10)').text().split('\n')
    hello.pop()
    hello.splice(0, 2)
    return {genre: hello.join('').split('|')}
  } catch (e) {
    return {genre: 'N/A'}
  }
}

function getStory ($) {
  try {
    return {story: $('div.inline:nth-child(3) > p:nth-child(1)').text().split('\n').join('').split('\T').join('').split('\'').join('').split('        Written byEditor ')[0]}
  } catch (e) {
    return {story: 'N/A'}
  }
}

function getPro ($) {
  try {
    return {
      director: $('div.credit_summary_item:nth-child(2) > span:nth-child(2) > a:nth-child(1) > span:nth-child(1)').text(),
      writer: $('div.credit_summary_item:nth-child(3) > span:nth-child(2) > a:nth-child(1) > span:nth-child(1)').text()
    }
  } catch (e) {
    return {
      director: 'N/A',
      writer: 'N/A'
    }
  }
}

function getYear ($) {
  return {year: $(`#titleYear > a:nth-child(1)`).text()}
}

function getRuntime ($) {
  try {
    return {runtime: $('.subtext > time:nth-child(3)').text().split('  ')[12].split('\n')[0]}
  } catch (e) {
    return {runtime: ''}
  }
}

function getRating ($) {
  return {rating: $('.ratingValue > strong:nth-child(1) > span:nth-child(1)').text()}
}

function getTitle ($) {
  return {title: $('.title_wrapper > h1:nth-child(1)').text().split('    ')[0]}
}

module.exports = {getRating, getGenre, getPro, getStory, getTitle, getYear, getRuntime}
