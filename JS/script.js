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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => 
    observer.observe(el))
