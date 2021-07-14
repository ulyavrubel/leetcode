// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function(digits) {
  const sum = digits[digits.length - 1] + 1;

  if (sum < 10) {
    digits[digits.length - 1] = sum;
  } else {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        if (i === 0) {
          digits[i] = 1;
          digits.push(0);
        } else {
          digits[i] = 0;
        }
      } else {
        digits[i] = digits[i] + 1;
        break;
      }
    }
  }

  return digits;
};

// var plusOne = function(digits) {
//   for (var i = digits.length - 1; i >= 0; i--) {
//     digits[i]++;
//     if (digits[i] < 10) {
//       return digits;
//     } else {
//       digits[i] = 0;
//     }
//   }
//   digits.unshift(1);
//   return digits;
// };
