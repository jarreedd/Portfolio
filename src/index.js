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