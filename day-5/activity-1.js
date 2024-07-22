// activity-1: function declaration

// task-1: write a function to check if a numbers is even or odd

function evenOrOdd(num) {
    num % 2 == 0 ?
    console.log(`${num} is even`) : console.log(`${num} is odd`) 
}
evenOrOdd(7)
evenOrOdd(8)


// task-2: write a function to calculate the square of number and return the result

function square(num) {
    return num*num
}
console.log(square(8))