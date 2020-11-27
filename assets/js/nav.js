// Get the hamburger element from the DOM
const hamburgerEl = document.querySelector(".hamburger");

// Get the nav links element from the DOM
const navLinksEl = document.querySelector("nav .links");
// Get all the nav link elements from the DOM as an array
const linksEl = document.querySelectorAll("nav .links .link");

// Add an event listener function that runs every time the user clicks on the hamburger element
hamburgerEl.addEventListener("click", () => {
  // Toggle the open class for the nav links element
  navLinksEl.classList.toggle("open");

  // Loop through the array of link elements and toggle the fade class
  linksEl.forEach((linkEl) => {
    linkEl.classList.toggle("fade");
  });

  // change the image of the hamburger menu
  if (navLinksEl.classList.contains("open")) {
    hamburgerEl.src = "assets/img/icons/close.png";
  } else {
    hamburgerEl.src = "assets/img/icons/menu.png";
  }
});
