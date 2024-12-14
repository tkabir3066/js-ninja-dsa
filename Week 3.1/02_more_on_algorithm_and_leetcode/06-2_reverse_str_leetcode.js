//Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
//problem no- 344
var reverseString = function (s) {
  return s.reverse();
};

console.log(reverseString(["h", "e", "l", "l", "o"])); //[ 'o', 'l', 'l', 'e', 'h' ]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); //[ 'h', 'a', 'n', 'n', 'a', 'H' ]
