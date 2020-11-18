const imgEl = document.querySelector(".fs-bg-img");
const titleEl = document.querySelector(".fs-bg-title");
const scrollEl = document.querySelector(".fs-bg-scroll-down");

scrollEl.addEventListener("mouseenter", () => {
  if (titleEl) titleEl.style.opacity = 0;
  imgEl.style.filter = "brightness(30%)";
});

scrollEl.addEventListener("mouseleave", () => {
  if (titleEl) titleEl.style.opacity = 1;
  imgEl.style.filter = "brightness(60%)";
});
