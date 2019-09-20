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
let bannerElipse = document.querySelector('.elipse__banner'),
    footerElipse = document.querySelector('.elipse__footer'),
    faqElipse = document.querySelector('.elipse__faq'),
    radioElipse = document.querySelector('.elipse__radio'),
    aboutElipse = document.querySelector('.elipse__about');
let parallaxInstance = new Parallax(bannerElipse);
let parallaxInstanceFooter = new Parallax(footerElipse);
let parallaxInstanceFaq = new Parallax(faqElipse);
let parallaxInstanceRadio = new Parallax(radioElipse);
let parallaxInstanceAbout = new Parallax(aboutElipse);

// accordion
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}

// tags pop-up
$('.tags__toggle').click(function () {
    $('#tags_pop-up').show();
    $('body').addClass('open__modal');
    $(this).parent().children('.tags__input').appendTo('#tags_pop-up .tags');
    $('#tags_pop-up input').attr('checked','checked');
    $(this).clone().prependTo('#tags_pop-up .tags__input');
    let a = $("#tags_pop-up .tags__input input");
    if(a.length === a.filter(":checked").length){
        $('#tags_pop-up .tags__toggle').addClass('checked')
    }
});

let a = $("#tags_pop-up .tags__input input");
$("#tags_pop-up .tags__input").change(function(){
    if(a.length > a.filter(":checked").length){
        $('#tags_pop-up .tags__toggle').removeClass('checked')
    } else {
        $('#tags_pop-up .tags__toggle').addClass('checked')
    }
});

$(a).click(function () {
    $('#tags_pop-up .tags__toggle').removeClass('checked');
    $(this).addClass('checked');
    $(this).attr('checked','checked');
    $(a).not(this).attr('checked','');
});

$('.ok').click(function () {
    $('#tags_pop-up').hide();
    $('.bg.tags').html('');
    $('body').removeClass('open__modal');
});

$('.cancel').click(function () {
    $('#tags_pop-up').hide();
    $('.bg.tags').html('');
    $('body').removeClass('open__modal');
});

// dropdown calculator
if ($(window).width() < 992) {
    $('.jc-cpt-inner .row').click(function () {
        $(this).toggleClass('active');
    });
}

// form validation

// let form = document.querySelectorAll('.feedback input');
// let btnSubmit = document.querySelector('.feedback input.submit');
//
// console.log(btnSubmit);
//
// btnSubmit.addEventListener('mouseover', function () {
//     console.log(form.value);
//     for (let i=0; i<form.length; i++){
//         console.log(form[i].value)
//         if (form[i].value <= 0) {
//             this.classList.add('error')
//         }
//     }
// });
