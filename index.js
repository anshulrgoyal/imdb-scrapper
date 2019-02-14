const lib = require("./_index");
const {
  request,
  options,
  clearCache,
  stopCacheClear
} = require("./lib/request");
const doWithWorker = require("./lib/worker");
const { changeQuality } = require("./lib/photo");
console.log(lib);
const workerLib = Object.keys(lib).reduce((acc, val) => {
  const workFun = (...args) => doWithWorker(val, args);
  acc[val] = workFun;
  return acc;
}, {});
module.exports = {
  request,
  changeQuality,
  options,
  clearCache,
  stopCacheClear,
  ...workerLib
};
