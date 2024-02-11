let menuButton = document.querySelector(".header__burger-button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuButton.classList.toggle("header__burger-button--active");
}
