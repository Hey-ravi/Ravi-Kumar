// Select the mode switch buttons
const darkModeButton = document.getElementById('dark-mode');
const lightModeButton = document.getElementById('light-mode');
const dayModeButton = document.getElementById('day-mode');
const nightModeButton = document.getElementById('night-mode');

// Function to switch to Dark Mode
darkModeButton.addEventListener('click', () => {
    document.body.classList.remove('light-mode', 'day-mode', 'night-mode');
    document.body.classList.add('dark-mode');
});

// Function to switch to Light Mode
lightModeButton.addEventListener('click', () => {
    document.body.classList.remove('dark-mode', 'day-mode', 'night-mode');
    document.body.classList.add('light-mode');
});

// Function to switch to Day Mode
dayModeButton.addEventListener('click', () => {
    document.body.classList.remove('dark-mode', 'light-mode', 'night-mode');
    document.body.classList.add('day-mode');
});

// Function to switch to Night Mode
nightModeButton.addEventListener('click', () => {
    document.body.classList.remove('dark-mode', 'light-mode', 'day-mode');
    document.body.classList.add('night-mode');
});