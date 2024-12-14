//Create a function in javascript that counts the number of vowels in a given string

var vowelStrings = function (words, left, right) {
  const vowels = "aeiou";
  let count = 0;

  for (let i = left; i <= right; i++) {
    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(words[i][words[i].length - 1])
    ) {
      count++;
    }
  }

  return count;
};

// ["are","amy","u"], left = 0, right = 2
// const result = vowelStrings(["are", "amy", "u"], 0, 2);
// console.log(result); //2
const result = vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4);
console.log(result); //3
