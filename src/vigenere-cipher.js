class VigenereCipheringMachine {

  direction = 'true'
  
  constructor(indicator){
  
    if(indicator === false){
      this.direction = 'false'
    };
  };

  

  encrypt(message, key) {
    if(message === undefined && key === undefined) {
      throw new Error('Error');
    }
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    let upMessege = message.toUpperCase();
    let upKey = key.toUpperCase();

    for(let i = 0, k = 0; i < upMessege.length; i++) {
      if(upMessege[i].match(/[A-Z]/)) {
        res += alphabet[(upMessege[i].charCodeAt() + upKey[k % upKey.length].charCodeAt())%26];
        k++;
      } else {
        res += upMessege[i]
      }
    }
    if(this.direction === 'false') {
      res = res.split('').reverse().join('')
    }
    return res
  }    
  
  decrypt(encryptedMessage, key) {
    
    if(encryptedMessage === undefined && key === undefined) {
      throw new Error('Error');
    }
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    let upEncryptedMessage = encryptedMessage.toUpperCase();
    let upKey = key.toUpperCase();

    for(let i = 0, k = 0; i < upEncryptedMessage.length; i++) {
      if(upEncryptedMessage[i].match(/[A-Z]/)) {
        res += alphabet[(upEncryptedMessage[i].charCodeAt() - upKey[k % upKey.length].charCodeAt() + 26)%26];
        k++;
      } else {
        res += upEncryptedMessage[i]
      }
    }
    if(this.direction === 'false') {
      res = res.split('').reverse().join('')
    }
    return res
  }
}

module.exports = VigenereCipheringMachine;
