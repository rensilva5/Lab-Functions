/* LAB 8
 - Find if a number is present in given range
 - Function `checkInRange()` finds if the given number is within the provided start
   and end range using >=, <= and && operators in JavaScript.
 - Print "Between the range" if num is between start and end values
 - Else Print "Between the range" since num is outside start and end values. */

 function checkInRange(num) {
    if (num <= 100 && num >= 1) {
        return "Between the range"
    } else {
        return "Outside the range"
    }
 }
 console.log(checkInRange(101))