const arr = ["a", "b", "c", "d"];

// push - O(1)

arr.push("e");
console.log(arr);

// pop - O(1)
arr.pop();
console.log(arr);

// unshift - O(n)
//prothom dik the ekta item add korle jehetu each and every item ke touch korte hocche means ekhane every item er index change hoye jacche tai er complexity O(n)
arr.unshift("1");
console.log(arr);

// unshift - O(n)
//prothom dik the ekta item remove korle jehetu each and every item ke touch korte hocche means ekhane every item er index change hoye jacche tai er complexity O(n)
arr.shift();
console.log(arr);

//==== includes - O(n) ====//
// protyek ta item ke check korte hocce tahole ekahne complexity hobe O(n)

console.log(arr.includes("c")); //true

//accessing item using index - O(1)
console.log(arr[3]); //d
