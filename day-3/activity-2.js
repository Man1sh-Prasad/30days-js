// task-3: write a program to find the largest of the three numbers using 
//         nested if-else statement



function findLargest(a, b, c) {
    if(a > b) {
        if(a > c) {
            console.log(`${a} is the largest`)
        } else {
            console.log(`${c} is the largest`)
        }
    } else {
        if(b > c) {
            console.log(`${b} is the largest`)
        } else {
            console.log(`${c} is the largest`)
        }
    }
}
findLargest(9, 12, 4)