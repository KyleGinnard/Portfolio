// Dark Mode Toggle Logic
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');

// Function to toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
}

// Event listener for checkbox change
darkModeCheckbox.addEventListener('change', toggleDarkMode);

// Persisting the dark mode state
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    darkModeCheckbox.checked = true;
}