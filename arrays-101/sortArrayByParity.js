// Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.

// You may return any answer array that satisfies this condition.

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

var sortArrayByParity = function(nums) {
  let moves = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(i, nums[i]);
    if (nums[i] % 2 !== 0) {
      for (let j = nums.length - moves - 1; j > i; j--) {
        console.log('j', j, nums[j]);
        if (nums[j] % 2 === 0) {
          let cur = nums[i];
          nums[i] = nums[j];
          nums[j] = cur;
          moves++;
          break;
        }
      }
    }
  }

  console.log(moves);

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
