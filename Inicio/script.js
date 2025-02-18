function toggleMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains("dark");

    if (isDarkMode) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
} else {
    document.body.classList.add("light"); 
}
