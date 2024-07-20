document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav");

  const darkMode = () => {
    navToggle.children[0].textContent = "Light Mode";
    navToggle.children[1].classList.replace("fa-regular", "fa-solid");
  };

  const lightMode = () => {
    navToggle.children[0].textContent = "Dark Mode";
    navToggle.children[1].classList.replace("fa-solid", "fa-regular");
  };

  const applyTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);

    if (theme === "dark") {
      darkMode();
    } else {
      lightMode();
    }
  };

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  // Initialize theme on page load
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  navToggle.addEventListener("click", toggleTheme);
});
