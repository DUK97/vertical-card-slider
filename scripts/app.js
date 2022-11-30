const slider = document.querySelector(".slider");
const buttonUp = document.querySelector(".controls__down-button--up");
const buttonDown = document.querySelector(".controls__down-button--down");
const mainSlideList = document.querySelector(".main-slide__list");
const slidesCount = document.querySelectorAll(".main-slide__item").length;
const sidebarList = document.querySelector(".sidebar__list");

let activeSlideIndex = 0;

sidebarList.style.top = `-${(slidesCount - 1) * 100}vh`;

buttonUp.addEventListener("click", () => {
  changeSlide("up");
});
buttonDown.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "down") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  }
  if (direction === "up") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  const clientHeight = slider.clientHeight;
  mainSlideList.style.transform = `translateY(-${
    activeSlideIndex * clientHeight
  }px)`;

  sidebarList.style.transform = `translateY(${
    activeSlideIndex * clientHeight
  }px)`;
}
