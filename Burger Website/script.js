let hamburger = document.getElementById("hamburger")
let nav = document.querySelector(".navbar-mobile ul")
hamburger.onclick = () =>{
    hamburger.classList.toggle("fa-times")
    nav.classList.toggle("active")
}