const CustomError = require("../extensions/custom-error");

module.exports = function countCats(n) {
  let result = n.join().split(',');
console.log(result)
let f = 0;
for (let i = 0; i < result.length; i++) {
if (result[i] === '^^') {
    f += 1;
  }
}
  return f
};
