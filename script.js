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