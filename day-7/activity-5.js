// activity-5.js

// task-8: use a `for in` loop to iterate over the properties of the book
//         object and log each property and its value

const book = {
    title: "Frontend",
    author: 'Manish Prasad',
    yearPublished: 2024,
    genre: 'Study'
}

for(let props in book) {
    console.log('property: ' + book[props])
}

// task-9: use `object.keys` and `object.values` methods to log all 
//         the keys and values of the book object

let keys = Object.keys(book)
let values = Object.values(book)


for(let i = 0;  i < keys.length; i++) {
    console.log(keys[i] + ' ' + values[i])
}