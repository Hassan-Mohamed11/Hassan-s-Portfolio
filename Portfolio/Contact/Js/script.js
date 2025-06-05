ham = document.getElementById("ham")
links = document.getElementById("nav-links")
close = document.getElementById("close")

ham.addEventListener("click", () => {
    links.classList.remove("close-menu")
    links.classList.add("show-menu")
})

close.addEventListener("click", () => {
    links.classList.remove("show-menu")
    links.classList.add("close-menu")
})

let hrs = document.getElementsByClassName("hrs")
let min = document.getElementsByClassName("min")
let sec = document.getElementsByClassName("sec")

setInterval(() =>{
    let currentTime = new Date()

    if (currentTime.getHours() < 10) {
        hrs[0].innerHTML = "0" + currentTime.getHours()
     } else {
        hrs[0].innerHTML = "" + currentTime.getHours()
     }

     if (currentTime.getMinutes() < 10) {
        min[0].innerHTML = "0" + currentTime.getMinutes()
     } else {
        min[0].innerHTML = "" + currentTime.getMinutes()
     }
}, 1000)

let gameIcon = document.getElementById("flappybird")
let apps = document.getElementById("apps")
let game = document.getElementById("game")
let button = document.getElementById("circle")
let btnInfo = document.getElementById("info")

gameIcon.addEventListener ("click", () => {
    apps.classList.add("hide-apps")
    game.classList.add("active-game")
    btnInfo.classList.add("show-info")
})

button.addEventListener("click", () => {
    apps.classList.remove("hide-apps")
    game.classList.remove("active-game")
})