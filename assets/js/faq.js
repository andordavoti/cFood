const accordion = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");

panel.forEach((element) => {
  element.style.display = "none";
});

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const currentPanel = this.nextElementSibling;
    if (currentPanel.style.display === "block") {
      currentPanel.style.display = "none";
    } else {
      currentPanel.style.display = "block";
    }
  });
}
