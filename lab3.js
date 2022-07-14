// test score

// function gradeAssg (grade) {
//     switch
//     case 1: grade >= 9 && grade <= 10
//     return 'A';
//     break;

//     case 2: grade >= 8 && grade < 9
//     return 'B';



// }
// console.log(gradeAssg(9))

function gradeAssg(grade) {
    if (grade >= 9 && grade <= 10) {
        console.log('Great A')
    } else if (grade >= 8 && grade < 9) {
        console.log('Very good B')
    } else if (grade >= 7 && grade < 8) {
        console.log('Good C')
    } else if (grade >= 6 && grade < 7) {
        console.log('Jum D')
    } else {
        console.log('you did not study')
    }
    //console.log(gradeAssg(8))
    gradeAssg(8)
}
let car = 3
console.log(car)