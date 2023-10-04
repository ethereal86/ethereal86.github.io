const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const root = document.documentElement;

    if (root.style.getPropertyValue('--text-color') === '#dddddd') {
        root.style.setProperty('--background-color', 'linear-gradient(to right, #000435, #1e0033)');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--selection-color', '#3d00cc');
    } else {
        root.style.setProperty('--background-color', 'linear-gradient(to right, #5d6bfd, #bb5cff)');
        root.style.setProperty('--text-color', '#dddddd');
        root.style.setProperty('--selection-color', '#793fff');
    }
});