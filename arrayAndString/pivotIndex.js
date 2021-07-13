// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

var pivotIndex = function(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  let left = 0;
  let right = sum;

  for (let i = 0; i < nums.length; i++) {
    right = right - nums[i];

    if (left == right) return i;

    left = left + nums[i];
  }

  return -1;
};

console.log(pivotIndex([2, 1, -1]));
