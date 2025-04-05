let names = [" John", "Jane", "Doe", "Alice", "Bob"];
let uppercaseNames = [];

document.getElementById('printButton').addEventListener('click', function() {
    // Task 2: Print all names
    console.log("Original names:");
    console.log(names);

    // Task 3: Add Eve
    names.push(" Eve");
    console.log("\nAfter adding Eve:");
    console.log(names);

    // Task 4: Remove Doe
    names = names.filter(name => name.trim() !== "Doe");
    console.log("\nAfter removing Doe:");
    console.log(names);

    // Task 5: Sort alphabetically
    names.sort();
    console.log("\nSorted names:");
    console.log(names);

    // Task 6: Check for Alice
    let aliceCheck = names.some(name => name.trim() === "Alice") 
        ? "Alice is present" 
        : "Alice is not present";
    console.log(`\n${aliceCheck}`);

    // Task 7 & 8: Convert to uppercase
    uppercaseNames = names.map(name => name.toUpperCase());
    console.log("\nUppercase names:");
    console.log(uppercaseNames);
});
