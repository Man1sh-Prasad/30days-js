// activity-2: function expression

// task-3: write a function expression to find the maximum of two number an 
//         log the result

function findmax(a, b) {
    a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)  
}
findmax(2, 3)
findmax(3, 2)

// using `Math.max()`
function findMax(a, b, c) {
    return Math.max(a, b, c);
}

const num1 = 10
const num2 = 20
const num3 = 49
console.log(`The maximum of ${num1}, ${num2} and ${num3}  is ${findMax(num1, num2, num3)}`)
