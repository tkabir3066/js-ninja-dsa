//sum of even square (alternative solution)

/* function sumOfEvenSquare(numbers) {
  //find out the even numbers
  const evenArr = numbers.filter((num) => num % 2 === 0);
  //squared the even numbers and return an array
  const squaredArr = evenArr.map((num) => num * num);
  console.log(squaredArr);
  //sum of the squared number array
  const result = squaredArr.reduce((prev, next) => {
    return prev + next;
  }, 0);
  //return the result
  return result;
} */

//==== shortcut====//
function sumOfEvenSquare(numbers) {
  //find out the even numbers and squared the numbers ans sum those numbers
  const sum = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((prev, next) => {
      return prev + next;
    }, 0);

  return sum;
}
const sum = sumOfEvenSquare([1, 2, 3, 4, 5, 6]);
console.log(sum); //56
