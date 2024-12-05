//Write a function that takes a string and return the frequency of character

//Time Complexity --> O(n+n) --> O(2n) --> O(n)
//Space Complexity --> O(n+n) -->O(n)
function countCharacter(inputStr) {
  //convert the string to lowercase
  const lowercaseStr = inputStr.toLowerCase();

  //create a empty object to hold the counts and frequency
  const charCounts = {};
  //loop the cleaned string and count each character
  for (let char of lowercaseStr) {
    //remove spaces and special characters during add frequency of the character to object

    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  }

  //return the result
  return charCounts;
}

//with spaces and mixed charactersn
const result = countCharacter("He()/ ll$@o");
//string with unicode characters
// const result = countCharacter("Hel😍lo");

//check with empty string
// const result = countCharacter(""); //{}
console.log(result);
