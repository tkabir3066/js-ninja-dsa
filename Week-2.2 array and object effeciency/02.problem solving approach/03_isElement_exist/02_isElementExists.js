// checking the element exists between two array

//Time complexity- O(m*n) = O(mn) means nested loops means O(n^2)
//includes method each and every element ke check korche
//space complexity --> O(1)
function isElementExists(arr1, arr2) {
  // Loop arr1 and check each element with arr2 element
  for (let elm of arr1) {
    //compare each element with arr2 element
    if (arr2.includes(elm)) {
      return true;
    }
  }

  return false;
}

// const result = isElementExists(["a", "b", "c", "z"], [1, 2, 3, "z"]); //true because "z" present in both array
console.log(result);
