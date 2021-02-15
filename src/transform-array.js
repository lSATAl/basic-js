module.exports = function transform(arr) {
  let arr2 = [...arr];

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === '--discard-next' && i != arr2.length - 1) {
      arr2.splice(i + 1, 1);
    }
    if (arr2[i] === '--discard-prev' && i != 0) {
      arr2.splice(i - 1, 1);
      i -= 1;
    }
    if (arr2[i] === '--double-prev') {
      arr2.splice(i, 0, arr2[i - 1]);
      i += 1;
    }
    if (arr2[i] === '--double-next') {
      arr2.splice(i + 1, 0, arr2[i + 1]);
    }
  }

  return arr2.filter((e) => e != undefined && e != '--double-next' && e != '--discard-next' && e != '--discard-prev' && e != '--double-prev');
};


