openMobMenu()

function openMobMenu() {
    const navMenu = document.getElementById("nav-menu")
    const navToggle = document.getElementById("nav-toggle")
    const navClose = document.getElementById("nav-close")
    const navLinks = document.querySelectorAll(".nav__link")

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu")
        })
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu")
        })
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show-menu")
        })
    })
}

// changing headers backgrouns on scroll
function scrollHeader() {
    const header = document.getElementById("header")

    if (this.scrollY >= 50) {
        header.classList.add("scroll-header")
    }
    else {
        header.classList.remove("scroll-header")
    }
}
window.addEventListener("scroll", scrollHeader)


// products tabs changing
const productsLinks = document.querySelectorAll(".products__item")

function changeProducts(e) {
    const linkTarget = e.currentTarget;
    const product = linkTarget.dataset.product;
    const productsContents = document.querySelectorAll(".products__content")

    productsContents.forEach(content => {
        content.classList.remove("active-content")
    })
    productsLinks.forEach(link => {
        link.classList.remove("active-link")
    })

    document.querySelector(`#${product}`).classList.add("active-content")
    linkTarget.classList.add("active-link")
}

productsLinks.forEach(link => {
    link.addEventListener("click", changeProducts)
})

const slides = [...document.querySelectorAll(".slide__container")]
const prevBtn = document.querySelector(".prev__slide")
const nextBtn = document.querySelector(".next__slide")
let index = 0;

const nextSlide = () => {
    slides[index].classList.remove("active-slide")
    index = (index + 1) % slides.length;
    slides[index].classList.add("active-slide")
}

const prevSlide = () => {
    slides[index].classList.remove("active-slide")
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active-slide")
}

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

