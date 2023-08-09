let menu = document.getElementById("menu")
let nav = document.querySelector("header nav ul")
menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    nav.classList.toggle("active")
}