// addEvent on element

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
};

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNav);

let modal = document.getElementById("modal");
let support = document.getElementById("support");
const overlay = document.getElementById("overlay");

function openModal() {
  modal.classList.add("open-modal");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("open-modal");
  overlay.classList.remove("active");
}

// function openPledge() {
//   select.classList.add("open-select");
// }

function openSupport() {
  closeModal();
  support.classList.add("open-support");
  overlay.classList.add("active");
}

function closeSupport() {
  support.classList.remove("open-support");
  overlay.classList.remove("active");
}

function openPledge() {
  let closeSelect = document.querySelector(".collapse .select");
  closeSelect.classList.toggle("select");
}

function changeBookmark() {
  let button = document.getElementById("bookmark");
  button.innerText = "Bookmarked";
  let image = document.createElement("img");
  image.src = "images/icon-bookmarked.svg";
  button.appendChild(image);
  button.style.backgroundColor = "cyan";
  button.style.padding = "0";
}
