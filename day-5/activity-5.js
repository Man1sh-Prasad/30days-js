// activity-5: Higher order function

// task-9: write a HOF that takes a function and a number, and call the function that many times

const hello = () => {
    console.log("Hello")
}

function HOF(hello, num) {
    for(let i=1; i<=num; i++) {
        hello()
    }
}
HOF(hello, 5)


// task-10: write a HOF that takes two functions and a value, applies the first
//          first function to the value, and then applies the second function to the result

function test(fn1, fn2, value) {
    return fn2(fn1(value))
}

function add(x) {
    return x + x
}

function multiply(x) {
    return x * 3
}

const result = test(add, multiply, 9)
console.log(result)