//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
  let count = 0;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
      i--;
    }
  }

  while (count > 0) {
    nums.push(0);
    count--;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
