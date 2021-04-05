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

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close_modal");
const btnOpenModal = document.querySelectorAll(".open_modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//keliauti per mygtukus
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal1);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//isjungimas escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

// const modal1 = document.getElementById("#modal1");
// const modal2 = document.getElementById("#modal2");
// const modal3 = document.getElementById("#modal3");
// const modal4 = document.getElementById("#modal4");
// const modal5 = document.getElementById("#modal5");

// const openModal1 = function () {
//   // modal.getAttribute("data_modal");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const openModal2 = function () {
//   // modal.getAttribute("data_modal");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const openModal3 = function () {
//   // modal.getAttribute("data_modal");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const openModal4 = function () {
//   // modal.getAttribute("data_modal");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const openModal5 = function () {
//   // modal.getAttribute("data_modal");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const openModal = function () {
//   // modal.getAttribute("data_modal");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// btnOpenModal.forEach(function (btn) {
//   btn.onclick = function () {
//     const modal = btn.getAttribute("data-modal");

//     document.getElementById(modal).style.display = "block";
//   };
// });
/////////////////////////////////////////////
//contacts
