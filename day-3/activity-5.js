// task-7: 

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

rl.question("Enter Year: ", (input) => {

    let year = parseInt(input)
    checkLeapYear(year)

    rl.close();
});
