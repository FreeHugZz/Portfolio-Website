// Navbar current page
const currentPage = document.querySelectorAll(".nav-links");

currentPage.forEach(links => {
  if (links.href === window.location.href) {

    links.classList.add("active-b")
  }
});
//-----------------------

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("wiew-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".porfolio-wrapper").classList.toggle("fade-out");
}


// Hide popup when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup-inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolieItem) {
  document.querySelector(".pp-tumbnail img").src = portfolieItem.querySelector(
    ".portfolio-items-tubmnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolieItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolieItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}

// Navbar js
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
})
