// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

var twoSum = function(numbers, target) {
  let i = 0;

  while (numbers[i] <= target) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) return [i + 1, j + 1];
    }
    i++;
  }
};

console.log(twoSum([-1, 0], -1));
