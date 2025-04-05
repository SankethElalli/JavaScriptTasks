function reverseString(str) {
    return str.split('').reverse().join('');
}

document.getElementById('printButton').addEventListener('click', function() {
    const testStrings = [
        "Hello",
        "JavaScript",
        "12345",
        "A man a plan a canal Panama",
        ""
    ];

    console.log("=== String Reversal Tests ===");
    testStrings.forEach(test => {
        console.log(`Original: "${test}"`);
        console.log(`Reversed: "${reverseString(test)}"`);
        console.log("---");
    });
});
