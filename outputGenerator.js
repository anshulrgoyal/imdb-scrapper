const childProcess = require("child_process");
const os = require("os");
const { changeQuality } = require("./index");
const jobs = require("./jobs");

const {
  template,
  imageTemplate,
  imageTemplateGroup
} = require("./generateReadMe");

const fs = require("fs");
const __folderPath = `${__dirname}/output`;
if (!fs.existsSync(__folderPath)) {
  fs.mkdirSync(__folderPath);
} else {
  if (os.platform() === "linux") {
    childProcess.spawnSync("rm", ["-rf", `${__dirname}/output`]);
    fs.mkdirSync(__folderPath);
  } else {
    console.warn("please remove output folder");
    process.exit(1);
  }
}
// main content of the file
const arr = [];

/**
 * generateFile - generate output file for function
 *
 * @param {String} name  the name of output file
 *
 * @param {Object | Array} value the returned value of the function output is generated
 *
 * @returns {Undifined}
 */
function generateFile(name, value) {
  fs.writeFileSync(
    __dirname + "/output/" + name + ".json",
    JSON.stringify(value, null, 4)
  );
  const arg = name.split("-");
  arr.push(
    template(
      `${arg[0]}(${arg.slice(1).join(",")})`,
      JSON.stringify(value, null, 2)
    )
  );
}

function generateImageTemplate(name, value) {
  const values = [...Array(6).keys()];
  // sample image url
  const url =
    "https://m.media-amazon.com/images/M/MV5BMjMzMzQ0NzI5Nl5BMl5BanBnXkFtZTgwNjc2NTY0NjM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg";
  const parsedUrl = values.map(val => {
    return imageTemplate(changeQuality(url, val), val);
  });
  arr.push(imageTemplateGroup(parsedUrl));
  return Promise.resolve(arr);
}

// if file is exucted directly using node
if ((module = require.main)) {
  Promise.all(jobs(generateFile)).then(v => {
    // create the example file
    generateImageTemplate();
    fs.writeFileSync(__dirname + "/EXAMPLE.md", arr.join("\n"));
    console.log("generated the output and example");
    process.exit(0);
  });
}
