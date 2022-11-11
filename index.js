//Navbar toggle

const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
})

// Navbar current page
const currentPage = document.querySelectorAll(".nav-links");
currentPage.forEach(links => {
  if (links.href === window.location.href) {

    links.classList.add("active-b")
   /*  links.setAttribute("current", "active") */
  }
});

//Preloader start
const preloader = document.getElementById("preloader");
const wpreload = document.querySelector(".wpreload");
const preloaderBtn = document.querySelector(".preloader-btn");
console.log(preloaderBtn)

document.addEventListener("DOMContentLoaded", function () {

  setTimeout(() => {
    preloader.style.display = "none";
    wpreload.style.display = "grid";
    setTimeout(() => (wpreload.style.opacity = 1), 750);
  }, 2500);
  
})


