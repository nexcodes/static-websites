let body = document.getElementById("body")
let header = document.getElementById("header")
let hamburger = document.getElementById("hamburger")
hamburger.onclick = () =>{
  body.classList.toggle("active")
  header.classList.toggle("active")
  hamburger.classList.toggle("active")
  hamburger.classList.toggle("fa-times")
}
var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 30,
    grabCursor:true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".testimonal-swiper", {
    loop:true,
    spaceBetween: 30,
    grabCursor:true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });