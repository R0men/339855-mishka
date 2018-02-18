var pageHeader = document.querySelector(".page-header");
var toggle = document.querySelector(".main-nav__toggle");

pageHeader.classList.remove("page-header--nojs");

toggle.addEventListener("click", function() {
  if (pageHeader.classList.contains("page-header--closed")) {
    pageHeader.classList.remove("page-header--closed");
    pageHeader.classList.add("page-header--opened");
  } else {
    pageHeader.classList.add("page-header--closed");
    pageHeader.classList.remove("page-header--opened");
  }
});
