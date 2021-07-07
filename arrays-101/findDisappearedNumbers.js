// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// var findDisappearedNumbers = function(nums) {

//     const res = Array.from({length: nums.length}, (_, i) => i + 1);

//     for (let i = 0; i < res.length; i++) {
//       if (nums.includes(res[i])) {
//         res.splice(i, 1);
//         i--;
//       }
//     }
//     return res;
// };

var findDisappearedNumbers = function(nums) {
  const res = [];
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = 1;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!hash[i]) res.push(i);
  }

  return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
