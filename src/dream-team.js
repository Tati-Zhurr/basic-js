const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if ((!members)||(typeof members === 'number')){return false};
  if (typeof members === 'object'){
    if (Object.keys(members)[0] !== '0' ){
      return false;
    }
  }
  const teamName = members.filter(e => {if(typeof e === 'string'){return e;}}).map(e => {while (e[0] === ' '){ e=e.replace(' ','')}; return e}).map(e => {return (e[0].toUpperCase() !== e[0].toLowerCase())? e[0].toUpperCase():''}).sort().join('');
  return teamName;
}

module.exports = {
  createDreamTeam
};
