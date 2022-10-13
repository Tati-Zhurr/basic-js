const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str){
    return str;
  } else{ 
    let counter = 1;
    let arrFromStr=str.split('');
    let newStr='';
    for (let i=0; i<arrFromStr.length-1; i++){
      if (arrFromStr[i] === arrFromStr[i+1]){
        counter+=1;
        if (i+1 === arrFromStr.length-1){ newStr=newStr+`${counter}${arrFromStr[i]}`};
      } else{
       (counter !== 1)&&(i+1 !== arrFromStr.length-1) ? newStr=newStr+`${counter}${arrFromStr[i]}`: (i+1 !== arrFromStr.length-1)? newStr=newStr+`${arrFromStr[i]}`:  (counter !== 1)? newStr=newStr+`${counter}${arrFromStr[i]}${arrFromStr[i+1]}`: newStr=newStr+`${arrFromStr[i]}${arrFromStr[i+1]}`;
        console.log(newStr);
       counter=1;
      }
    }
   
    return newStr;
    }
 
}

module.exports = {
  encodeLine
};
