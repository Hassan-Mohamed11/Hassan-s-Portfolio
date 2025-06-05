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

    if (currentTime.getSeconds() < 10) {
        sec[0].innerHTML = "0" + currentTime.getSeconds()
    } else {
        sec[0].innerHTML = "" + currentTime.getSeconds()
    }
}, 1000)

//---------

function toggleMenu() {
    let navLinks = document.getElementById("nav-links")
    navLinks.classList.toggle("show")
}

//---------

let change = document.getElementById("Change")

change.onclick = function() {
    document.body.classList.toggle("dark-theme")
}