// offcanvas menu logic

const menu = document.getElementById("offcanvas");
const menubar = document.getElementById("menubar");
const cross = document.querySelector("img[alt='Cross']");

menubar.addEventListener("click", function () {
  menu.classList.add("offcanvasShow");
});
cross.addEventListener("click", function () {
  menu.classList.remove("offcanvasShow");
});
