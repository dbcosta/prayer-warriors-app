const setActive = () => {
  let buttons = document.querySelectorAll("a");
  console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
};
