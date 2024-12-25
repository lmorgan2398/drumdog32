const root = document.querySelector(':root');

let theme = 'dark'

root.classList.add(theme);

const themeButton = document.querySelector('.theme-button');

themeButton.addEventListener('click', () => {
    if (theme === 'dark') {
        root.classList.remove(theme);
        theme = 'light';
        root.classList.add(theme);
    } else {
        root.classList.remove(theme);
        theme = 'dark';
        root.classList.add(theme);
    }
});