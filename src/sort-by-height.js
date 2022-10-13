const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr=arr.filter(e => e>0).sort((a,b)=>a-b);
  return arr.map(e =>{ return ( e===-1) ? e: newArr.shift()})
}

module.exports = {
  sortByHeight
};
