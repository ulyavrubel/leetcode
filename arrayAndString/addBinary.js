// Given two binary strings a and b, return their sum as a binary string.

var addBinary = function(a, b) {
  let tempSum = 0;

  const lengthDif = a.length - b.length;

  if (lengthDif > 0) {
    for (let i = 0; i < lengthDif; i++) {
      b = 0 + b;
    }
  } else if (lengthDif < 0) {
    for (let i = lengthDif; i < 0; i++) {
      a = 0 + a;
    }
  }

  const res = Array(a.length);

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = +a[i] + +b[i] + +tempSum;

    switch (sum) {
      case 0:
        res[i] = 0;
        tempSum = 0;
        break;
      case 1:
        res[i] = 1;
        tempSum = 0;
        break;
      case 2:
        res[i] = 0;
        tempSum = 1;
        break;
      case 3:
        res[i] = 1;
        tempSum = 1;
        break;
    }
  }

  if (tempSum > 0) res.unshift(1);

  return res.join('');
};
