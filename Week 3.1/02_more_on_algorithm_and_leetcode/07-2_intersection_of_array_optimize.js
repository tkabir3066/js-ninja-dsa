//Given two integer arrays nums1 and nums2, return an array of their
// intersection
//Each element in the result must be unique and you may return the result in any order.

var intersection = function (nums1, nums2) {
  const arr1Set = Array.from(new Set(nums1));
  const arr2Set = new Set(nums2);
  const resultArr = [];
  for (let num of arr1Set) {
    if (arr2Set.has(num)) {
      resultArr.push(num);
    }
  }
  return resultArr;
};
console.log(intersection([1, 2, 2, 1], [2, 2])); //[2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); //[ 4, 9 ]
