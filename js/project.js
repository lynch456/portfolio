const project = document.getElementById("project");
const projectBox = document.getElementById("section-inner");
const projectList = document.getElementById("project-list");

function contentAnimation() {
  setTimeout(() => {
    project.style.opacity = "1";
    project.style.transition = "0.5s";
  }, 3000);
  setTimeout(() => {
    projectList.children[0].style.opacity = "1";
    projectList.children[0].style.transition = "1s";
  }, 3500);
  setTimeout(() => {
    projectList.children[1].style.opacity = "1";
    projectList.children[1].style.transition = "1s";
  }, 3700);
  setTimeout(() => {
    projectList.children[2].style.opacity = "1";
    projectList.children[2].style.transition = "1s";
  }, 3900);
  setTimeout(() => {
    projectList.children[3].style.opacity = "1";
    projectList.children[3].style.transition = "1s";
  }, 4100);
  setTimeout(() => {
    projectList.children[4].style.opacity = "1";
    projectList.children[4].style.transition = "1s";
  }, 4300);
  setTimeout(() => {
    projectList.children[5].style.opacity = "1";
    projectList.children[5].style.transition = "1s";
  }, 4500);
  setTimeout(() => {
    projectList.children[6].style.opacity = "1";
    projectList.children[6].style.transition = "1s";
  }, 4700);
}

contentAnimation();
