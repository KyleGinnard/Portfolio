const footerThemeToggle = document.getElementById('footer-theme-toggle');
const body = document.body;

footerThemeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update icon based on the current mode
  if (body.classList.contains('dark-mode')) {
    footerThemeToggle.textContent = '🌙'; // Moon icon for dark mode
  } else {
    footerThemeToggle.textContent = '🌞'; // Sun icon for light mode
  }
});
// Functionality for opening modals
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.view-details');
const closes = document.querySelectorAll('.close');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'block';
    });
});

closes.forEach((close, index) => {
    close.addEventListener('click', () => {
        modals[index].style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});