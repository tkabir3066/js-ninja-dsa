// checking the element exists between two array

//Time complexity- O(n+n) = O(n)
//space complexity --> O(n)
function isElementExists(arr1, arr2) {
  //loop arr1 and track down each data
  const set1 = new Set(arr1);
  console.log(set1);

  // Loop arr2 and check each element existence in the tracking object
  for (let elm of arr2) {
    if (set1.has(elm)) {
      return true;
    }
  }
  return false;
}

// const result = isElementExists(["a", "b", "c", "z"], [1, 2, 3, "z"]); //true because "z" present in both array
// const result = isElementExists(["a"], []); //false
// const result = isElementExists(["a", "b", "c"], [1, 2, 3, "b"]); //true
const result = isElementExists([1], ["1"]); //false
console.log(result);
