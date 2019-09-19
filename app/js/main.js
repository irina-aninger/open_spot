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

// accordion
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}

// form validation

let form = document.querySelectorAll('.feedback input');
let btnSubmit = document.querySelector('.feedback input.submit');

console.log(btnSubmit);

btnSubmit.addEventListener('mouseover', function () {
    console.log(form.value);
    for (let i=0; i<form.length; i++){
        console.log(form[i].value)
        if (form[i].value <= 0) {
            this.classList.add('error')
        }
    }
});
