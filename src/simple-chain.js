const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrResult: [],
  getLength() {
  return this.arrResult.length;
  },
  addLink(value) {
    this.arrResult.push(`( ${value} )`);
    return chainMaker;
    
  },
  removeLink(position) {
    if (typeof position !== 'number'){
      this.arrResult =[];
      throw(new Error( 'You can\'t remove incorrect link!'));
    };
    if ((position <1)||(position > this.arrResult.length)){
      this.arrResult =[];
      throw(new Error( 'You can\'t remove incorrect link!'));
    };
    delete this.arrResult.splice(position-1,1);
    return chainMaker;
  },

  reverseChain() {
    this.arrResult.reverse();
    return chainMaker;
  },
  finishChain() {
    let string = this.arrResult.join('~~');
    this.arrResult =[];
    return string;
  }
};

module.exports = {
  chainMaker
};
