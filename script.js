// Dark Mode Toggle Logic
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const menuBar = document.querySelector('.menu-bar');

// Function to toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    menuBar.classList.toggle('dark-mode');
}

// Event listener for checkbox change
darkModeCheckbox.addEventListener('change', toggleDarkMode);

// Persisting the dark mode state
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    menuBar.classList.add('dark-mode');
    darkModeCheckbox.checked = true;
}

// Draggable Window Logic
const windowElement = document.querySelector('.window');
const windowHeader = document.querySelector('.window-header');

let isDragging = false;
let offsetX, offsetY;

windowHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    offsetY = e.clientY - windowElement.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        windowElement.style.left = `${e.clientX - offsetX}px`;
        windowElement.style.top = `${e.clientY - offsetY}px`;
        windowElement.style.position = 'absolute'; // Change position to absolute while dragging
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});