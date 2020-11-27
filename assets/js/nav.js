const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector("nav .links");
const links = document.querySelectorAll("nav .links .link");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  if (navLinks.classList.contains("open")) {
    hamburger.src = "assets/img/icons/close.png";
  } else {
    hamburger.src = "assets/img/icons/menu.png";
  }
});
