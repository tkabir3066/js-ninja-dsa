//A new array containing only the new values from the input array

//Requirements:-
//The function should remove all duplicate values from the input array
//The function should maintain the order of elements based on their first appearance
//The function should handle arrays with different types of elements (e.g- numbers, strings)

/* //==== process-1 ====//
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
}; */

//==== process-2 ====//

//Time complexity- O(n^2)
const removeDuplicates = (arr) => {
  const uniqueArr = [];

  for (let elm of arr) {
    if (!uniqueArr.includes(elm)) {
      uniqueArr.push(elm);
    }
  }

  return uniqueArr;
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 7])); //[ 1, 2, 3, 4, 5, 7 ]

console.log(removeDuplicates(["a", "b", "a", "c", "b"])); //[ 'a', 'b', 'c' ]
console.log(removeDuplicates([1, "1", 2, "2", 2])); //[ 1, '1', 2, '2' ]
console.log(removeDuplicates([])); //[]
console.log(removeDuplicates([false, true, true, false])); //[ false, true ]
console.log(removeDuplicates([null, null, undefined, false])); //[ null, undefined, false ]
