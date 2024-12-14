//Create a function in javascript that print the numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number.The multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5, print FizzBuzz instead of the number.(Leet code - 412)

function fizzBuzz(num) {
  const resultArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      resultArr.push("Buzz");
    } else if (i % 3 === 0) {
      resultArr.push("Fizz");
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
}

console.log(fizzBuzz(15));
