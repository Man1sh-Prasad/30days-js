// activity-2: object methods

// task-3: add method to the book object that return a string with the book's title and author and log the result of calling this method

const book = {
    author: 'Manish',
    title: 'dev',
    year: 2024,

    method: function() {
        return `author: ${this.author} and title: ${this.title}` 
    },

    updateYear: function(newYear) {
        this.year = newYear
    }
}
const res = book.method()
console.log(res)


// task-4: add method to book object that takes a parameter an updates the book's year property, then log the updated object

book.updateYear(2025)
console.log(typeof book.updateYear)
console.log(book.year)

