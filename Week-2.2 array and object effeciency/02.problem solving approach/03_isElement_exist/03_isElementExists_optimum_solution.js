// checking the element exists between two array

//Time complexity- O(n+n) = O(n)
//space complexity --> O(n)
function isElementExists(arr1, arr2) {
  //loop arr1 and track down each data
  const trackingObj = {};

  for (let elm of arr1) {
    trackingObj[elm] = true;
  }

  console.log(trackingObj);
  // Loop arr2 and check each element existence in the tracking object
  for (let elm of arr2) {
    if (elm in trackingObj) {
      return true;
    }
  }
  return false;
}

const result = isElementExists(["a", "b", "c", "z"], [1, 2, 3, "z"]); //true because "z" present in both array
console.log(result);
