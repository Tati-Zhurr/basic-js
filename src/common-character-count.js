const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result =0;
  let s1Ar= s1.split('').sort();
  let s2Ar =s2.split('').sort();
  let set =new Set(s1Ar.filter(x => s2Ar.includes(x)));
   for (let item of set){
    let sum1 =0;
     let sum2=0;
   s1Ar.forEach((x) => {return (x === item)?sum1++:sum1});
   s2Ar.forEach((x) => {return (x === item)?sum2++:sum2});
   result = result + Math.min(sum1, sum2);
   }
   return result;

}

module.exports = {
  getCommonCharacterCount
};
