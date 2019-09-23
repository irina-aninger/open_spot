// get Calc Table
document.addEventListener("DOMContentLoaded", getTable);

function getTable() {
    $(document).on('change', '.js-cpt-calculator input', function () {
        let $form = $('.js-cpt-calculator');
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize(),
            //contentType: $contentType,
            success: function (response) {
                $('.js-cpt-inner').html(response.table);
            },
            error: function (response) {
                let result;
                try {
                    let json = JSON.parse(response.responseText);
                    $.each(json, function (index, value) {
                        result = value;
                    });

                } catch (e) {
                    result = response.responseText;
                }

            }
        });
    });

    $('#sort').trigger('change')

}


// wow animation
new WOW().init();


// fix banner
let banner = document.querySelector('.header__banner'),
    header = document.querySelector('.header__navbar');

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= (banner.offsetHeight / 2)) {
        header.classList.add('fixed')
    }
    if (window.pageYOffset === 0) {
        header.classList.remove('fixed')
    }
});


// parallax
let elipse = document.querySelectorAll('.elipse__wrapper');

for (let i = 0; i < elipse.length; i++) {
    let parallaxInstance = new Parallax(elipse[i])
}


// accordion
let acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}


// table sort
let selectSort = $('.js-sort-selector'),
    inputSort  = $('#sort');


selectSort.click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')) {
        return false;
    } else {
        $(this).addClass('is-active');
        $(selectSort).not(this).removeClass('is-active');
        $(inputSort).val($(this).data("sort")).trigger('change');
        $(this).css('cursor', 'default');
    }
});


let tagsRadio = $('.tags__radio >input:checkbox'),
    tagAll = $('.tag-label');

const statusCheck = () => {
    if (tagsRadio.length === tagsRadio.filter(':checked').length) {
        $(tagAll).addClass('checked')
    } else {
        $(tagAll).removeClass('checked')
    }
};

statusCheck();

$('.tags__radio').change(statusCheck);

$('.tags__radio .check_all').click(function () {
    $(tagsRadio).not(this).prop('checked', 'checked');
});



// replace button text
let btn = $('#is-radio .btn');

btn.hover(function () {
    console.log(btn.html());
    if ($(this).html() === 'Разместить') {
        $(this).html('Начать')
    } else {
        $(this).html('Разместить')
    }
});


// tags pop-up
let toggle = $('.tags__toggle'),
    popUpTags = $('#tags_pop-up'),
    tagsWrap = $('.tags__wrapper');


toggle.click(function (el) {
    el.preventDefault();
    $(popUpTags).show();
    $('body').addClass('open__modal');

    let newInput = $(this).next('.tags__checkbox');

    tagsWrap.append(newInput);

    $('.ok').click(function () {
        $(popUpTags).hide();
        $('body').removeClass('open__modal');
        $(el.target).parents('.form__box').append(newInput);
    });
});


// dropdown calculator
if ($(window).width() < 992) {
    $('.js-cpt-inner .row').click(function () {
        $(this).toggleClass('active');
    });
}


// form validation
let formInput = document.querySelectorAll('.feedback input'),
    btnSubmit = document.querySelector('.feedback input.submit');


btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < formInput.length; i++) {
        if (formInput[i].value === '') {
            formInput[i].classList.add('error')
        } else {
            formInput[i].classList.remove('error')
        }
    }
});

for (let i = 0; i < formInput.length; i++) {
    formInput[i].addEventListener('focus', function () {
        this.classList.remove('error');
    })
}