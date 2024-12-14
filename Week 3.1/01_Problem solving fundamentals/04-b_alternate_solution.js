//Create a function in javascript that finds the largest number in an array

//alternate solution
function findLargestNumber(numbers) {
  if (numbers.length === 0) return null;

  let largest = numbers[0];

  for (let num of numbers) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}

console.log(findLargestNumber([1, 3, 5, 2, 0])); //5
console.log(findLargestNumber([])); //5
console.log(findLargestNumber([7])); //7
console.log(findLargestNumber([-10, -20, -13, -5])); //-5
