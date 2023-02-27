const sideMenu = document.getElementsByClassName("side-menu")[0];
function openHamburgerMenuBtn() {
  sideMenu.style.width = "40%";
  sideMenu.style.zIndex = 1;
}
function closeHamburgerMenuBtn() {
  sideMenu.style.width = "0%";
  sideMenu.style.zIndex = -1;
}

if (window.onresize >= "762px") {
  openHamburgerMenuBtn();
}
document
  .getElementById("hamburger-close")
  .addEventListener("click", closeHamburgerMenuBtn);
document
  .getElementById("hamburger-open")
  .addEventListener("click", openHamburgerMenuBtn);
