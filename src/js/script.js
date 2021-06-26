$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
    });
});


$('div.catalog__buttons').on('click', 'button:not(.catalog__btn-active)',function(){
    $(this)
        .addClass('catalog__btn-active').siblings().removeClass('catalog__btn-active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active')
        .eq($(this).index()).addClass('catalog__content-active');
});


// //more btn
//
// $('.catalog__content-card-moreBtn').on('click', function (e) {
//     e.preventDefault();
//     $('.catalog__content-card-item').addClass('catalog__content-card-item-active');
//     $('.catalog__content-card-about').addClass('catalog__content-card-about-active')
// });

// //back btn
//
// $('.catalog__content-card-backBtn').on('click', function (e) {
//     e.preventDefault();
//     $('.catalog__content-card-item').removeClass('catalog__content-card-item-active');
//     $('.catalog__content-card-about').removeClass('catalog__content-card-about-active')
// });
//



//more btn

$('.catalog__content-card-moreBtn').each(function (i) {
    $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog__content-card-item').eq(i).addClass('catalog__content-card-item-active');
        $('.catalog__content-card-about').eq(i).addClass('catalog__content-card-about-active')
    })

});


//back btn

$('.catalog__content-card-backBtn').each(function (i) {
    $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog__content-card-item').eq(i).removeClass('catalog__content-card-item-active');
        $('.catalog__content-card-about').eq(i).removeClass('catalog__content-card-about-active')
    })

});


//up-btn

$(window).scroll(function () {
    if ($(this).scrollTop() > 500){
        $('.up-arrow').fadeIn();
    }else {
        $('.up-arrow').fadeOut();
    }
})


//overlay

$('.header__contact-button, .hero__content-button').on('click', function(){
    $('.overlay, .popup, .consultation').fadeIn('slow');
});



$('.popup__close').on('click', function () {
    $('.overlay, .popup, .consultation, .thanks, .buy-form').fadeOut('slow');

});



$('.consult__form-btn').on('click', function() {
    $('.overlay, .popup, .consultation').fadeIn('slow');
});



$('.catalog__content-card-footer-btn').each(function (i) {
    $(this).on('click', function () {
        $('.overlay, .popup, .buy-form').fadeIn('slow');

    })

})






































