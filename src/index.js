alert("Welcome to my website! Please note that this website is still in the development phase, so you might encounter some features that are a work in progress. Thank you for your understanding and patience!")

let meunOpen = false

const menuBtn = document.querySelector('.menu-btn')
const menuItems = document.querySelector('.menu-items')
const resumeRequest = document.querySelector('.resume-request')

function toggleMenu() {
    meunOpen = !meunOpen

    if (meunOpen) {
        menuItems.classList.add('show')
    } else {
        menuItems.classList.remove('show')
    }
}

menuBtn.addEventListener('click', toggleMenu)
menuItems.addEventListener('click', toggleMenu)