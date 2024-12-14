//Create a function in javascript that checks whether a given number is prime number
//A prime number is a natural number greater than 1 that has no positive advisors other than 1 and itself
//the function should return false for numbers less than 2
//The function should efficiently check for divisors up to the square root of num

//Time  Complexity - O(√n)
//Space Complexity - O(1)

function isPrime(num) {
  // Return false for numbers less than 2
  if (num < 2) return false;

  // Special cases for 2 and 3
  if (num === 2 || num === 3) return true;

  // Eliminate multiples of 2 and 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check divisors of the form 6k ± 1 up to √num

  /*   for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  } */

  for (let i = 5; i <= Math.sqrt(num); i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(1)); // false
console.log(isPrime(29)); // true
console.log(isPrime(97)); // true
console.log(isPrime(100)); // false
