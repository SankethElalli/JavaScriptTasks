let numbers = [10, 5, 8, 3, 12, 6];
numbers.push(7);
numbers.shift();
numbers.sort((a, b) => a - b);
numbers.reverse();

const doubledNumbers = numbers.map(num => num * 2);

document.getElementById('printButton').addEventListener('click', function() {
    // Task 1 & 2: Original array and length
    console.log('1. Original array:', [10, 5, 8, 3, 12, 6]);
    console.log('2. Array length:', numbers.length);
    
    // Task 3: After adding 7
    console.log('3. After adding 7:', [...numbers]);
    
    // Task 4: After removing first element
    console.log('4. After removing first element:', [...numbers]);
    
    // Task 5: Sorted array
    const sortedArray = [...numbers].sort((a, b) => a - b);
    console.log('5. Sorted array:', sortedArray);
    
    // Task 6: Reversed array
    console.log('6. Reversed array:', [...numbers]);
    
    // Task 7: Check for number 8
    console.log('7.', numbers.includes(8) ? "Number 8 exists" : "Number 8 doesn't exist");
    
    // Task 8: Index of 12
    console.log('8. Index of 12:', numbers.indexOf(12));
    
    // Task 9 & 10: Doubled numbers
    console.log('9 & 10. Doubled numbers array:', doubledNumbers);
});
