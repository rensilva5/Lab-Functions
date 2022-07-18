/*--  LAB 7 
- Find the largest of three number
- Function `findLargest()` finds the largest of three number by using ">"
  and "&&" operator in JavaScript.
- Print num1 is the largest if num1>num2 and num1>num3.
- Print num2 is the largest if num2>num3.
- Else print num3. */

function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `${num1} is the largest`
    } else if (num2 > num1 && num2 > num3) {
        return `${num2} is the largest`
    } else {
        return `${num3} is the largest`
    }
}
console.log(findLargest(8, 10, 16))