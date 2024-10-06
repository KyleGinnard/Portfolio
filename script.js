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
function showNotification() {
  const notification = document.getElementById('mac-notification');

  // Add the 'show' class to make the notification visible
  notification.classList.add('show');

  // Hide the notification after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
  }, 5000);
}
document.getElementById('close-notification').addEventListener('click', function() {
  document.getElementById('mac-notification').classList.remove('show');
});
// Array of page names
const pages = ['home', 'projects', 'about'];

// Get current page
const currentPage = 'home'; // Example for the home page; change per page

// Get the visited pages from localStorage, or create an empty array if none exists
let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];

// Add the current page to visited pages if it's not already there
if (!visitedPages.includes(currentPage)) {
  visitedPages.push(currentPage);
}

// Update localStorage with the new visited pages array
localStorage.setItem('visitedPages', JSON.stringify(visitedPages));

// Check if the user has visited all pages
if (pages.every(page => visitedPages.includes(page))) {
  // Trigger the macOS-style notification
  showNotification();
}