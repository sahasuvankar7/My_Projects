let light = document.querySelector(".sun");
let dark = document.querySelector(".moon");
let body = document.querySelector("body");
let container = document.querySelector(".container");
let about = document.querySelector(".about");
let education_content = document.querySelector(".education_content");
const header = document.querySelector(".header");

const education = document.querySelector(".education");
const skills = document.querySelector(".skills");
const eduDetails = document.querySelector(".education-details");

const hamburger = document.querySelector(".hamburger");

const mydetails = document.querySelector(".mydetails");
const circularImage = document.querySelector(".circular-image");
const content = document.querySelector(".content");

const ulist = document.querySelector(".nav-bar-ul");
const nav = document.querySelector(".nav-bar");

const light_mode_icon = document.getElementById("light-mode-icon");
const dark_mode_icon = document.getElementById("dark-mode-icon");

//-------------------------------------smooth navigation
//event delegation
ulist.addEventListener("click", function (e) {
  // console.log(e.target);
  e.preventDefault(); //prevent from if anything happens to page by clicking
  if (e.target.classList.contains("a__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.body.offsetWidth <= 950) {
    const newEl1 = document.createElement("div");
    // const newEl2 = document.createElement("li");
    newEl1.classList.add("sun");
    newEl1.innerHTML = '<i class="uil uil-sun" id="light-mode-icon"></i>';

    // newEl2.classList.add("moon");
    // newEl2.innerHTML = '<i class="uil uil-moon" id="dark-mode-icon"></i>';

    nav.prepend(newEl1);
    // ulist.append(newEl2);
  }
});

// sticky navigation bar
window.onscroll = function () {
  stickyNavbar();
};

const sticky = header.offsetTop;
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//skill part

//

function opentab(tabname) {
  for (x of tablinks) {
    x.classList.remove("active-link");
  }
  for (x of tabcontents) {
    x.classList.remove("active-tab");
  }
  document.addEventListener("click", function (event) {
    event.target.classList.add("active-link");
    k;
  });
  document.getElementById(tabname).classList.add("active-tab");
}

hamburger.addEventListener("click", function () {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});

//dark & light mode

dark.addEventListener("click", function () {
  body.style.backgroundColor = "none";
  body.classList.toggle("dark-mode");
  education_content.style.borderLeft = "1px solid white";
  body.style.transition = "2s";
  if (body.classList.contains("dark-mode")) {
    // header.style.color='none';
    header.style.backgroundColor = "#18122B";
    header.style.color = "white";
    dark_mode_icon.classList.remove("uil-moon");
    dark_mode_icon.classList.add("uil-sun");
    light_mode_icon.classList.remove("uil-sun");
    // light_mode_icon.classList.add('uil-cloud');
  } else {
    header.style.color = "black";
    header.style.backgroundColor = "white";
    dark_mode_icon.classList.remove("uil-sun");
    dark_mode_icon.classList.add("uil-moon"); // Revert to the original class for dark mode symbol
    light_mode_icon.classList.add("uil-sun");
  }
});

// hamburger line dark to light and light to dark mode

function changeMode() {
  console.log("hi");
  const hamburgerLine = document.querySelectorAll(".line");
  const navbarColor = document.querySelector(".nav-bar");
  const alink = document.querySelectorAll(".a__link");
  if (dark_mode_icon.classList.contains("uil-moon")) {
    hamburgerLine.forEach((e) => {
      e.style.backgroundColor = "white";
    });
    navbarColor.style.backgroundColor = "black";
    alink.forEach((e) => {
      e.style.color = "white";
    });
  } else {
    hamburgerLine.forEach((e) => {
      e.removeAttribute("style");
    });
    navbarColor.style.backgroundColor = "#F9F9F9";
    alink.forEach((e) => {
      e.style.color = "black";
    });
  }
}

// scroll-more
const scroll_more = document.querySelector(".scroll-more");
scroll_more.addEventListener("click", function () {
  // console.log('hi');
  const about = document.querySelector(".about");
  const about_coords = about.getBoundingClientRect();
  // console.log(about_coords);

  // window.scrollTo(about_coords.left+window.pageXOffset , about_coords.top+window.pageYOffset);

  //advanced version of window scroll  smoothly

  window.scrollTo({
    left: about_coords.left + window.pageXOffset,
    top: about_coords.top + window.pageYOffset,
    behavior: "smooth",
  });

  // more advanced form scrolling

  // scroll_more.scrollIntoView({behavior:'smooth'});
});
