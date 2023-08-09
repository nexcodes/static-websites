let search = document.getElementById("search")
const searchQuery = () => {
    search.classList.toggle("-translate-y-48")
}

let Navigation = document.getElementById("Navigation")

const NavSideBar = () =>{
    Navigation.classList.toggle("translate-x-96")

}

let Cart = document.getElementById("Cart")

const ToggleCart = () => {
    Cart.classList.toggle("translate-x-96")
}