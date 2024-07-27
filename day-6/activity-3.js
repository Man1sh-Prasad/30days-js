// activity-3: array methods (intermediate) 

// task-7: use the `map` method to create a new array where each number is doubled and log the new array

function useMap(array) {
    const newArray = array.map( num => num*2)
    return newArray
}
console.log(useMap([1,2,3,3,4,5]))


// task-8: use `fitler` method to create a new array with only even numbers and log the new array

function useFilter(array) {
    const newArray = array.filter( num => num % 2 == 0)
    return newArray
}
console.log(useFilter([1,2,3,3,4,5]))


// task-9: use `reduce` method to calculalte the sum of all numbers in the array and log the result

function useReduce(array) {
    const sum = array.reduce((accumulator, currentVal) => {
        return accumulator + currentVal
    }, 0)
    return sum
}
console.log(useReduce([1,2,3,3,4,5]))




