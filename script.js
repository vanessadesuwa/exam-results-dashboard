// Checkbox functionality
document.querySelectorAll(".checkbox").forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    this.classList.toggle("checked");
  });
});
