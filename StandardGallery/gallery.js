const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

const opacity = 0.6;
//make arr of imgSrc to allow setting index of clicked thumbnail
const imgSrcArr = [...imgs].map((img) => img.src);
//Set first img opacity
imgs[0].style.opacity = opacity;
//set image initial index value
let index = 0;

imgs.forEach((img) => img.addEventListener("click", imgClick));
nextBtn.addEventListener("click", nextBtnClick);
prevBtn.addEventListener("click", prevBtnClick);

function nextBtnClick() {
  if (index < imgs.length - 1) {
    index += 1;
  } else {
    index = 0;
  }
  buttonClickAnimations();
}

function prevBtnClick() {
  if (index > 0) {
    index -= 1;
  } else {
    index = imgs.length - 1;
  }
  current.src = imgs[index].src;
  buttonClickAnimations();
}

function buttonClickAnimations() {
  imgs.forEach((img) => (img.style.opacity = 1));
  current.src = imgs[index].src;
  current.classList.add("fade-in");
  imgs[index].style.opacity = opacity;
  setTimeout(() => current.classList.remove("fade-in"), 250);
}

function imgClick(e) {
  //Reset opacity
  imgs.forEach((img) => (img.style.opacity = 1));
  // change current img to clicked img
  current.src = e.target.src;
  //add fade in class
  current.classList.add("fade-in");
  //remove fade-in class after 0.5s
  setTimeout(() => current.classList.remove("fade-in"), 250);
  //   //change opacity to opacity var
  e.target.style.opacity = opacity;
  // set index of current imaage
  index = imgSrcArr.indexOf(e.target.src);
}
