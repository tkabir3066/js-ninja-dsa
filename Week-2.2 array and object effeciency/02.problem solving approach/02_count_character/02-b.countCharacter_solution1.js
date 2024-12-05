//Write a function that takes a string and return the frequency of character

function countCharacter(inputStr) {
  //convert the string to lowercase
  const lowercaseStr = inputStr.toLowerCase();

  console.log(lowercaseStr);
  //remove spaces and special characters
  // const cleanStr = lowercaseStr.replace(/[^a-zA-z0-9]/g, "");
  const cleanStr = lowercaseStr.replace(/[^a-z0-9]/gi, "");
  //create a empty object to hold the counts and frequency
  const charCounts = {};
  //loop the cleaned string and count each character
  for (let char of cleanStr) {
    if (charCounts[char]) {
      charCounts[char] += 1;
    } else {
      charCounts[char] = 1;
    }
  }

  //return the result
  return charCounts;
}

const result = countCharacter("He ll @o");
console.log(result);
