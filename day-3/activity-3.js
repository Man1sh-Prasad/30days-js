// activity-3: Switch case

// taask-4: 
/*
function getDayOfWeek(dayNumber) {
    let dayName;
    
    switch(dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }

    return dayName;
}


let dayOfWeek = getDayOfWeek(21);
console.log("The day of the week is:", dayOfWeek);

*/


// task-5: 

const readline = require('readline');

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }

    return grade;
}

// Read input from the console
rl.question("Enter the score (0-100): ", (input) => {
    let score = parseFloat(input);

    // Get and print the grade
    let grade = getGrade(score);
    console.log("The grade is:", grade);

    // Close the readline interface
    rl.close();
});
