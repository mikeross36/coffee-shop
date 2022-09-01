"use strict"

const domElements = () => {
    const navList = document.querySelector(".nav__list")
    const navMenu = document.querySelector(".nav__menu")
    const menuBtn = document.getElementById("menu-btn")
    const navClose = document.getElementById("nav-close")
    const closeNavMenu = () => {
        if(navMenu) navMenu.classList.remove("show-menu")
    }
    return { navList, navMenu, closeNavMenu, menuBtn, navClose }
};

let {navList, navMenu, closeNavMenu, menuBtn, navClose} = domElements()

class NavLinks {
     getLinks = async () => {
        try {
            const response = await fetch("/data/nav-data/navlinks.json")
            const links = await response.json()
            return links;
        }
        catch (error) {
            console.error(error)
        }
    }

    displayNavLinks = links => {
        links.forEach(link => {
            if (navList) {
                navList.insertAdjacentHTML("beforeend", `
                <li class="nav__item">
                    <a href="${link.link}" class="nav__link active-link" onclick="closeNavMenu()">${link.text}</a>
                </li>`)
            }
        })
    }

    openMobMenu = () => {
        if (menuBtn) menuBtn.addEventListener("click", () => navMenu.classList.add("show-menu"))
    
        if (navClose) navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"))
    };
};

(async () => {
    const navlinks = new NavLinks()
    const links = await navlinks.getLinks()
    navlinks.displayNavLinks(links)
    navlinks.openMobMenu()
})();

