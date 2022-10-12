const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strFromN =n.toString();
 let arrAllOptions =[];
 for (let i=0;  i< strFromN.length; i++){
   console.log(strFromN.slice(i+1))
  arrAllOptions.push(`${strFromN.slice(0,i) + strFromN.slice(i+1)}`*1);
 }
  arrAllOptions.sort ((a,b) =>a-b);
 return arrAllOptions[arrAllOptions.length-1];
}

module.exports = {
  deleteDigit
};
