/**
 * @param { Function } fun the function which is to be promisified
 * @return {Function} the promisified function is returned
 */
const promisify = function(fun) {
  return function() {
    return new Promise((resolve, reject) => {
      fun(...arguments, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  };
};

module.exports = promisify;
