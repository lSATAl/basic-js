const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }
  let num = parseFloat(sampleActivity);
  if (!num || num <= 0 || num > MODERN_ACTIVITY || isNaN(num)) {
    return false;
  }
  let rateConstant = 0.693 / HALF_LIFE_PERIOD;
  let res = Math.log(MODERN_ACTIVITY / num) / rateConstant;
  return Math.ceil(res);
};
