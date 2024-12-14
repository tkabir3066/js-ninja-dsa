//Create a function in javascript that counts the number of vowels in a given string

//Time complexity -O(n*1) --> O(n) // because value of vowels variable is constant it means inside for loop, using includes method not dependent on input, so there in one loop and time complexity is O(n)

//space complexity -> O(1)

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hellow")); //2
console.log(countVowels("World")); //1
console.log(countVowels("aeiouAEIOU")); //10
