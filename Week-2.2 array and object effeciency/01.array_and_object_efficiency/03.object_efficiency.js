const obj = {
  a: 1,
  b: 2,
  c: 3,
};

//access --> O(1)
console.log(obj.a); //1

//insert into object --> O(1)
obj.d = 4;
console.log(obj); //{ a: 1, b: 2, c: 3, d: 4 }

//remove or delete from obj --> O(1)
delete obj.b;
console.log(obj); //{ a: 1, c: 3, d: 4 }

//-----check if any property exists or not---//
//hasOwnProperty --> O(1)

//process-1
console.log(obj.hasOwnProperty("c")); //true
//process-2
console.log("c" in obj); //true

//updating property -->O(1)
obj.c = 6;
console.log(obj); //{ a: 1, c: 6, d: 4 }

//===============================================================================////
//keys --> O(n)
const keys = Object.keys(obj);
console.log(keys); //[ 'a', 'b', 'c' ]

//values --> O(n)
const values = Object.values(obj);
console.log(values); //[ 1, 2, 3 ]

//entries --> O(n)

console.log(Object.entries(obj)); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
