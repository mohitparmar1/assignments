/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let temp = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let start = 0;
  let end = temp.length - 1;
  while (start < end) {
    if (temp[start] !== temp[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
