// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

var replaceElements = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      arr[i] = -1;
      break;
    }

    arr[i] = max;
  }

  const max = Math.max(...arr.slice(1));
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
