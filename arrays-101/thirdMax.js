//Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

var thirdMax = function(nums) {
  const sorted = [...nums].sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == sorted[i + 1]) {
      sorted.splice(i, 1);
      i--;
    }
  }

  return sorted[2] === undefined ? sorted[0] : sorted[2];
};

console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));
