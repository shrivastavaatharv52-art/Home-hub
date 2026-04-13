// JavaScript code for DOM manipulation and API calls

// Function to get current date and time
function getCurrentDateTime() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

// Function to display current date and time on the webpage
function displayDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    dateTimeElement.innerText = getCurrentDateTime();
}

// Fetching data from an example API
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        // Manipulate DOM with the fetched data
        const dataElement = document.getElementById('data');
        dataElement.innerText = JSON.stringify(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Add event listeners on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    displayDateTime();
    fetchData();
});