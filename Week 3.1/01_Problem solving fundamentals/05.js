//Create a function in javascript that swaps the values of two numeric variables without using a temporary variable

//using temporary variable

/* function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;

  return [a, b];
}
 */

//alternative approach without using temporary variable

/* //approach-1
function swap(a, b) {
  a = a + b; //8
  b = a - b; //5
  a = a - b; //3

  return [a, b];
} */

//approach-2
function swap(a, b) {
  [b, a] = [a, b];

  return [a, b];
}
console.log(swap(5, 3)); //[ 3, 5 ]
