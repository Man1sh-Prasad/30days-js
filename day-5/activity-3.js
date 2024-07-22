// activity-3: arrow function

// task-5: write an arrow function to calculate the sum of two number and return the result

const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 90))

// task-6: write an arrow func to check if a string contains a specific
//         character an return a boolean value

const check = (string, character) => {
    for(let i=0; i<=string.length; i++) {
        if(string[i] == character) {
            return true
        }
    }
    return false
}

console.log(check('qwertyuiop', 'p'))