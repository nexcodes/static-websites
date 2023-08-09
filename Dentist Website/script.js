let header = document.getElementById("header")
let ul = document.getElementById("ul")
let menu = document.getElementById("menu")
window.onscroll = () => {
    if(window.scrollY > 0){
        ul.classList.add("active")
        header.classList.add("active")
    }
    else{
        ul.classList.remove("active")
        header.classList.remove("active")
    }
}

menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    ul.classList.toggle("open")
}