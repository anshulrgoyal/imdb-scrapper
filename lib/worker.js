const funs = require("../_index.js");
try {
  const {
    Worker,
    isMainThread,
    parentPort,
    workerData
  } = require("worker_threads");

  if (isMainThread) {
    module.exports = function doWithWorkerThread(fun, args) {
      return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, {
          workerData: { fun, args }
        });
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", code => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
          worker.terminate();
        });
      });
    };
  } else {
    const { fun, args } = workerData;
    console.log(args);
    funs[fun](...args).then(val => parentPort.postMessage(val));
  }
} catch (e) {
  module.exports = function doWithOutWorkerThread(fun, ...args) {
    return funs[fun](args);
  };
}
