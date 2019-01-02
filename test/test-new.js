const childProcess = require("child_process");
const os = require("os");
const {
  scrapper,
  getTrendingGenre,
  getTrending,
  search,
  getFull,
  getStarsByBornDay,
  getStarsBornToday,
  awardsPage,
  episodesPage,
  getCast,
  getActor,
  searchActor,
  simpleSearch,
  getUpcoming,
  changeQuality
} = require("./../index");

const fs = require("fs");
// main content of the file
const arr = ["# Test Result"];

function formatResult(name, result) {
  const args = name.split("-");
  return `- The test for ***${
    args[0]
  }*** with following arguments  '${args.slice(1).join(",")}' has  ***${
    result ? "passed" : "failed"
  }***`;
}
/**
 * testOutput - generate output file for function
 *
 * @param {String} name  the name of output file
 *
 * @param {Object | Array} value the returned value of the function output is generated
 *
 * @returns {Undifined}
 */
function testOutput(name, value) {
  let val = fs.readFileSync(__dirname + "/../output/" + name + ".json");
  val = JSON.parse(val);
  const result = test(value, val);
  arr.push(formatResult(name, result));
  if (result) {
    console.log(`test for ${name} passed`);
  } else {
    console.log(`test for ${name} failed`);
  }
}
function test(shouldBe, actual) {
  const type = typeof actual;
  if (type === typeof actual) {
    switch (type) {
      case "string":
        return actual === shouldBe;
        break;
      case "number":
        return actual === shouldBe;
        break;
      case "boolean":
        return actual === shouldBe;
        break;
      case "array":
        if (shouldBe.length !== actual.length) return false;
        return actual.every((ven, index) => test(shouldBe[index], ven));
        break;
      default:
      case "object":
        if (Object.keys(shouldBe).length !== Object.keys(actual).length)
          return false;
        return Object.keys(actual).every((ven, index) =>
          test(shouldBe[ven], actual[ven])
        );
        break;
    }
  } else return false;
}

// add function for output an send arguments or provide a name and outputs
const jobs = () => [
  getFull("tt2395427").then(movieDetails => {
    testOutput("getFull-tt2395427", movieDetails);
  }),

  simpleSearch("flash").then(data => {
    testOutput("simpleSearch-flash", data);
  }),

  getTrending(7).then(data => {
    testOutput("getTrending-7", data);
  }),

  getTrendingGenre("comedy", 7).then(data => {
    testOutput("getTrending-comedy-7", data);
  }),

  awardsPage("tt2395427").then(movieDetails => {
    testOutput("awardsPage-tt5580390", movieDetails);
  }),

  scrapper("tt1825683").then(movieDetails => {
    testOutput("scrapper-tt1825683", movieDetails);
  }),

  search("new").then(result => {
    testOutput("search-'new world'", result);
  }),

  episodesPage("tt3107288", 2).then(episodes => {
    testOutput("episodesPage-tt3107288-2", episodes);
  }),
  getCast("tt1825683").then(movieDetails => {
    testOutput("getCast-tt1825683", movieDetails);
  }),

  getActor("nm2652716").then(actorDetails => {
    testOutput("getActor-nm2652716", actorDetails);
  }),

  searchActor("govinda").then(val => {
    testOutput("searchActor-govinda", val);
  }),

  getUpcoming(20).then(val => {
    testOutput("getUpcoming-20", val);
  })
];

// if file is exucted directly using node
if ((module = require.main)) {
  Promise.all(jobs()).then(v => {
    fs.writeFileSync(__dirname + "/result.md", arr.join("\n"));
    console.log("all test performed");
    process.exit(0);
  });
}
