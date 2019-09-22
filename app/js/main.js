new WOW().init();


let banner = document.querySelector('.header__banner'),
    header = document.querySelector('.header__navbar');

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= (banner.offsetHeight/2)) {
        header.classList.add('fixed')
    }
    if (window.pageYOffset === 0) {
        header.classList.remove('fixed')
    }
});


// parallax
let elipse = document.querySelectorAll('.elipse__wrapper');

for (let i=0; i<elipse.length; i++) {
    let parallaxInstance       = new Parallax(elipse[i])
}


// accordion
let acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}


// tags pop-up
let toggle    = $('.tags__toggle'),
    popUpTags = $('#tags_pop-up'),
    tagsWrap  = $('.tags__wrapper');


toggle.click(function (el) {
    el.preventDefault();
    $(popUpTags).show();
    $('body').addClass('open__modal');

    let newInput = $(this).next('.tags__input'),
        checkAll = $(this).clone();

    tagsWrap.append(newInput);
    $(checkAll).prependTo('#tags_pop-up .tags__input');

    setChecked();

    $('.ok').click(function () {
        $(popUpTags).hide();
        $('body').removeClass('open__modal');
        $(el.target).parents('.form__box').append(newInput);
        checkAll.remove();
    });

    $('.cancel').click(function () {
        $(popUpTags).hide();
        $('body').removeClass('open__modal');
        $('#tags_pop-up .tags__input > input:checkbox').prop('checked', 'checked');
        $(el.target).parents('.form__box').append(newInput);
        checkAll.remove();
    });

});

function setChecked() {
    let tagsInput = $('#tags_pop-up .tags__input > input:checkbox'),
        newToggle = $('#tags_pop-up .tags__toggle');

    const statusCheck = () => {
        if (tagsInput.length === tagsInput.filter(':checked').length ) {
            $(newToggle).addClass('checked')
        } else {
            $(newToggle).removeClass('checked')
        }
    };

    statusCheck();

    $(tagsWrap).change(statusCheck);

    $('#tags_pop-up .check_all').click(function(){
        $(tagsInput).not(this).prop('checked', 'checked');
    });
}


// dropdown calculator
if ($(window).width() < 992) {
    $('.jc-cpt-inner .row').click(function () {
        $(this).toggleClass('active');
    });
}


// form validation
let formInput = document.querySelectorAll('.feedback input'),
    btnSubmit = document.querySelector('.feedback input.submit');


btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i=0; i<formInput.length; i++){
        if (formInput[i].value === '') {
            formInput[i].classList.add('error')
        } else {
            formInput[i].classList.remove('error')
        }
    }
});

for (let i=0; i<formInput.length; i++){
    formInput[i].addEventListener('focus', function () {
        this.classList.remove('error');
    })
}
