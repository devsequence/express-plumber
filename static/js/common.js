AOS.init({disable: 'mobile'});
$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
    $('.header').toggleClass('active');
});

$(".team-slider").slick({
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.team-nav-prev'),
    nextArrow: $('.team-nav-next'),
    responsive: [{
        breakpoint: 820,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 540,
        settings: {
            slidesToShow: 1,
        }
    }]
});
$(".work-slider").slick({
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.work-nav-prev'),
    nextArrow: $('.work-nav-next'),
    responsive: [{
        breakpoint: 820,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 540,
        settings: {
            slidesToShow: 1,
        }
    }]
});
$(".reviews-slider").slick({
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.reviews-nav-prev'),
    nextArrow: $('.reviews-nav-next'),
    rows: 0,
    responsive: [{
        breakpoint: 820,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        }
    }]
});
$('.numbers-item__number span').each(function (e) {
    var $this = $(this);
    var $thisPersent = $this.parent().data('progress');
    $this.css('background', ' conic-gradient( rgba(0, 159, 239, 1) '+$thisPersent+'%, rgba(0, 159, 239, .06) '+$thisPersent+'%)')
});
$('.price-table__btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.find('span').toggleClass('active');
    $this.prev().toggleClass('active');

});
$('.faq-item__title').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.next().slideToggle().parents('.faq-item').toggleClass('active');
    return false;
});

$('.header-logo a, .footer-logo a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

if($('.hero').length > 0){
    $(window).on('scroll', function() {
        var $this = $(this),
            $header = $('.header');
        if ($this.scrollTop() > 1) {
            $header.addClass('scroll-nav');
        }
        else{
            $header.removeClass('scroll-nav');
        }
    });
    $('.header-nav a, .footer-nav a').on('click', function (e) {
        e.preventDefault();
        var ths = $(this);
        var thsId = ths.data('id');
        var headerHeight = $('.header').height();
        if ($(ths).data('id')) {
            $('html, body').animate({
                scrollTop: $('#'+thsId).offset().top - 120
            }, 1000);
            $('.header, .header-btn').removeClass('active');
            return false;
        }else{
            $('.popup').addClass('active');
            ths.addClass('active');
        }
    });
}else{
    $('.header').addClass('page-header');
    $('.header-nav a, .footer-nav a').on('click', function (e) {
        var ths = $(this);
        if ($(ths).data('id')){}else{
            $('.popup').addClass('active');
            ths.addClass('active');
        }
    });
}
$(document).mouseup(function (e){
    var div = $('.popup');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('active');
        $('.header-nav a, .footer-nav a').removeClass('active');
    }
});
// var tbodyItems = $('.price-table tbody tr');
// tbodyItems.addClass('hidden');
// tbodyItems.each(function (index) {
//     // var tbodyItem = $('.gallery-link');
//     if(index < 8){
//         $(this).removeClass('hidden');
//         $('.price-table__btn').on('click', function (e) {
//             e.preventDefault();
//             tbodyItems.removeClass('hidden');
//         });
//     }else {
//         return false;
//     }
// });