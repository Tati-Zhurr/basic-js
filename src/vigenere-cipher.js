const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode){
    if ((mode === 'true')||(mode === '')){

      this.reverseMode = false;
    };
    if (mode === 'false'){
    
      this.reverseMode = true;
    }

  }
  encrypt(message, key) {
    if ((!message)||(!key)){
      throw new Error('Incorrect arguments!');
    };

  let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let messageArr = message.toLowerCase().split('');
  let keyLowerCase = key.toLowerCase();
  let arrKey=[];
   for(let i=0; i < (Math.ceil(message.length/key.length)); i++) {
    arrKey.push(keyLowerCase);
   };
  /*let i =0;
  let n=i;
  for (i; i< messageArr.length; i++){
    if (abc.indexOf(messageArr[i]) !== -1){
      keyArr.push(keyLowerCase[n % keyLowerCase.length]);
      n++;
    }; 
    };*/
    let arrKeyLetters = arrKey.join('').split('');
 
  let encoded = messageArr.map((e,index) =>{return (abc.indexOf(e) !== -1)? abc[(abc.indexOf(e) + abc.indexOf(arrKeyLetters.shift()))%26]:e});
 if (this.reverseMode){
  return encoded.reverse().join('').toUpperCase();
 };
   return encoded.join('').toUpperCase();
  }
  decrypt(encryptedMessage, key ) {
    if ((!encryptedMessage)||(!key)){
      throw new Error('Incorrect arguments!');
    };
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let encryptedMessageArr = encryptedMessage.toLowerCase().split('');
    let keyLowerCase = key.toLowerCase();
    let arrKey=[];
   for(let i=0; i < (Math.ceil(encryptedMessage.length/key.length)); i++) {
    arrKey.push(keyLowerCase);
   };
   let arrKeyLetters = arrKey.join('').split('');
   let decoded =encryptedMessageArr.map((e,index) =>{return (abc.indexOf(e) !== -1)? abc[(abc.indexOf(e) - abc.indexOf(arrKeyLetters.shift())+26)%26]:e});
   if (this.reverseMode){
    return decoded.reverse().join('').toUpperCase();
   };
     return decoded.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
