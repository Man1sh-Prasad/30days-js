// activity-5: multi-dimensional arrays

// task-12: create a 2D array(matrix) and log the entire array

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix)

// print row
matrix.forEach(row => console.log(row))

// print each element
for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}