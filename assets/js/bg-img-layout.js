const imgEl = document.querySelector(".fs-bg-img");
const titleEl = document.querySelector(".fs-bg-title");
const scrollEl = document.querySelector(".fs-bg-scroll-down");

scrollEl.addEventListener("mouseenter", () => {
  titleEl.style.opacity = 0;
  imgEl.style.filter = "brightness(50%) blur(5px)";
});

scrollEl.addEventListener("mouseleave", () => {
  titleEl.style.opacity = 1;
  imgEl.style.filter = "brightness(60%) blur(0px)";
});
