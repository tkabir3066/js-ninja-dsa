//Create a function in javascript that takes a string as input and returns a new string with the characters in reverse order

//Requirements:-
//The function should reverse the order of characters in the input string
//The function should handle empty strings and return an empty string as the result
//The function should handle strings with special characters, spaces and punctuation

//=== using built in method ====//
// Time Complexity --> O(n+n+n) --> O(3n) --> O(n)
// Space Complexity --> O(n+n+n) --> O(3n) --> O(n)
function reverseString(str) {
  const reverseStr = str.split("").reverse().join("");

  return reverseStr;
}

// Using for loop

//Time complexity --> O(n)
//Complexity complexity --> O(n+1)-->O(n)
// function reverseString(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

console.log(reverseString("hello")); //'olleh'
console.log(reverseString("World")); //'dlroW'
console.log(reverseString("!dlrow ,olleH")); //'Hello, world!'
console.log(reverseString("")); //""
console.log(reverseString("12345")); //'54321'
console.log(reverseString("racecar")); //'racecar'
