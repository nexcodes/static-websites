let music = new Audio("./assets/music.mp3")
let Audioturn = new Audio("./assets/ting.mp3")
let gameover = new Audio("./assets/gameover.mp3")
let isgameover = false
var currentTurn = 'X'
let gif = document.querySelector(".image img")

// Function to change the turn
music.volume = 0.1
const changeTurn = () => {
    return currentTurn == 'X' ? currentTurn = "0" : currentTurn = "X"
}

// Funtion to check win
const checkWin = () => {
    let checkboxs = document.getElementsByClassName("text")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((checkboxs[e[0]].innerText === checkboxs[e[1]].innerText) && (checkboxs[e[2]].innerText === checkboxs[e[1]].innerText) && (checkboxs[e[0]].innerText !== "")) {
            document.getElementsByClassName("status")[0].innerText = `${checkboxs[e[0]].innerText} Won`
            isgameover = true
            gameover.play()
            gif.style.display = "block"
        }
    })
}

// Game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((element) => {
    let checkbox = element.querySelector('.text')
    element.addEventListener("click", (e) => {
        if (checkbox.innerText === '') {
            checkbox.innerText = currentTurn
            changeTurn()
            Audioturn.play()
            checkWin()
            if (!isgameover) {
                document.getElementsByClassName("status")[0].innerText = `Turn for ${currentTurn}`
            }
        }
    })

})

reset.onclick = () => {
    let boxes = document.getElementsByClassName("box")
    Array.from(boxes).forEach((element) => {
        let checkbox = element.querySelector('.text')
        checkbox.innerText = ""
        document.getElementsByClassName("status")[0].innerText = `Turn for X`
        currentTurn = 'X'
        gif.style.display = "none"
    })
}
backgroundMusic.onclick = () => {
    if(music.paused)
        music.play()
    else{
        music.pause()
    }
}