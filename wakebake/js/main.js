const button = document.querySelector('.burger-icon')
const body = document.querySelector('body')
const nav1 = document.querySelector('.menu-link_1')
const nav2 = document.querySelector('.menu-link_2')
const nav3 = document.querySelector('.menu-link_3')
const nav4 = document.querySelector('.menu-link_4')

button.addEventListener('click', () => {
    body.classList.toggle('body--opened-menu')
})

nav1.addEventListener('click', () => {
    body.classList.remove('body--opened-menu')
})

nav2.addEventListener('click', () => {
    body.classList.remove('body--opened-menu')
})

nav3.addEventListener('click', () => {
    body.classList.remove('body--opened-menu')
})

nav4.addEventListener('click', () => {
    body.classList.remove('body--opened-menu')
})

