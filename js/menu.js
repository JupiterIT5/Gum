// Pop-up - Меню

document.querySelector('.header-links-wrapper').addEventListener('click', () => {
    document.querySelector('.pop_up-menu-container').classList.add('pop-menu-active')
})

document.querySelector('.contact-links-wrapper').addEventListener('click', () => {
    document.querySelector('.pop_up-menu-container').classList.add('pop-menu-active')
})

document.querySelector('.footer-links-wrapper').addEventListener('click', () => {
    document.querySelector('.pop_up-menu-container').classList.add('pop-menu-active')
})

document.querySelector('.close-pop-menu').addEventListener('click', () => {
    document.querySelector('.pop_up-menu-container').classList.remove('pop-menu-active')
})

// Мобильное меню

let click = 1

document.querySelector('.nav__mobile').addEventListener('click', () => {
    if (click % 2 != 0) {
        document.querySelector('.nav__mobile').classList.add('span-active')
        document.querySelector('.header-mobile-menu').classList.add('menu-active')
        document.querySelector('.header-mobile-menu').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('body').style.overflowY = 'hidden'
        window.scrollTo({
            top: 0
        })
    } else {
        document.querySelector('.nav__mobile').classList.remove('span-active')
        document.querySelector('.header-mobile-menu').classList.remove('menu-active')
        document.querySelector('.header-mobile-menu').style.backgroundColor = '#fff'
        document.querySelector('body').style.overflowY = 'scroll'
    }
    click += 1
})