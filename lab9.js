/* LAB 9
 - Perform arithmetic operations on two numbers
 - Function `evalNumbers()` prints the result after evaluating arithmetic operations
   between two numbers of addition, multiplication, division, and modulus in JavaScript.
 - Print result of num1+num2 if operation is "add"
 - Print result of num1-num2 if operation. is "subtract"
 - Print result of num1*num2 if operation. is "multiply"
 - Print result of num1/num2 if operation. is "divide"
 - Print result of num1%num2 if operation. is "modulus"
 - Else print "Invalid operation". */

function evaNumbers(assignOperator) {
  let num1 = 4
  let num2 = 5
  if (assignOperator === "add") {
    return num1 + num2
  } else if (assignOperator === "subtract") {
      return num1 - num2
  } else if (assignOperator === "multiply") {
      return num1 * num2
  } else if (assignOperator === "divide") {
      return num1 / num2
  } else if (assignOperator === "modulus") {
      return num1 % num2
  } else {
      return "Invalid operation"
  }
}
console.log(evaNumbers("yes"))