const button = document.querySelector('.burger-icon')
const body = document.querySelector('body')

const nav1 = document.querySelector('.menu-link_1')
const nav2 = document.querySelector('.menu-link_2')
const nav3 = document.querySelector('.menu-link_3')
const nav4 = document.querySelector('.menu-link_4')

const btn = document.querySelector('.aboutUs-img__button')
const cancel = document.querySelector('.modal-cancel')

const tab1 = document.querySelector('.tab-controls__item1')
const tab2 = document.querySelector('.tab-controls__item2')
const tab3 = document.querySelector('.tab-controls__item3')
const tab4 = document.querySelector('.tab-controls__item4')

const show1 = document.querySelector('.tab-content__wrapper1')
const show2 = document.querySelector('.tab-content__wrapper2')
const show3 = document.querySelector('.tab-content__wrapper3')
const show4 = document.querySelector('.tab-content__wrapper4')

const dop1 = document.querySelector('.tab-content1')
const dopop1 = document.querySelector('.tab-content--opened1')
const dop2 = document.querySelector('.tab-content2')
const dopop2 = document.querySelector('.tab-content--opened2')
const dop3 = document.querySelector('.tab-content3')
const dopop3 = document.querySelector('.tab-content--opened3')
const dop4 = document.querySelector('.tab-content4')
const dopop4 = document.querySelector('.tab-content--opened4')
const dop5 = document.querySelector('.tab-content5')
const dopop5 = document.querySelector('.tab-content--opened5')
const dop6 = document.querySelector('.tab-content6')
const dopop6 = document.querySelector('.tab-content--opened6')
const dop7 = document.querySelector('.tab-content7')
const dopop7 = document.querySelector('.tab-content--opened7')
const dop8 = document.querySelector('.tab-content8')
const dopop8 = document.querySelector('.tab-content--opened8')


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

btn.addEventListener('click', () => {
    body.classList.add('body--opened-modal')
})

cancel.addEventListener('click', () => {
    body.classList.remove('body--opened-modal')
})

tab1.addEventListener('click', () => {
    tab1.classList.toggle('tab-controls__item--active1')
    show1.classList.toggle('tab-content--show')
})

tab1.addEventListener('click', () => {
    tab2.classList.remove('tab-controls__item--active2')
    tab3.classList.remove('tab-controls__item--active3')
    tab4.classList.remove('tab-controls__item--active4')
    show2.classList.remove('tab-content--show')
    show3.classList.remove('tab-content--show')
    show4.classList.remove('tab-content--show')
})

tab2.addEventListener('click', () => {
    tab2.classList.toggle('tab-controls__item--active2')
    show2.classList.toggle('tab-content--show')
})

tab2.addEventListener('click', () => {
    tab1.classList.remove('tab-controls__item--active1')
    tab3.classList.remove('tab-controls__item--active3')
    tab4.classList.remove('tab-controls__item--active4')
    show1.classList.remove('tab-content--show')
    show3.classList.remove('tab-content--show')
    show4.classList.remove('tab-content--show')
})

tab3.addEventListener('click', () => {
    tab3.classList.toggle('tab-controls__item--active3')
    show3.classList.toggle('tab-content--show')
})

tab3.addEventListener('click', () => {
    tab1.classList.remove('tab-controls__item--active1')
    tab2.classList.remove('tab-controls__item--active2')
    tab4.classList.remove('tab-controls__item--active4')
    show1.classList.remove('tab-content--show')
    show2.classList.remove('tab-content--show')
    show4.classList.remove('tab-content--show')
})

tab4.addEventListener('click', () => {
    tab4.classList.toggle('tab-controls__item--active4')
    show4.classList.toggle('tab-content--show')
})

tab4.addEventListener('click', () => {
    tab2.classList.remove('tab-controls__item--active2')
    tab3.classList.remove('tab-controls__item--active3')
    tab1.classList.remove('tab-controls__item--active1')
    show2.classList.remove('tab-content--show')
    show3.classList.remove('tab-content--show')
    show1.classList.remove('tab-content--show')
})

dop1.addEventListener('click', () => {
    dop1.classList.add('tab1--closed')
    dopop1.classList.add('tab1--opened')
})

dopop1.addEventListener('click', () => {
    dop1.classList.remove('tab1--closed')
    dopop1.classList.remove('tab1--opened')
})

dop2.addEventListener('click', () => {
    dop2.classList.add('tab2--closed')
    dopop2.classList.add('tab2--opened')
})

dopop2.addEventListener('click', () => {
    dop2.classList.remove('tab2--closed')
    dopop2.classList.remove('tab2--opened')
})

dop3.addEventListener('click', () => {
    dop3.classList.add('tab3--closed')
    dopop3.classList.add('tab3--opened')
})

dopop3.addEventListener('click', () => {
    dop3.classList.remove('tab3--closed')
    dopop3.classList.remove('tab3--opened')
})

dop4.addEventListener('click', () => {
    dop4.classList.add('tab4--closed')
    dopop4.classList.add('tab4--opened')
})

dopop4.addEventListener('click', () => {
    dop4.classList.remove('tab4--closed')
    dopop4.classList.remove('tab4--opened')
})

dop5.addEventListener('click', () => {
    dop5.classList.add('tab5--closed')
    dopop5.classList.add('tab5--opened')
})

dopop5.addEventListener('click', () => {
    dop5.classList.remove('tab5--closed')
    dopop5.classList.remove('tab5--opened')
})

dop6.addEventListener('click', () => {
    dop6.classList.add('tab6--closed')
    dopop6.classList.add('tab6--opened')
})

dopop6.addEventListener('click', () => {
    dop6.classList.remove('tab6--closed')
    dopop6.classList.remove('tab6--opened')
})

dop7.addEventListener('click', () => {
    dop7.classList.add('tab7--closed')
    dopop7.classList.add('tab7--opened')
})

dopop7.addEventListener('click', () => {
    dop7.classList.remove('tab7--closed')
    dopop7.classList.remove('tab7--opened')
})

dop8.addEventListener('click', () => {
    dop8.classList.add('tab8--closed')
    dopop8.classList.add('tab8--opened')
})

dopop8.addEventListener('click', () => {
    dop8.classList.remove('tab8--closed')
    dopop8.classList.remove('tab8--opened')
})

const swiper = new Swiper('.gallery__swiper', {

    slidesPerView: 1,
    spaceBetween: 32,

    pagination: {
        el: '.gallery__pagination',
        type: "fraction",
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

    breakpoints: {

        550: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1101: {
            slidesPerView: 4,
        }
    }

})


const swiper2 = new Swiper('.feedback__swiper', {

    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,

    pagination: {
      el: '.feedback__pagination',
      type: "fraction",
    },
  

    navigation: {
      nextEl: '.feedback__next',
      prevEl: '.feedback__prev',
    },
  
    
    scrollbar: {
      el: '.swiper-scrollbar', 
      draggable: true,
      hide: false,
      dragSize: 132,
    },

    breakpoints: {
        901: {
            slidesPerView: 1.5,
        },
        1241: {
            slidesPerView: 2,
        }
    }
  })
