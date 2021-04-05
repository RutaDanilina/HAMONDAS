"strict";
const header = document.querySelector(".header_container");
const nav = document.querySelector(".nav_bar");
const sectionAbout = document.querySelector("#section_abbout-us");

/////////////////////////////////////
// Navis

//grazus nuvaziavimas iki section
document.querySelector(".header-right").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////
// Slideris
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();

//////////////////////////////////////////////
//masinu korteles

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".modal .close_modal");
const btnOpenModal = document.querySelectorAll(".open_modal");
let modal;

const openModal = function () {
	const element = event.target;
	modal = element.parentNode.parentNode.querySelector('.modal');
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  modal = null;
};

//keliauti per mygtukus
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}
for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener("click", closeModal);
}

overlay.addEventListener("click", closeModal);

//isjungimas escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

