// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

var dominantIndex = function(nums) {
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i != maxIndex && nums[maxIndex] / nums[i] < 2) return -1;
  }

  return maxIndex;
};
