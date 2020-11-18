const appBgEl = document.querySelector(".fs-bg-img");

setTimeout(() => {
  appBgEl.style.backgroundImage = "url(../assets/img/bg/app-bg-2.jpg)";
  appBgEl.style.filter = "brightness(80%)";
}, 2000);
