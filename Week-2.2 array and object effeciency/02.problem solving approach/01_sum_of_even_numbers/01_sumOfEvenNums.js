//sum of even square
//Time complexity:- O(n)
//Space complexity:- O(n)
function sumOfEvenSquare(numbers) {
  //define an array to track the even numbers
  const evenArr = [];
  //define array to track down the squared numbers
  const sqaredArr = [];
  //define a variable to track down the sum
  let total = 0;
  //find out the even numbers
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenArr.push(number);
    }
  }

  //squared the even numbers and return an array
  for (let num of evenArr) {
    sqaredArr.push(num * num);
  }

  //sum of the squared number array
  for (let num of sqaredArr) {
    total += num;
  }

  //return the result
  return total;
}

const sum = sumOfEvenSquare([1, 2, 3, 4, 5, 6]);
console.log(sum); //56
