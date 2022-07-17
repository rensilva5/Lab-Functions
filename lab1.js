// const num = 23
// const toText = String(num)
// console.log(toText)
// console.log('js')

// LAB 1 - What number's bigger?
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output
// to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum (numA, numB) {
    if (numA > numB) {
    console.log("The greater number of ", + numA + " and ", + numB + " is ", + numA)
    } else {
    console.log("The greater number of ", + numA + " and ", + numB + " is ", + numB)
}
}
greaterNum(3, 5)
greaterNum(8, 5)
