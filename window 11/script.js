let startmenu = document.getElementById("startmenu")

let taskbar = document.getElementsByClassName("taskbar")[0]

taskbar.addEventListener("click", () => {
    if (startmenu.style.bottom == "50px")
        startmenu.style.bottom = "-1000px"
    else
        startmenu.style.bottom = "50px"
}) 