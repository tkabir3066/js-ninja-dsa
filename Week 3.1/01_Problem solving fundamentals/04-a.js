//Create a function in javascript that finds the largest number in an array

//process-1
// function findLargestNumber(numbers) {
//   let max = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }

//process-2
function findLargestNumber(numbers) {
  const result = numbers.length === 0 ? null : Math.max(...numbers);
  return result;
}

console.log(findLargestNumber([1, 3, 5, 2, 0])); //5
console.log(findLargestNumber([])); //5
console.log(findLargestNumber([7])); //7
console.log(findLargestNumber([-10, -20, -13, -5])); //-5
