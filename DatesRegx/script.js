// Date Operations
function demonstrateDateOperations() {
    console.log("=== Date Operations ===");
    
    // Current date and formatting
    const now = new Date();
    console.log("Current Date:", now.toLocaleDateString());
    console.log("Formatted Date:", now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }));

    // Date calculations
    const futureDate = new Date();
    futureDate.setDate(now.getDate() + 30);
    console.log("\nDate after 30 days:", futureDate.toLocaleDateString());

}

// RegEx Operations
function demonstrateRegexOperations() {
    console.log("\n=== RegEx Operations ===");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emails = ['user@example.com', 'invalid.email', 'user@domain.co.in'];
    
    console.log("Email Validation:");
    emails.forEach(email => {
        console.log(`${email}: ${emailRegex.test(email)}`);
    });

    // Phone number format validation (XXX-XXX-XXXX)
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const phones = ['123-456-7890', '1234567890', '123-456-789'];
    
    console.log("\nPhone Number Validation:");
    phones.forEach(phone => {
        console.log(`${phone}: ${phoneRegex.test(phone)}`);
    });
}

// Event Listeners
document.getElementById('dateButton').addEventListener('click', demonstrateDateOperations);
document.getElementById('regexButton').addEventListener('click', demonstrateRegexOperations);
