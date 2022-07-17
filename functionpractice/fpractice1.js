// //first practice

// function firstp (name, lastn) {
//     console.log("Hello", " " + name + " " + lastn)


//}
//firstp("Renzo", "Silva")

// function adder (mango) {
//     for (let i = 0; i < mango.length; i++)
//     console.log(mango[i]);

// }
// adder(["car", "dog", "city"])

// example 3

function doesExist(nums, num) {
    for (let i = 0; i < nums.length; i++){
         if (nums[i] === num) {
            return true;
         }
    }
    return false
}
doesExist([1, 4, 5, 6], 4)

console.log("To check")