const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.depthOfEl =2;   
    this.maxDepth =1;
    this.depthArr=[];
  }
  
  calculateDepth(arr) {
    this.depth = 1;
    this.depthOfEl =2;   
    this.maxDepth =1;
    this.depthArr=[];

   arr.forEach(e => {if (typeof e === 'object'){  
     
     this.depthOfEl = 2; 
     this.maxDepth =this.calculateDepthOfElement(e);
    
     if (this.maxDepth > this.depth) {
      this.depth = this.maxDepth;
      
     }}});
   return this.depth;
  }
  calculateDepthOfElement(e){
   
    e.forEach(el =>{if (typeof el === 'object'){
       
      
      if (el.length === 0){
        
         this.depthOfEl++;
        this.depthArr.push(this.depthOfEl);
        this.depthOfEl-=1;
        
         
        
      } else{
  
        this.depthOfEl++;
         
        this.calculateDepthOfElement(el)
        
      }
      
      }});
    this.depthArr.sort((a,b) => a-b);
    return (this.depthArr[this.depthArr.length-1] > this.depthOfEl)? this.depthArr[this.depthArr.length-1]:this.depthOfEl;
    

  }

}

module.exports = {
  DepthCalculator
};
