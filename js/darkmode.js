const dark = document.getElementById("darkMode");

if (dark) {
    dark.onclick = () => {
        document.body.classList.toggle("dark");
    };
}