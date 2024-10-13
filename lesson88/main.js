const button = document.querySelector('.btn')
let btnIsRed = false

button.addEventListener('click', () => {
    if(btnIsRed) {
        button.style.backgroundColor = 'blue'
        btnIsRed = false
        console.log('its working!')
        button.style.color = 'white'
    } else {
        button.style.backgroundColor = 'red'
        btnIsRed = true
        button.style.color = 'black'
        console.log('its working!')
    }
})

document.addEventListener('scroll', () => {
    console.log('scrolling')
})