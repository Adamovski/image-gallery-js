const modal = document.querySelector(".modal-container");
const imgModal = document.querySelector(".img-modal");
// const active = document.querySelector(".active");
const imgs = document.querySelectorAll(".imgs img");
//make arr of imgSrc to allow setting current displayed image Index
const imgSrcArr = [...imgs].map((img) => img.src);
const modalImgs = document.querySelectorAll(".img-modal img");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const closeBtn = document.querySelector("#closeBtn");

//set image initial index value
let index;

const modalActiveToggle = () => {
  modal.classList.toggle("active");
  modalImgs[index].classList.remove("current");
};

const imgClick = (e) => {
  index = imgSrcArr.indexOf(e.target.src);
  modalActiveToggle();
  modalImgs[index].classList.toggle("current");
  // active.classList.toggle("active");
  console.log(index);
};

modal.addEventListener("click", modalActiveToggle);
closeBtn.addEventListener("click", modalActiveToggle);
nextBtn.addEventListener("click", (event) => nextBtnClick(event));
prevBtn.addEventListener("click", (event) => prevBtnClick(event));
imgs.forEach((img) => img.addEventListener("click", imgClick));
imgModal.addEventListener("click", (event) => event.stopPropagation());

function nextBtnClick(event) {
  modalImgs[index].classList.toggle("current");
  if (index < imgs.length - 1) {
    index += 1;
  } else {
    index = 0;
  }
  animation();
  event.stopPropagation();
}

function prevBtnClick(event) {
  modalImgs[index].classList.toggle("current");
  if (index > 0) {
    index -= 1;
  } else {
    index = imgs.length - 1;
  }
  animation();
  event.stopPropagation();
}

function animation() {
  modalImgs[index].classList.toggle("current");
}
