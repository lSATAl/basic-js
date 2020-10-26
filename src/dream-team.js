const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(n = []) {
  if(!Array.isArray(n)) return false;
  if (n.length === 0 || n === null) {
    return false
  }
  let result = ''
  
  for (let i = 0; i < n.length; i++) {
  for(let j = 0; j < 5; j++) {
    if( typeof(n[i]) === 'object')
    n.splice(i, 1)
    }
  }
    
    //удаляет пробелы из имен
    n = n.join(',').replace(/[0-9]/g, '').split(',');
     n = n.join(',').replace(/\s+/g, '').split(',');
  //цикл вырезает из массива мусор
  for(let j = 0; j < 5; j++) {
    for (let i = 0; i < n.length; i++) {
      if(n[i] === '' || n[i] === 'true' || n[i][0] === '1' || n[i][0] === '2' || n[i][0] === '3' || n[i][0] === '4' || n[i][0] === '5' || n[i][0] === '6' || n[i][0] === '7' || n[i][0] === '8' || n[i][0] === '9' || n[i] === 'false' || n[i][0] === 'null' || n[i] === '[objectSet]'|| n[i] === '[objectObject]' ) {
        n.splice(i, 1)
      } else {
      }
    }
    
  }
  //цикл выбирает первые символы, сортирует, деалет заглавными.
  for (let i = 0; i < n.length; i++) {
    result += n[i][0].toUpperCase();
    }
  return result.split('').sort().join('')
  }


