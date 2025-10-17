// Checkbox functionality
document.querySelectorAll("tr").forEach((row) => {
  row.addEventListener("click", function () {
    // Find the checkbox inside this row
    const checkbox = this.querySelector(".checkbox");
    if (checkbox) {
      checkbox.classList.toggle("checked");
    }

    // Optionally, add a visual "selected" effect to the row
    this.classList.toggle("selected");
  });
});

navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  const sidebarDropdown = navItem.nextElementSibling;
  const navdropIcon = navItem.querySelector(".nav-dropicon");
  const navsubItem = document.querySelector(".nav-subitem.active");

  navItem.addEventListener("click", () => {
    sidebarDropdown.classList.toggle("active");
    navdropIcon.classList.toggle("active");
    navItem.classList.toggle("active");
    navsubItem.classList.toggle("off");
  });
});

const headerProfile = document.querySelector(".user-profile");
const headerDropdown = document.querySelector(".header-dropdown");
const headerDropicon = document.querySelector(".header-dropdown-icon");

headerProfile.addEventListener("click", () => {
  headerDropdown.classList.toggle("active");
  headerDropicon.classList.toggle("active");
});

const menuToggleBtn = document.querySelector(".menu-toggle-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

menuToggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  sidebarOverlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});
