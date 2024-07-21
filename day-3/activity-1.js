// activity-1: if-else statement

// task-1: write a program to check if a number is positive, negative, or zero
//         and log the result to the console.

function check(num) {
    if(num > 0) {
        console.log("Positive")
    }
    else if(num < 0) {
        console.log("Negative")
    } else {
        console.log("zero")
    }
}
check(1)
check(0)
check(-9)

// task-2: write a program to check if a person is eligible to vote

function isEligible(age) {
    if(age >= 18) {
        console.log("Eligible for vote")
    } else {
        console.log('not eligible for vote')
    }
}
isEligible(29)
isEligible(10)