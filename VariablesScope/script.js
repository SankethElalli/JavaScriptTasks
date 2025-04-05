document.getElementById('changeButton').addEventListener('click', function() {
    const length = Number(document.getElementById('length').value);
    const width = Number(document.getElementById('width').value);
    
    if (length && width) {
        const area = length * width;
        document.getElementById('displayText').textContent = `Area: ${area} square units`;
    } else {
        document.getElementById('displayText').textContent = 'Please enter both length and width';
    }
});
