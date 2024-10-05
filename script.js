const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    modeSwitch.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});