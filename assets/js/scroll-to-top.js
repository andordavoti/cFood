const btn = document.querySelector(".scroll-to-top-btn");

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.opacity = 1;
  } else {
    btn.style.opacity = 0;
  }
};

const scollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.onscroll = () => scrollFunction();
