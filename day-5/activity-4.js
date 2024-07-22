// function parameter and default values

// task-7: write a program that takes two parameters and return their
//         product. Provide a default value for the second parameter

function product(a, b=5) {
    return a*b
}
console.log(product(5))


// task-8: write a function that takes a person's name and age and returns a
//         a greeting message. Provide a default value for the age

function greeting(name, age=22) {
    console.log(` Hello ${name}, ${age}`)
}
greeting("manish")