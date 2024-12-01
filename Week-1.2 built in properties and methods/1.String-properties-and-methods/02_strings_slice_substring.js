const str = "Hello there";

//=== slice method === //
//Basic Usage: (startIndex, endIndex)
//If startIndex is greater than endIndex, an empty string is returned.

console.log(str.slice(0, 4)); //Hell
console.log(str.slice(0, 5)); //'Hello'

console.log(str.slice()); //'Hello there'

//If startIndex is greater than endIndex, an empty string is returned.
console.log(str.slice(5, 2)); //"  "
//Omitting endIndex:
console.log(str.slice(2)); //llo there
console.log(str); // not modified

//Using Negative Index:
console.log(str.slice(-5)); //'there'
console.log(str.slice(-7, -6)); // 'o'
console.log(str.slice(-7, -3)); // 'o th'
console.log(str.slice(-5, 2)); // empty string
//==== substring ====//
//If startIndex is greater than endIndex, substring() automatically swaps them.
//substring() treats negative indices as 0, unlike slice() which counts backward from the end of the string

//If either index is negative or greater than the string length, it is treated as 0 or the string’s length respectively.

//substring() is commonly used for simple string extraction when swapping indices automatically is desired.
//Basic Usage:
console.log(str.substring(0, 4)); //Hell
console.log(str.substring(3, 7)); //'lo t'

//Swapping Indices:
console.log(str.substring(5, 1)); //'ello' (same as substring(1, 5))

// Negative case:

console.log(str.substring(-7, 4)); //'Hell'
console.log(str.substring(5, -4)); //'Hello' //here -4 treated as 0 and swapped the indices str.substring(0, 5)

//The substring() method is ideal for extracting characters when you don’t want to worry about manually swapping indices or handling negative values.
