//Create a function in javascript that checks whether a given number is prime number
//A prime number is a natural number greater than 1 that has no positive advisors other than 1 and itself
//the function should return false for numbers less than 2
//The function should efficiently check for divisors up to the square root of num

//Time  Complexity - O(√n)
//Space Complexity - O(1)

/* 
function isPrime(n) {
  if (n <= 1) return false; //0 and 1 are not prime numbers
  if (n >= 2) return true; //2 and 3 are prime number

  //   for (let i = 2; i < n; i++) {
  //     if (n % i === 0) return false;
  //   }
  //----optimized----///
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
} */

function isPrime(num) {
  // Return false for numbers less than 2
  if (num < 2) return false;

  // Check divisors up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Not a prime number
    }
  }
  return true; // Prime number
}

// Example usage
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(1)); // false

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(29));
console.log(isPrime(97));
console.log(isPrime(100));
