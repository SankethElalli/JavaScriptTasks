function calculate(num1, num2, operation, callback) {
    let result;
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
    }
    callback(result);
}

function getInputValues() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return null;
    }
    return { num1, num2 };
}

function displayResult(result) {
    console.log(`Result: ${result}`);
}

document.getElementById('addButton').addEventListener('click', function() {
    const values = getInputValues();
    if (values) calculate(values.num1, values.num2, 'add', displayResult);
});

document.getElementById('subtractButton').addEventListener('click', function() {
    const values = getInputValues();
    if (values) calculate(values.num1, values.num2, 'subtract', displayResult);
});

document.getElementById('multiplyButton').addEventListener('click', function() {
    const values = getInputValues();
    if (values) calculate(values.num1, values.num2, 'multiply', displayResult);
});

document.getElementById('divideButton').addEventListener('click', function() {
    const values = getInputValues();
    if (values) calculate(values.num1, values.num2, 'divide', displayResult);
});
