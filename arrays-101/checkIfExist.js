// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

var checkIfExist = function(arr) {
  return arr
    .map(item => item * 2)
    .some(item => {
      if (item === 0 || item === 1 || item === -1) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == item) count++;
        }

        return count % 2 == 0;
      }

      return arr.includes(item);
    });
};

console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
