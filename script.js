// Dark Mode Toggle Logic
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const menuBar = document.querySelector('.menu-bar');

// Function to toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    menuBar.classList.toggle('dark-mode'); // Ensure this line is present
}

// Event listener for checkbox change
darkModeCheckbox.addEventListener('change', toggleDarkMode);

// Persisting the dark mode state
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    menuBar.classList.add('dark-mode'); // Ensure menu bar starts in dark mode if system preference is dark
    darkModeCheckbox.checked = true;
}