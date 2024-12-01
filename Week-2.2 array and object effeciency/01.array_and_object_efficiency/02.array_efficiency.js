const arr = ["a", "b", "c", "d"];

// slice- O(n)

console.log(arr.slice(0, 2)); //[ 'a', 'b' ]
console.log(arr); //[ 'a', 'b', 'c', 'd' ]

// splice - O(n)
console.log(arr.splice(0, 2)); //[ 'a', 'b' ]
console.log(arr); //[ 'c', 'd' ]

//sorting - O(nlogn)
//map, reduce, filter, forEach --> O(n)
