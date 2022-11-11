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
  }
});
//-----------------------

// API Data on About Page
let url = "aboutB.json";

async function getSomething() {
  let response = await fetch(url);

  if (response.ok) {
    let data = await response.json();
    let workLi = document.querySelector(".work-u");
    let studyUl = document.querySelector(".study-ul");

    //work experince
    data.portfolie.jobs.forEach((e) => {
      let jobb = document.createElement("h3");
      jobb.innerHTML = e.company;

      let jobbLi = document.createElement("li");
      jobbLi.innerHTML = e.task;
      workLi.append(jobb, jobbLi);
    });
    //--------study------------
    data.portfolie.edu.forEach((e) => {
      let study = document.createElement("h3");
      studyUl.appendChild(study);
      study.innerHTML = e.school;

      let studyLi = document.createElement("li");
      studyLi.classList.add("port-p");
      studyUl.appendChild(studyLi);
      studyLi.innerHTML = e.education;
    });
  } else {
    console.log("HTTP-Error:" + response.status);
  }
}
getSomething();
