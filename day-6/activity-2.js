// activity-2: array methods (basics)

// task-3: use `push` method to add a new number to the end of the array and log the  updated array

function usePush(array, num) {
    array.push(num)
    return array
}
const arr = [1, 2, 3, 4]
const a = 5
const result = usePush(arr, a)
console.log(result)


// task-4: use `pop` method to re move the last element from the array and log the updated array

function usePop(array) {
    array.pop()
    return array
}
const arrOne = [1, 2, 3, 4, 5, 6, 7]
const resultOne = usePop(arrOne)
console.log(resultOne)


// task-5: use `shift` method to remove the first elemetn from the array and log the updated array

function useShift(array) {
    array.shift()
    return array
}
console.log(useShift([1, 2, 3, 4, 5, 6]))


// task-6: use the `unshift` method to add a new number to the beginning of the array and  log the updated array

function useUnshift(array, num) {
    array.unshift(num)
    return array
}
console.log(useUnshift([1, 2, 3, 4, 5, 6], 7))

