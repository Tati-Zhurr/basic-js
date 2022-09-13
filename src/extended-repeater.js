const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, options) {
  let strToConvert = `${str}`;
  let additionRepeated ='';
  let strWithAdditionRepeated ='';
  let arrAddition =[];
  let arrStrWithAddition =[];
 
  
  if ((options.addition)||(options.addition === null)||(options.addition === false)){
   if (options.additionRepeatTimes){
     for (let i=0; i < options.additionRepeatTimes; i++){
      arrAddition.push(`${options.addition}`);
  
     };
   } else {
    arrAddition.push(`${options.addition}`);
    };
    
   if (options.additionSeparator){
     additionRepeated = arrAddition.join(`${options.additionSeparator.toString()}`);
 } else{
   additionRepeated = arrAddition.join('|');
 };
 strWithAdditionRepeated = strToConvert + additionRepeated;
 
  } else {strWithAdditionRepeated = strToConvert
         };
 
  if (!options.repeatTimes){
   return strWithAdditionRepeated;
 };
   for (let i=0; i<options.repeatTimes; i++){
     arrStrWithAddition.push(strWithAdditionRepeated);
    
 };
 
 return (options.separator)? arrStrWithAddition.join (`${options.separator.toString()}`): arrStrWithAddition.join ('+');
 
 }

module.exports = {
  repeater
};
