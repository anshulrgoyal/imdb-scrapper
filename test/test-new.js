const childProcess = require("child_process");
const jobs = require("./../jobs");

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
  return result;
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

// if file is exucted directly using node
if ((module = require.main)) {
  Promise.all(jobs(testOutput)).then(v => {
    fs.writeFileSync(__dirname + "/result.md", arr.join("\n"));
    const result = v.every(t => t);
    console.log(`${result ? "all test passed" : "some test failed"}`);
    process.exit(0);
  });
}
