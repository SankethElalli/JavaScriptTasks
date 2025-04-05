// Using Promises
function fetchWithPromise() {
    console.log("Fetching data using Promise...");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            console.log("Data received with Promise:");
            console.log(data);
        })
        .catch(error => {
            console.error("Error with Promise:", error);
        });
}

// Using Async/Await
async function fetchWithAsync() {
    console.log("Fetching data using Async/Await...");
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log("Data received with Async/Await:");
        console.log(data);
    } catch (error) {
        console.error("Error with Async/Await:", error);
    }
}

// Event Listeners
document.getElementById('promiseButton').addEventListener('click', fetchWithPromise);
document.getElementById('asyncButton').addEventListener('click', fetchWithAsync);
