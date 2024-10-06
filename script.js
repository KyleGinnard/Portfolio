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
const projects = {
    project1: {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        technologies: 'HTML, CSS, JavaScript'
    },
    project2: {
        title: 'Project 2',
        description: 'A brief description of Project 2.',
        technologies: 'React, Node.js'
    }
    // Add more projects as needed
};

function showQuickLook(projectKey) {
    const project = projects[projectKey];
    if (project) {
        document.getElementById('modalTitle').innerText = project.title;
        document.getElementById('modalDescription').innerText = project.description;
        document.getElementById('modalTechnologies').innerText = project.technologies;

        const modal = document.getElementById('quickLookModal');
        modal.style.display = 'block';
    }
}

function closeQuickLook() {
    const modal = document.getElementById('quickLookModal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('quickLookModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}