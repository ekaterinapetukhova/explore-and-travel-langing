$(function () {

    $('.header-slider').slick({
        arrows: false,
        dots: true,
        vertical: true,
        dotsClass: 'header-dots',
        autoplay: 200,

    });


    $('.menu__btn').on('click', function () {
        $('.menu__list-items').slideToggle();

    })

});