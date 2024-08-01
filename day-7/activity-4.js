// activity-4: `this` keyword

// task-7: add a method to the book object that uses the `this` keyword
//         return a string with the book's title and year, and log the 
//         result of calling this method

const library = {
    name: 'PCB Library',
    books: [
        {
            title: 'MERN Stack',
            author: "Manish",
            year: 2024
        }, 
        {
            title: 'AI', 
            author: "Manish",
            year: 2024
        }
    ],

    method: function(){
        this.books.forEach(book => {
            console.log(`book's title: ${book.title} and year: ${book.year}`)
        })
    }
}
library.method()
