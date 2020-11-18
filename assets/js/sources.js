const accordion = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");

const closeAllPanels = () => {
  panel.forEach((element) => {
    element.classList.remove("panel-open");
  });

  accordion.forEach((element) => {
    element.classList.remove("active");
  });
};

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
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
