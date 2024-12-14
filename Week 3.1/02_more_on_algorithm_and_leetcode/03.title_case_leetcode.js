//problem-2129

//Time complexity- O(3n) --> O(n)
//Space Complexity --> O(n)

var capitalizeTitle = function (title) {
  //split the title into words and make it lowercase
  const words = title.toLowerCase().split(" ");

  const outPutStrArr = [];
  for (let word of words) {
    // if (word.length > 2) {
    //   outPutStrArr.push(word[0].toUpperCase() + word.slice(1));
    // } else {
    //   outPutStrArr.push(word);
    // }

    if (word.length === 1 || word.length === 2) {
      outPutStrArr.push(word);
    } else {
      outPutStrArr.push(word[0].toUpperCase() + word.slice(1));
    }
  }

  //return the string
  return outPutStrArr.join(" ");
};

// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"

console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("i lOve leetcode"));
