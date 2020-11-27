const accordions = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");

const closeAllPanels = () => {
  panel.forEach((element) => {
    element.classList.remove("panel-open");
  });

  accordions.forEach((element) => {
    element.classList.remove("active");
  });
};

for (const accordion of accordions) {
  accordion.addEventListener("click", function () {
    const currentPanel = this.nextElementSibling;

    if (currentPanel.className.includes("panel-open")) {
      currentPanel.classList.remove("panel-open");
      this.classList.remove("active");
    } else {
      closeAllPanels();
      this.classList.add("active");
      currentPanel.classList.add("panel-open");
    }
  });
}
