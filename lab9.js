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

// function evaNumbers (num1, num2) {
// //(add, subtract, multiply, divide, modulus) {
//     if ()

// }


function largesMax (arr) {
  let maxes = []
  for (let i = 0; i < arr.length; i++) {
    var valmax = arr[i][0]
    for (let j = 0; j < arr[i].length; j++) {
      currentE = arr[i][j]
      if (currentE >= valmax) {
        valmax = currentE
      }
    }
    maxes.push(valmax)
  }
  return maxes
}
console.log(largesMax([[3, 5, 4], [7, 8, 1,], [6, 2, 0]]))