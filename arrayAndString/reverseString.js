// Write a function that reverses a string. The input string is given as an array of characters s.

var reverseString = function(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }

  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
