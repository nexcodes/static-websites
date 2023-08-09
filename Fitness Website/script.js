let menu = document.getElementById("menu")
let nav = document.getElementById("nav")
menu.onclick = () => {
  menu.classList.toggle("fa-times")
  nav.classList.toggle("active")
}


var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },

});
var swiper = new Swiper(".blog-swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});