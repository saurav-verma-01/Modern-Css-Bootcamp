const nav = document.getElementById("nav");

console.log(nav.children[0].textContent);

const lightMode = () => {
  nav.children[0].textContent = "Dark Mode";
  nav.children[1].classList.replace("fa-moon", "fa-sun");
};

const darkMode = () => {
  nav.children[0].textContent = "Light Mode";
  nav.children[1].classList.replace("fa-sun", "fa-moon");
};

// lightMode();

nav.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  //   console.log(currentTheme);

  if (currentTheme === "light") {
    document.body.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.body.setAttribute("data-theme", "light");
    lightMode();
  }
});
