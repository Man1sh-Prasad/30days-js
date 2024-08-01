// activity-3: nested objects 

// task-10: create a nested object representing a library with  properties
//          name, books (an array of books object), and log the library object ot the console

const library = {
    name: 'PCB Library',
    books: [
        {
            title: 'MERN Stack',
            author: "Manish"
        }, 
        {
            title: 'AI', 
            author: "Manish"
        }
    ]
}
console.log(library)


// task-6: access and log the name of the library, and titles of all the books in library

// logging library name
console.log(library.name)

// logging book's title
library.books.forEach(book => {
    console.log(book.title)
});