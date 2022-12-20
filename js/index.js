const home = document.getElementById("home");
const TitleBox = document.getElementById("title-text_box");

function titleBoxAnimation() {
  setTimeout(() => {
    TitleBox.classList.add("title-text_box_animation");
  }, 500);
  setTimeout(() => {
    home.style.opacity = "0";
    home.style.transition = "0.5s";
  }, 2300);
}

titleBoxAnimation();
