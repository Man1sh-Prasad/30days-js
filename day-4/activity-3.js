// activity-3: do while loop

// task-5: write a program to print 1 to 5 using a do-while loop

var i = 1
do {
   console.log(i)
   i++ 
} while (i <= 5);



// task-6: factorial of a number

let num = 10000000005
let factorial = 1
do {
    factorial *= num
    num--
} while(num > 0)
console.log(factorial)