let isMeunOpen = false
let isShowOverlay = false

const menuBtn = document.querySelector('.menu-btn')
const menuItems = document.querySelector('.menu-items')
const resumeRequestBtn = document.querySelector('.resume-request')
const closeFormBtn = document.querySelector('.close-form')
const overlay =document.querySelector('.overlay')

function toggleMenu() {
    isMeunOpen = !isMeunOpen

    if (isMeunOpen) {
        menuItems.classList.add('show')
    } else {
        menuItems.classList.remove('show')
    }
}

function toggleOverlay() {
    isShowOverlay = !isShowOverlay

    if (isShowOverlay) {
        overlay.classList.add('show')
    } else {
        overlay.classList.remove('show')
    }
}

function toggleRequestForm() {
    toggleOverlay()
}

menuBtn.addEventListener('click', toggleMenu)
menuItems.addEventListener('click', toggleMenu)

resumeRequestBtn.addEventListener('click', toggleRequestForm)
closeFormBtn.addEventListener('click', toggleRequestForm)