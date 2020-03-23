const https = require("https");
const http = require("http");
const URL = require("url");


// different protocol
const protocols = {
  "https:": https,
  "http:": http
};


/**
 *@required @param  {String} url Must be string for making a request
 *
 *@param {Function} cb Function which is invoked when response is there
 *
 *@return {Promise<Object>}
 */

const request = (url, cb) => {
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
module.exports = { request};
