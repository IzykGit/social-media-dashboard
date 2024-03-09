const darkSheet = 'dark.css'
const lightSheet = 'light.css'
let currentTheme = 1;

const stylesheet = document.getElementById("stylesheet")

document.getElementById("dark-mode").addEventListener("click", () => {
    if(currentTheme === 1) {
        stylesheet.href = lightSheet;
        currentTheme = 2;
    }
    else if (currentTheme === 2) {
        stylesheet.href = darkSheet;
        currentTheme = 1;
    }
})