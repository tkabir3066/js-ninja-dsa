const str = "Hello there";
const strTwo = "  Hello there   ";

//length property
console.log(str.length); // 11

//toUpperCase()
console.log(str.toUpperCase()); //'HELLO THERE'

//toLowerCase()
console.log(str.toLowerCase()); //'hello there'

//indexOf()
console.log(str.indexOf("l")); //2 //its count from the beginning means first "l"

//lastIndexOf()
console.log(str.lastIndexOf("l")); //3
console.log(strTwo.length); //16 // after using trim method it's length will be changed

//trim()
console.log(strTwo.trim().length); //11

//includes() - its return a boolean value(true or false)
console.log(str.includes("")); //true
console.log(str.includes(" ")); //true // single space also present so its true
console.log(str.includes("hel")); // false because it should be Hel (h should be capital letter)

//startsWith()

console.log(str.startsWith("H")); //true
console.log(str.startsWith("I")); //false
console.log(str.startsWith("Hello")); //true

//endsWith()

console.log(str.endsWith("There")); //false
console.log(str.endsWith("there")); //true
