// task-8: print from 1 to 10, but skip 5 using `continue`

function print() {
    for(let i=0; i<=10; i++) {
        if(i == 5) continue
        console.log(i)
    }
}
print()

// task-9: write a program to print number from 1 to 10 but stop loop when 
//         number is 7 using `break` statement

function breakAtSeven() {
    for(let i=1; i<=10; i++) {
        if(i == 7) break
        console.log(i)
    }
}
breakAtSeven()