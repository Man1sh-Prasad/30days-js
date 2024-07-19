// activity-4: logical operator 

// task-11: write a program that uses the && operator to combine two condition and log the result to the console
function checkOne(conditionOne, conditionTwo) {
    if( conditionOne && conditionTwo ) {
        console.log("Both conditions are true")
    } else {
        console.log("One or both conditions are fasle")
    }
}
checkOne(true, false)
checkOne(true, true)


// task-12: write a program that uses the || operator to combine two condition and log the result to the console
function checkTwo(conditionOne, conditionTwo) {
    if( conditionOne || conditionTwo ) {
        console.log("One or Both conditions are true")
    } else {
        console.log("Both conditions are false")
    }
}
checkTwo(false, false)
checkTwo(true, false)

// task-13: write a program using ! 
function negate(value) {
    return !value
}
const res = negate(true)
console.log(res)