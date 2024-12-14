//A new array containing only the new values from the input array

//Requirements:-
//The function should remove all duplicate values from the input array
//The function should maintain the order of elements based on their first appearance
//The function should handle arrays with different types of elements (e.g- numbers, strings)

//Time complexity- O(n+1) => O(n)
//Space complexity- O(n)
const removeDuplicates = (arr) => {
  const map = new Map();
  for (let elm of arr) {
    if (!map.has(elm)) {
      map.set(elm, true);
    }
  }
  return Array.from(map.keys());
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 7])); //[ 1, 2, 3, 4, 5, 7 ]

console.log(removeDuplicates(["a", "b", "a", "c", "b"])); //[ 'a', 'b', 'c' ]
console.log(removeDuplicates([1, "1", 2, "2", 2])); //[ 1, '1', 2, '2' ]
console.log(removeDuplicates([])); //[]
console.log(removeDuplicates([false, true, true, false])); //[ false, true ]
console.log(removeDuplicates([null, null, undefined, false])); //[ null, undefined, false ]
