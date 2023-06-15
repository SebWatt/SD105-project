import "../styles/styles.css";
import carGameImage from "../../Images/car-game.png";
import matchGameImage from "../../Images/MittMatch.png";
import quizImage from "../../Images/quiz-website.png";

const images = document.querySelectorAll("img");

images[0].src = carGameImage;
images[1].src = matchGameImage;
images[2].src = quizImage;

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
