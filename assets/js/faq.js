const accordion = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");

const closeAllPanels = () => {
  panel.forEach((element) => {
    element.classList.add("panel-closed");
  });

  accordion.forEach((element) => {
    element.classList.remove("active");
  });
};

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const currentPanel = this.nextElementSibling;

    if (currentPanel.className.includes("panel-closed")) {
      closeAllPanels();
      this.classList.add("active");
      currentPanel.classList.remove("panel-closed");
    } else {
      currentPanel.classList.add("panel-closed");
      this.classList.remove("active");
    }
  });
}

window.onload = () => closeAllPanels();
