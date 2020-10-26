const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let a = 2 ** disksNumber - 1
  let b = 3600 / turnsSpeed
  let c = a * b
  let z = {turns : a, seconds: parseInt(c.toPrecision())}
  return z;
};
