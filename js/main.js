const sideMenu = document.getElementsByClassName("side-menu")[0];
const sideMenuIcon = document.querySelector(".side-menu i");
const sideMenuItems = document.querySelectorAll(".side-menu li");

function openHamburgerMenuBtn() {
  sideMenu.style.width = "40%";
  sideMenu.style.zIndex = 1;
  for (i = 0; i < sideMenuItems.length; i++) {
    sideMenuItems[i].style.display = "block";
  }
}
function closeHamburgerMenuBtn() {
  sideMenu.style.width = "0%";
  sideMenu.style.zIndex = -1;
  for (i = 0; i < sideMenuItems.length; i++) {
    sideMenuItems[i].style.display = "none";
  }
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
