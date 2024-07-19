// // activity-3: comparison operator

// // task-8: write a program to compare two number using > and < and log
// //         the result to the console

// function compare(a, b) {
//     if(a > b) {
//        console.log(`${a} is greater than ${b}`) 
//     }
//     else if(a < b) {
//         console.log(`${a} is less than ${b}`)
//     }
// }
// compare(6, 9)
// compare(10, 9)


// // task-9: write a program to compare two number using >= and <= log the re
// //         result to the console
// function comparision(a, b) {
//     return a <= b
// }
// console.log(comparision(3, 3))
// console.log(comparision(4, 3))



// task-10: write a program to compare two number using === and == 
// Function to compare two numbers using == and ===
function compareNumbers(a, b) {
    // Using == operator
    if (a == b) {
      console.log(`Using == : ${a} and ${b} are  equal.`);
    } else {
      console.log(`Using == : ${a} and ${b} are not  equal.`);
    }
  
    // Using === operator
    if (a === b) {
      console.log(`Using === : ${a} and ${b} are  equal data type.`);
    } else {
      console.log(`Using === : ${a} and ${b} are not  equal data type.`);
    }
  }
  
  // Test the function with different values
  compareNumbers(5, 5);         
  compareNumbers(5, '5');
  compareNumbers(0, false);     
  compareNumbers(1, true);      
  compareNumbers(null, undefined); 
  compareNumbers(10, 20);       
  