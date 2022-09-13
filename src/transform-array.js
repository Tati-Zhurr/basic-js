const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr === null){
    throw(new Error ('\'arr\' parameter must be an instance of the Array!'));
  };

  if (arr.length ===0){
    return [];
  };
  
  if ((typeof arr  !=='object')|| (Object.keys(arr)[0] !== '0')){
    throw(new Error('\'arr\' parameter must be an instance of the Array!'));
  };
 
  let arrResult =[];
  let arrRemoved =[];
  let arrSequences = ['--discard-next','--discard-prev','--double-next', '--double-prev' ];

  for (let i=0; i < arr.length;  i++){
    if (!arrSequences.includes(arr[i])){
      arrResult.push(arr[i]);
    } else{
      if (arr[i] === '--discard-next'){
        i++;
        if (i< arr.length){
          arrRemoved.push (i);
        };
       
        };
      if (arr[i] === '--discard-prev'){
          if (!arrRemoved.includes(i-1)&&(i>0)){
            arrResult.pop();
            arrRemoved.push (i-1);
          };
      };
        if (arr[i] === '--double-next'){
          i++;
          if (i< arr.length){
            arrResult.push(arr[i]);
            arrResult.push(arr[i]);
          } 
      };
         
     if ((arr[i] === '--double-prev')&&(arr[i-2] !=='--double-next' )){
          if (!arrRemoved.includes(i-1)&&(i>0)){
            arrResult.push(arr[i-1]);
            arrResult.push(arr[i-1]);
          };
        };
        if ((arr[i] === '--double-prev')&&(arr[i-2] ==='--double-next' )){
          if (!arrRemoved.includes(i-1)&&(i>0)){
            arrResult.push(arr[i-1]);
          };
        };

    };
   

  };
  return arrResult;

 
}





module.exports = {
  transform
};
