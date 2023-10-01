const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeToggle.textContent = 'Dark Mode';
    } else {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
    }
});

// Check user preferences or use a default
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Light Mode';
} else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = 'Dark Mode';
}
