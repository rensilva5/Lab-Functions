/* LAB 10
 - Find the grade for input marks
 - Function `findGrade()` to find the grade of the student based on the input marks.
 - Print "S grade" if marks is between 90 and 100.
 - Print "A grade" if marks is between 80 and 90.
 - Print "B grade" if marks is between 70 and 80.
 - Print "C grade" if marks is between 60 and 70.
 - Print "D grade" if marks is between 50 and 60.
 - Print "E grade" if marks is between 40 and 50.
 - Print "Student has failed" if marks is between 0 and 40.
 - Else print "Invalid marks". */

 function findGrade(grade) {
    if (grade >= 90 && grade <= 100) {
        return "S"
    } else if (grade >= 80 && grade < 90) {
        return "A"
    } else if (grade >= 70 && grade < 80) {
        return "B"
    } else if (grade >= 60 && grade < 70) {
        return "C"
    } else if (grade >= 50 && grade < 60) {
        return "D"
    } else if (grade >= 40 && grade < 50) {
        return "E"
    } else (grade >= 0 && grade < 40)
        return "Student has failed"
    
}
    let grade = 79
    console.log(findGrade(grade))