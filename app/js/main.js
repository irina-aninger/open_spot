new WOW().init();

let banner = document.querySelector('.header__banner'),
    header = document.querySelector('.header__navbar');

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= (banner.offsetHeight/2)) {
        header.classList.add('fixed')
    }
    if (window.pageYOffset == 0) {
        header.classList.remove('fixed')
    }
});

// parallax

let scene = document.getElementById('elipse__wrapper');
let parallaxInstance = new Parallax(scene);
