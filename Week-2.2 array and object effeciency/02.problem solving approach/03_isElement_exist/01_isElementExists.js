// checking the element exists between two array

//Time complexity- O(m*n) = O(mn) means nested loops means O(n^2)
//space complexity --> O(1)
function isElementExists(arr1, arr2) {
  // Loop arr1 and check each element with arr2 element
  for (let elm of arr1) {
    //compare each element with arr2 element
    for (let elm2 of arr2) {
      if (elm === elm2) {
        return true;
      }
    }
  }

  return false;
}

const result = isElementExists(["a", "b", "c", "z"], [1, 2, 3, "z"]); //true because "z" present in both array
console.log(result); //true
