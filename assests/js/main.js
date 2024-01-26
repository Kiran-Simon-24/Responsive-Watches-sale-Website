/*  Show Menu  */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu Show  */
/*  Validate if const exists  */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*  Menu Hidden  */
/*  Validate if const exists  */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*  Remove Menu Mobile  */
const navLink = document.querySelectorAll(".nav--link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //When we click on each nav--link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*  Swiper watches  */
const swiperWatches = new Swiper(".home--swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*  GSAP Animation  */

gsap.from('.home--images', 1.5,{opacity: 0, y: 150, delay: .1})
gsap.from('.home--data', 1.8,{opacity: 0, x: -100, delay: .8})
gsap.from('.home--info', 1.8,{opacity: 0, x: -100, delay: 1})