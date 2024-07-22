// activity-1: for loop

// task-1: write a program to print number from 1 to 10 using for loop

function print() {
    for(let i=1; i<=10; i++) {
        console.log(i)
    }
}
print()



// task-2: write a program to print the multiplicaton table using for loop

function printTable(num) {
    for(let i=1; i<=10; i++) {
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
printTable(5)