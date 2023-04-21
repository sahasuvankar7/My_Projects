// sticky navigation bar
window.onscroll = function () {
  stickyNavbar();
};
const header = document.querySelector(".header");
const sticky = header.offsetTop;
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//skill part

const education = document.querySelector(".education");
const skills = document.querySelector(".skills");
const eduDetails = document.querySelector(".education-details");
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("table-content");
var skillDetails = document.querySelector(".skills-details");

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

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});

const mydetails = document.querySelector(".mydetails");
const circularImage = document.querySelector(".circular-image");
const content = document.querySelector(".content");
// responsive content section
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.offsetWidth <= 768) {
    content.insertBefore(circularImage, mydetails);
  }
});
