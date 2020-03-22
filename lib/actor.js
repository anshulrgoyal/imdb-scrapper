/**
 * getActorData - get the details of the actor
 *
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Promise<Object>} the keys are actorName,actorBorn,actorInfo,actorImage,actorBirth
 */
function getActorData($) {
  let result = [];
  let info = $("div.inline")
    .text()
    .split("\n")
    .join(" ")
    .split("...");
  let birthDate = $("div#name-born-info a:nth-child(1)")
    .text()
    .trim();
  let birthYear = $("div#name-born-info a:nth-child(2)")
    .text()
    .trim();
  let bornInfo = $("div#name-born-info a:nth-child(3)")
    .text()
    .trim();
  let name = $("h1.header span.itemprop")
    .text()
    .trim();
  let image = $("a img#name-poster")
    .attr("src")
    .trim();
  result.push({
    actorName: name,
    actorImage: image,
    actorInfo: info[0].trim(),
    actorBirth: birthDate + ", " + birthYear,
    actorBorn: bornInfo
  });
  return result;
}

module.exports = { getActorData };
