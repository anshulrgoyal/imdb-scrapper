const https = require('https');
const http=require('http');
const URL = require('url');
const queryString = require('querystring')

const protocols={
  'https:':https,
  'http:':http,
}


// cb must be function
// this is the example for supporting both promise and callback
/**
 *@required @param  {String} url Must be string for making a request
 *@optional @param {Function} cb Function which is invoked when response is there
 *@return {Promise<Object>}
 */


ajax = (url, cb) => {


  let responseData = "";
  return new Promise((resolve, reject) => {
    const parsedUrl = URL.parse(url, true);
    const options = { ...parsedUrl,method:'GET',
    }
    const req = protocols[parsedUrl.protocol].request(options, (res) => {
      res.on('data', (data) => {
        responseData = responseData + data;
      })
      res.on('end', (data) => {
        if (cb && typeof(cb) === 'function') {
          cb(null, responseData)
        } else {
          resolve(responseData);
        }
      })
    });
  //  req.write(bodyTobeSent);
    req.on('error', (err) => {
      if (cb && typeof(cb) === 'function') {
        cb(err, null);
      } else {
        reject(err);
      }
    })
req.end();
  });
}
module.exports=ajax;
/*******************************************************************************
                                    EXAMPLE USES CASE
******************************************************************************/
if (module == require.main) {
  ajax('http://localhost:4443/user', {
    method: 'post',
    body: {
      formdata: {
        "firstName": "Anshul",
        "lastName": "Goel",
        "phone": "9910326642",
        "password": "8285578793",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Im1vYmlsZSI6Ijk5MTAzMjY2NDIifSwidGltZSI6MTUzMzY0Mjk4NDgyNn0=.URl0Or9K6k9uGC1Gd8IgI1ZVshQx5ffif3zrfSezSgQ=",
        "statusCode": [200, 404, 502],
        "timeOut": "5",
        "url": "zalonin.com",
        "protocol": "https",
        "method": "get"
      }
    }
  }, (er, data) => {
    console.log(er, data);
  })
}
