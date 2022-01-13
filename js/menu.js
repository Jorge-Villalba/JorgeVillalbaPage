const nav = document.querySelector('.nav');
const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.menu .close-menu');
var menuOption = document.querySelectorAll('.menu-option'); // create an array

window.addEventListener('scroll', function () {
    nav.classList.toggle('active', window.scrollY > 0)
})

menuMobile.addEventListener('click', () => {
    menu.classList.toggle('active');
})

closeMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
})

menuOption.forEach(function(myBtn){
    /*add a listener to every element of this array */
    myBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
});








