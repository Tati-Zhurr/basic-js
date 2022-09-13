const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let dateToCheck = new Date(date);
  if (!date){
   throw(new Error('Unable to determine the time of year!'));
  };
  
  if (dateToCheck == 'Invalid Date'){
    throw(new Error( 'Invalid date!'));
  };
  if (typeof date !== 'object'){
    throw(new Error( 'Invalid date!'));
  };
  
  let month = dateToCheck.getMonth();
  if ((!month)&&(month !==0)){
    throw(new Error( 'Invalid date!'));
  };
  if ((month === 11) ||(month === 0)||(month === 1)){
    return 'winter';
  };
  if ((month === 2) ||(month === 3)||(month === 4)){
    return 'spring';
  };
  if ((month === 5) ||(month === 6)||(month === 7)){
    return 'summer';
  };
  if ((month === 8) ||(month === 9)||(month === 10)){
    return 'fall';
  };
 
}

module.exports = {
  getSeason
};
