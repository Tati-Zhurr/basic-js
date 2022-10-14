const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let maxCol= matrix[0].length;
  let maxRow =matrix.length;
  let matrixResult=[];
  for (let row=0; row<maxRow; row++){
    let newRow=[];
    for (let col=0; col< maxCol; col++){
      newRow.push(0);
    }
    matrixResult.push(newRow);
  }
  for (let row=0; row< maxRow; row++){
    for (let col=0; col< maxCol; col++){
      if (matrix[row][col] === true){
        if (row === 0){
          if (col ===0){
              matrixResult[row][col+1]+=1;
              matrixResult[row+1][col]+=1;
              matrixResult[row+1][col+1]+=1;
             
          } else  if (col+1 === maxCol){
              matrixResult[row][col-1]+=1;
              matrixResult[row+1][col-1]+=1;
              matrixResult[row+1][col]+=1;
            } else{
              matrixResult[row][col-1]+=1;
              matrixResult[row][col+1]+=1;
              matrixResult[row+1][col-1]+=1;
              matrixResult[row+1][col]+=1;
              matrixResult[row+1][col+1]+=1;
            }
          } else if (row+1 === maxRow){
            if (col ===0){
              matrixResult[row][col+1]+=1;
              matrixResult[row-1][col+1]+=1;
              matrixResult[row-1][col]+=1;
            } else  if (col+1 === maxCol){
                matrixResult[row][col-1]+=1;
                matrixResult[row-1][col]+=1;
                matrixResult[row][col-1]+=1;
              } else{
                matrixResult[row][col-1]+=1;
                matrixResult[row][col+1]+=1;
                matrixResult[row-1][col-1]+=1;
                matrixResult[row-1][col]+=1;
                matrixResult[row-1][col+1]+=1;
          }
         
        } else{
          if (col ===0){
            matrixResult[row][col+1]+=1;
            matrixResult[row-1][col]+=1;
            matrixResult[row-1][col+1]+=1;
            matrixResult[row+1][col]+=1;
            matrixResult[row+1][col+1]+=1;
          } else  if (col+1 === maxCol){
              matrixResult[row][col-1]+=1;
              matrixResult[row-1][col]+=1;
              matrixResult[row-1][col-1]+=1;
              matrixResult[row+1][col]+=1;
              matrixResult[row+1][col-1]+=1;
            } else{
              matrixResult[row][col-1]+=1;
              matrixResult[row][col+1]+=1;
              matrixResult[row-1][col]+=1;
              matrixResult[row-1][col-1]+=1;
              matrixResult[row-1][col+1]+=1;
              matrixResult[row+1][col]+=1;
              matrixResult[row+1][col-1]+=1;
              matrixResult[row+1][col+1]+=1;
        }

        }

      }      
 
  }
}
  return  matrixResult;
}


module.exports = {
  minesweeper
};
