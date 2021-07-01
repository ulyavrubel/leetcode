// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// var replaceElements = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i == arr.length - 1) {
//       arr[i] = -1;
//       break;
//     }

//     const max = Math.max(...arr.slice(i + 1));
//     arr[i] = max;
//   }

//   return arr;
// };

var replaceElements = function(arr) {
  let max = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i == arr.length - 1) {
      arr[i] = -1;
      continue;
    }

    let curr = arr[i];
    arr[i] = max;

    if (curr > max) max = curr;
  }

  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
