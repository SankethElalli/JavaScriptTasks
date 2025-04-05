function calculateAge(birthYear, currentYear) {
    birthYear = Number(String(birthYear).trim());
    currentYear = Number(String(currentYear).trim());

    if (isNaN(birthYear) || isNaN(currentYear)) {
        return "Error: Please provide valid numbers for both years";
    }

    if (!Number.isInteger(birthYear) || !Number.isInteger(currentYear)) {
        return "Error: Years must be whole numbers";
    }

    if (birthYear > currentYear) {
        return "Error: Birth year cannot be in the future";
    }

    const age = currentYear - birthYear;
    return `You are ${age} years old`;
}

document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const birthYear = document.getElementById('birthYear').value;
    const currentYear = document.getElementById('currentYear').value;
    const result = calculateAge(birthYear, currentYear);
    document.getElementById('result').textContent = result;
});

console.log(calculateAge(1990, 2024));
console.log(calculateAge(2000, 1995));
console.log(calculateAge(1995, "2024"));
console.log(calculateAge(" 1995", 2024));
console.log(calculateAge("abcd", "xyz"));
