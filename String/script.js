function analyzeString(inputString) {
    return {
        length: inputString.length,
        lowercase: inputString.toLowerCase(),
        uppercase: inputString.toUpperCase(),
        containsJavaScript: inputString.toLowerCase().includes('javascript'),
        aCount: (inputString.match(/a/gi) || []).length
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('stringForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('stringInput').value;
        const analysis = analyzeString(input);

        resultDiv.innerHTML = `
            <p>Length: ${analysis.length}</p>
            <p>Lowercase: ${analysis.lowercase}</p>
            <p>Uppercase: ${analysis.uppercase}</p>
            <p>Contains "JavaScript": ${analysis.containsJavaScript}</p>
            <p>Count of 'a': ${analysis.aCount}</p>
        `;
    });
});
