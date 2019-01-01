/**
 * getAwards - get award of each type
 *
 * @param {Integer} n position of award function
 * @param {Integer} f postion of award type
 * @param {Integer} $ loaded cheerio html string
 *
 * @returns {Object} the key are category,wonBy
 */
function getAwards(n, f, $) {
  const k = n === 1 ? 2 : 1;
  const position = $(
    `table.awards:nth-child(${f}) > tbody:nth-child(1) > tr:nth-child(${n}) > td:nth-child(${k})`
  ).text();
  var refactor = position
    .split("\n")
    .join("")
    .split("  ");
  const category = refactor[6];
  const wonBy = refactor[10];
  return { category, wonBy };
}

/**
 * getAwardCategory - get category for each award
 *
 * @param {NUMBER} n position of the award category
 * @param {Object} $ cheerio loaded object from html string
 *
 * @returns {Object} contains category name
 */
function getAwardCategory(n, $) {
  // table.awards:nth-child(n) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(3)
  const position = $(
    `table.awards:nth-child(${n}) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(3)`
  ).text();
  return position;
}

/**
 * getWinner - get the name of the winner person
 *
 * @param {Number} k postion of the winner
 * @param {Object} $ cheerio loaded html string
 *
 * @returns {Object} uses all the above function and get award winner
 */
function getWinner(k, $) {
  var type = getAwardCategory(k, $);
  let award = { name: type, winner: [] };
  try {
    var loop = $(
      `table.awards:nth-child(${k}) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)`
    )[0].attribs.rowspan;
  } catch (e) {}
  // table.awards:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)
  var i = 1;
  while (loop--) {
    try {
      award.winner.push(getAwards(i, k, $));
      i++;
    } catch (e) {
      i++;
    }
  }
  return award;
}

module.exports = { getWinner };
