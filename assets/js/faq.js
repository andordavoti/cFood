const accordion = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");

const closeAllPanels = () => {
  panel.forEach((element) => {
    element.style.display = "none";
  });

  accordion.forEach((element) => {
    element.classList.remove("active");
  });
};

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const currentPanel = this.nextElementSibling;

    if (currentPanel.style.display === "block") {
      currentPanel.style.display = "none";
      this.classList.remove("active");
    } else {
      closeAllPanels();
      this.classList.add("active");
      currentPanel.style.display = "block";
    }
  });
}

window.onload = () => closeAllPanels();
