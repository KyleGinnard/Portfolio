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
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

// Commands the terminal will respond to
const commands = {
    help: 'Available commands: help, about, projects, clear',
    about: 'I am a cybersecurity graduate with programming skills in web development, cybersecurity, and more.',
    projects: 'Here are some of my key projects:\n1. Portfolio Website\n2. Cybersecurity Tools\n3. JavaScript Apps',
    clear: ''
};

// Handle user input
terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = terminalInput.value.trim().toLowerCase();
        terminalInput.value = ''; // Clear the input field

        if (input === 'clear') {
            terminalOutput.innerHTML = ''; // Clear terminal output
        } else {
            // Get the output for the command, or show an error if the command is invalid
            const output = commands[input] || `Command not found: ${input}. Type 'help' for a list of commands.`;
            terminalOutput.innerHTML += `<p>${output}</p>`;
        }

        // Scroll terminal output to the bottom
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});