// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) {
  let pref = '';

  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every(string => strs[0][i] == string[i])) pref = pref + strs[0][i];
    else break;
  }

  return pref;
};

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
