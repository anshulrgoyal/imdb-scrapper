function getEpisodes ($) {
    const episodes = [];

    $('.eplist > .list_item').each(function(i) {
      const story = $(`.eplist > div:nth-child(${i+1}) > .info > .item_description`).text().trim();
      episodes.push({
          poster:$(`div.list_item:nth-child(${i+1}) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > img:nth-child(1)`)[0].attribs.src.split('@._')[0] + '@._V1_QL50.jpg',
          name: $(`.eplist > div:nth-child(${i+1}) > div.info > strong > a`).text(),
          story: story.includes('about?') ? 'N/A' : story,
          airDate: $(`.eplist > div:nth-child(${i+1}) > .info > .airdate`).text().trim(),
          rating: $(`.eplist > div:nth-child(${i+1}) > .info > .ipl-rating-widget > .ipl-rating-star > .ipl-rating-star__rating`).text()
      })
    })

    return {episodes}
}

module.exports = {getEpisodes}
