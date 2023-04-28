function handleHamburgerMenuBtn() {
  const iconChange = document.querySelector(".nav-icon i");
  if (iconChange.classList.contains("fa-bars")) {
    iconChange.classList.add("fa-x");
    iconChange.classList.remove("fa-bars");
  } else if (iconChange.classList.contains("fa-x")) {
    iconChange.classList.add("fa-bars");
    iconChange.classList.remove("fa-x");
  }

  document.querySelector("header").classList.toggle("active");
}

document
  .querySelector(".nav-icon")
  .addEventListener("click", handleHamburgerMenuBtn);
