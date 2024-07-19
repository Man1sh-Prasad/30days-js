// activity-3: data-types

// task-4: create a variable of different data types
//          (number, string, boolean, object, array)
// and log their types using `typeof` operator

let num = 5

let string = "lkdfja"

const val = true

var arr = [1, 2, 3]

const obj = {
    name: "manish",
    age: 22
}

console.log(`${num}: ${typeof num}`)
console.log(`${string}: ${typeof string}`)
console.log(`${val}: ${typeof val}`)
console.log(`${arr}: ${typeof arr}`)
console.log(`${JSON.stringify(obj)}: ${typeof obj}`);

console.log(`${obj}: ${typeof obj}`)    //In JavaScript, when you try to convert an object to a string 
// using template literals (${}), it implicitly calls the toString method of the object.
// By default, the toString method of an object returns the string [object Object].