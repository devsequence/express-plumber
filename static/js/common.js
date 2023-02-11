$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
    $('body').toggleClass('scroll');
    $('.header').toggleClass('active');
});
$('.header-bottom li').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active').find('ul').slideToggle();
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

