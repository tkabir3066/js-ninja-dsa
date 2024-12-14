//You need to create a javascript calculator function that performs basic arithmetic operations: addition, subtraction, multiplication and division. The function must handle edge cases such as division by zero, invalid numerical inputs,and unsupported operations by returning appropriate error message. The goal is to ensure the calculator is reliable and handles all input scenarios predictably.

function calculator(num1, num2, operation) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (isNaN(num1) || isNaN(num2)) {
    return "Errors: both inputs must be numbers";
  }

  switch (operation) {
    case "add":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mul":
      return num1 * num2;
    case "div":
      if (num2 === 0) return "Error: Division by 0 not allowed";
      return num1 / num2;

    default:
      return "Error: Unsupported operation, please use 'add', 'sub', 'mul', 'div' etc";
  }
}

console.log(calculator(5, 10, "add")); //15
console.log(calculator(5, 10, "sub")); //-5
console.log(calculator(5, 10, "mul")); //50
console.log(calculator(20, 4, "div")); //5
console.log(calculator(20, 0, "div")); //'Error: Division by 0 not allowed'
console.log(calculator(20, 4, "mod")); //Error: Unsupported operation, please use 'add', 'sub', 'mul', 'div' etc
