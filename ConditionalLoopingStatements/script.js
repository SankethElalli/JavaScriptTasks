// Conditional Statements
function demonstrateConditionals() {
    console.log("=== Conditional Statements ===");

    // if statement
    const num = 15;
    console.log("\n1. Simple if statement:");
    if (num > 10) {
        console.log(`${num} is greater than 10`);
    }

    // if-else statement
    console.log("\n2. if-else statement:");
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }

    // if-else if-else statement
    console.log("\n3. if-else if-else statement:");
    const score = 75;
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }

    // switch statement
    console.log("\n4. switch statement:");
    const day = new Date().getDay();
    switch (day) {
        case 0: console.log("Sunday"); break;
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
    }
}

// Looping Statements
function demonstrateLoops() {
    console.log("\n=== Looping Statements ===");

    // for loop
    console.log("\n1. for loop:");
    for (let i = 1; i <= 3; i++) {
        console.log(`Iteration ${i}`);
    }

    // while loop
    console.log("\n2. while loop:");
    let count = 0;
    while (count < 3) {
        console.log(`Count: ${count}`);
        count++;
    }

    // do-while loop
    console.log("\n3. do-while loop:");
    let num = 1;
    do {
        console.log(`Number: ${num}`);
        num++;
    } while (num <= 3);

}

// Event Listeners
document.getElementById('conditionalButton').addEventListener('click', demonstrateConditionals);
document.getElementById('loopButton').addEventListener('click', demonstrateLoops);
