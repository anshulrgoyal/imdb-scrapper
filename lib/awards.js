function getAwards (n, f, $) {
  const k = n === 1 ? 2 : 1
  const position = $(`table.awards:nth-child(${f}) > tbody:nth-child(1) > tr:nth-child(${n}) > td:nth-child(${k})`).text()
  var refactor = position.split('\n').join('').split('  ')
  const category = refactor[6]
  const wonBy = refactor[10]
  return {category, wonBy}
}

function getAwardCategory (n, $) {
  // table.awards:nth-child(n) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(3)
  const position = $(`table.awards:nth-child(${n}) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(3)`).text()
  return position
}

function getWinner (k, $) {
  let awards = {}
  var type = getAwardCategory(k, $)
  awards[type] = []
  try {
    var loop = $(`table.awards:nth-child(${k}) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)`)[0].attribs.rowspan
  } catch (e) {

  }
  // table.awards:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)
  var i = 1
  while (loop--) {
    try {
      awards[type].push(getAwards(i, k, $))
      i++
    } catch (e) {
      i++
    }
  }
  return awards
}

module.exports = {getWinner}
