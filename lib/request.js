const https = require("https");
const http = require("http");
const URL = require("url");
const fs = require("fs");
const promisify = require("./promisify");
const db = require("./cache");

// different protocol
const protocols = {
  "https:": https,
  "http:": http
};

// options
const _options = {
  // should we use cache
  useCache: true,
  //time of cache clearence
  timeInterval: 60 * 60 * 1000
};

// use of the path for storing cache
const cachePath = `${__dirname}/../.data/urls`;

// cb must be function
// this is the example for supporting both promise and callback
/**
 *@required @param  {String} url Must be string for making a request
 *
 *@param {Function} cb Function which is invoked when response is there
 *
 *@return {Promise<Object>}
 */

const _ajax = (url, cb) => {
  let responseData = "";
  return new Promise((resolve, reject) => {
    const parsedUrl = URL.parse(url, true);
    const options = {
      ...parsedUrl,
      method: "GET"
    };
    const req = protocols[parsedUrl.protocol].request(options, res => {
      res.on("data", data => {
        responseData = responseData + data;
      });
      res.on("end", data => {
        if (cb && typeof cb === "function") {
          cb(null, responseData);
        } else {
          resolve(responseData);
        }
      });
    });
    //  req.write(bodyTobeSent);
    req.on("error", err => {
      if (cb && typeof cb === "function") {
        cb(err, null);
      } else {
        reject(err);
      }
    });
    req.end();
  });
};

/**
 * formatUrl - change the url to base64URL
 *
 * @param {String} url which is to be converted base64URL
 *
 * @returns {String} the base64url
 */
function formatUrl(url) {
  const { path } = URL.parse(url);
  return Buffer.from(path)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

/**
 * the function to make request
 * @param {string} url the url for request
 *
 * @param {function} cb the callback invoked when work is done
 */
function request(url) {
  if (_options.useCache) {
    return new Promise((resolve, reject) => {
      const path = formatUrl(url);
      db.read("urls", path, (err, data) => {
        if (err) {
          _ajax(url).then(val => {
            db.create("urls", path, val, (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(val);
              }
            });
          });
        } else {
          resolve(data);
        }
      });
    });
  } else {
    return _ajax(url);
  }
}

/**
 * options - change the options of request properties
 *
 * @param {Object} options changes in options
 *
 * @returns {Undifined}
 */
function options(options) {
  _options = { ..._options, ...options };
}

/**
 * clearCache - used to clear the cache
 *
 * @returns {Undefined}
 */
function clearCache() {
  fs.readdir(cachePath, (err, path) => {
    const deletionJob = path.map(fileName => {
      return promisify(fs.unlink)(`${cachePath}/${fileName}`);
    });
    return Promise.all(deletionJob);
  });
}

const intervalId = setInterval(() => {
  clearCache();
}, _options.timeInterval);

function stopCacheClear() {
  clearInterval(intervalId);
}
module.exports = { request, options, clearCache, stopCacheClear };
/*******************************************************************************
                                    EXAMPLE USES CASE
******************************************************************************/
if (module === require.main) {
  // ajax(
  //   "http://localhost:4443/user",
  //   {
  //     method: "post",
  //     body: {
  //       formdata: {
  //         firstName: "Anshul",
  //         lastName: "Goel",
  //         phone: "9910326642",
  //         password: "8285578793",
  //         token:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Im1vYmlsZSI6Ijk5MTAzMjY2NDIifSwidGltZSI6MTUzMzY0Mjk4NDgyNn0=.URl0Or9K6k9uGC1Gd8IgI1ZVshQx5ffif3zrfSezSgQ=",
  //         statusCode: [200, 404, 502],
  //         timeOut: "5",
  //         url: "zalonin.com",
  //         protocol: "https",
  //         method: "get"
  //       }
  //     }
  //   },
  //   (er, data) => {
  //     console.log(er, data);
  //   }
  // );
  clearCache(() => {});
}
