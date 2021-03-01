module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let seconds = Math.trunc(turns / turnsSpeed * 3600);
  let res = {turns, seconds};
  return res;
};
