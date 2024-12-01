// Big O(relation or trends how operation count grows/relates with input size) - worst case

//best case (omega)
//average case (theta)

// Examples

//==== Big O(1) - constant ====//
function printSum(num1, num2) {
  return num1 + num2;
}

console.log(printSum(10, 20));

//==== Linear Big O(n) ====//
// function print(num) {
//   let count = 0;
//   for (let i = 0; i < num; i++) {
//     console.log(i);
//     count++;
//   }
//   return count;
// }

// console.log(print(10)); //10

//======  n*n= n², Quadratic Big O( n²)  ======//
// function print(num) {
//   let count = 0;
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       console.log(i, j);
//       count++;
//     }
//   }
//   return count;
// }

// console.log(print(5)); //25

//=== Cubic- Big O(n³)
function print(num) {
  let count = 0;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let k = 0; k < num; k++) {
        console.log(i, j);
        count++;
      }
    }
  }
  return count;
}

console.log(print(5)); //125
//----------------------------------------------------------------------------//
const arr = [1, 2, 5, 6, 4, 8, 3];

//O(n) - searching for number 4

// O(logN) - Binary search (log linear)
// ekhane 16 item theke hoi toh 4 ta step e solution hye jabe
// ekhane 19 item theke hoi toh 3 ta step e solution hye jabe

//== logarithmic o(nlogn)
//example- sorting algorithm

//=============== simplifying Big-O ======================//

//BigO(3) - here three operation but it is O(1) means constant
function addThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(addThreeNumbers);

//O(n+n) = O(2n) --> O(n) constants are not important here
// function print(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// print(10);

//O(n*n + n) = O(n^2 + n) ---> O(n^2)
/* function print(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

print(10); */

//============ interesting use case ============//

// O(n+1) --> O(n) //here first loop operation depends on n value but second one operation is constant
/* function print(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

print(10); */

// O(n*10)--> O(10n) ---> O(n)
/* function print(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(i, j);
    }
  }
}

print(10); */

//O(m+n) //because both of two loops have different inputs
/* function print(n1, n2) {
  for (let i = 0; i < n1; i++) {
    console.log(i);
  }
  for (let i = 0; i < n2; i++) {
    console.log(i);
  }
}

print(5, 10); */

//O(m*n) ---> O(mn) //different input
// function print(n1, n2) {
//   for (let i = 0; i < n1; i++) {
//     console.log(i);
//     for (let i = 0; i < n2; i++) {
//       console.log(i);
//     }
//   }
// }

// print(5, 10);

//O(1) -here number of operation is fixed
// function printHighestFive(num) {
//   for (let i = 0; i < Math.min(num, 5); i++) {
//     console.log(i);
//   }
// }

// printHighestFive(10);

//O(n) -> here number of operations depends on input n
// upto input 1, 2,3,4 and 5 time complexity is O(1) because there number of operations is constant
//so here best case- O(1) and worst case is O(n)
// best case means inputs are from 1 to 5
//worst case means inputs are greater than 5, means if input grow then number of operations grow
function printAtLeastFive(num) {
  for (let i = 0; i < Math.max(num, 5); i++) {
    console.log(i);
  }
}

printAtLeastFive(5);
