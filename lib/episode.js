function getEpisodes ($) {
    const episodes = [];

    $('.eplist > .list_item').each(function(i) {
      const story = $(`.eplist > div:nth-child(${i+1}) > .info > .item_description`).text().trim();
      episodes.push({
          name: $(`.eplist > div:nth-child(${i+1}) > div.info > strong > a`).text(),
          story: story.includes('about?') ? 'N/A' : story,
          airDate: $(`.eplist > div:nth-child(${i+1}) > .info > .airdate`).text().trim(),
          rating: $(`.eplist > div:nth-child(${i+1}) > .info > .ipl-rating-widget > .ipl-rating-star > .ipl-rating-star__rating`).text()
      })
    })

    return {episodes}
}

module.exports = {getEpisodes}
