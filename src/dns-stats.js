const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains.forEach(e =>{
  let arr= e.split('.').reverse();
     let keyResult = [];
  for (let i=0; i<arr.length; i++){
      keyResult.push(arr[i]);
    console.log(keyResult);
   if (result[`.${keyResult.join('.')}`]){
     result[`.${keyResult.join('.')}`]+=1;
   } else{
     result[`.${keyResult.join('.')}`]=1;
   }
  }
 });
  return result;
}

module.exports = {
  getDNSStats
};
