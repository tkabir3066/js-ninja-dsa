//Create a function in javascript that calculates the sum of all integers within a specified range(inclusive)

const sumRange = (start, end) => {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
};

console.log(sumRange(1, 5)); //15
console.log(sumRange(3, 7)); //25
console.log(sumRange(-2, 5)); //12
console.log(sumRange(7, 5)); //0
console.log(sumRange(5, 5)); //5
