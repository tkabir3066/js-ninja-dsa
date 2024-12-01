/* function countCharacter(inputStr) {
  // Convert the string to lowercase
  const lowerCaseStr = inputStr.toLowerCase();

  // Remove spaces and special characters
  const cleanStr = lowerCaseStr.replace(/[^a-z0-9]/gi, "");

  // Create an object to hold the counts or frequency
  const charCount = {};

  // Loop through the clean string and count each character
  for (let i = 0; i < cleanStr.length; i++) {
    const char = cleanStr[i];
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

console.log(countCharacter("Hel @lo")); // { h: 1, e: 1, l: 2, o: 1 }
 */

//========optimization of above solution without using regex========//
// Time complexity - O(n+n) -> O(2n)--> O(n  )
/* function countCharacter(inputStr) {
  // Convert the string to lowercase
  const lowerCaseStr = inputStr.toLowerCase();

  // Create an object to hold the counts or frequency
  const charCount = {};

  // Loop through the string and count each alphanumeric character
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];

    // Check if the character is a letter or a number
    if (
      (char >= "a" && char <= "z") || // Check for lowercase letters
      (char >= "0" && char <= "9") // Check for numbers
    ) {
      if (charCount[char]) {
        charCount[char] += 1;
      } else {
        charCount[char] = 1;
      }
    }
  }

  return charCount;
}

console.log(countCharacter("Hel @lo")); // { h: 1, e: 1, l: 2, o: 1 } */

//============ using ternary operator ===========//
/* function countCharacter(inputStr) {
  // Convert the string to lowercase
  const lowerCaseStr = inputStr.toLowerCase();

  // Create an object to hold the counts or frequency
  const charCount = {};

  // Loop through the string and count each alphanumeric character
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];

    // Check if the character is a letter or a number
    if (
      (char >= "a" && char <= "z") || // Check for lowercase letters
      (char >= "0" && char <= "9") // Check for numbers
    ) {
      // Use ternary operator to update the count
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  }

  return charCount;
}

console.log(countCharacter("Hel @lo")); // { h: 1, e: 1, l: 2, o: 1 } */
//=======================================================================//
//============ using OR operator as the alternate of ternary ===========//
/* function countCharacter(inputStr) {
  // Convert the string to lowercase
  const lowerCaseStr = inputStr.toLowerCase();

  // Create an object to hold the counts or frequency
  const charCount = {};

  // Loop through the string and count each alphanumeric character
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];

    // Check if the character is a letter or a number
    if (
      (char >= "a" && char <= "z") || // Check for lowercase letters
      (char >= "0" && char <= "9") // Check for numbers
    ) {
      // Use ternary operator to update the count
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  return charCount;
}

console.log(countCharacter("Hel @lo")); // { h: 1, e: 1, l: 2, o: 1 }
console.log(countCharacter("")); // {}
console.log(countCharacter("Hello123!@&world")); //{ 1: 1, 2: 1, 3: 1, h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
console.log(countCharacter("hello😄hello")); // { h: 2, e: 2, l: 4, o: 2 }
 */

// ==== easiest process ====//

function countCharacter(inputStr) {
  // Convert the string to lowercase
  const lowerCaseStr = inputStr.toLowerCase();

  // Create an object to hold the counts or frequency
  const charCount = {};

  for (let key of lowerCaseStr) {
    charCount[key] = (charCount[key] || 0) + 1;
  }

  return charCount;
}

console.log(countCharacter("Hel @lo")); // { h: 1, e: 1, l: 2, o: 1 }
console.log(countCharacter("")); // {}
console.log(countCharacter("Hello123!@&world")); //{ 1: 1, 2: 1, 3: 1, h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
console.log(countCharacter("hello😄hello")); // { h: 2, e: 2, l: 4, o: 2 }

///=====================================================================////
function countCharacterOccurrences(inputString) {
  // Create an empty object to store character counts
  const charCounts = {};

  // Loop through each character in the string
  for (let char of inputString) {
    // Ignore spaces, if needed, by skipping them
    if (char === " ") continue;

    // If the character exists in the object, increment its count
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      // Otherwise, initialize it with a count of 1
      charCounts[char] = 1;
    }
  }

  return charCounts;
}

// Example usage
const testString = "hello world";
const result = countCharacterOccurrences(testString);
console.log(result);
