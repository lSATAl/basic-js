const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(data) {
  
  let dat = data
  if (!dat instanceof Date) return false
  if (dat === null) return false
  if (dat === undefined) return 'Unable to determine the time of year!'
  if (dat === NaN) return 'Unable to determine the time of year!'



  let month = data.getUTCMonth();
  newdate = month
  console.log(dat)
if (month === 11 || month === 1 || month === 0) {
  return 'winter'
} else if(month === 2 || month === 3 || month === 4) {
  return 'spring'
}else if(month === 5 || month === 6 || month === 7) {
  return 'summer'
}else if(month === 8 || month === 9 || month === 10) {
  return '/autumn|fall/'
}
}
