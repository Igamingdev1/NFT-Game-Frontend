(function ($) {
    "use strict";

    new WOW().init();

    /*---background image---*/
    function dataBackgroundImage() {
        $('[data-bgimg]').each(function () {
            var bgImgUrl = $(this).data('bgimg');
            $(this).css({
                'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
            });
        });
    }

    $(window).on('load', function () {
        dataBackgroundImage();
    });


    /*---stickey menu---*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

    // Slick Slider Activation
    setTimeout(() => {
        var $sliderActvation = $('.slick__activation');
        if ($sliderActvation.length > 0) {
            $sliderActvation.slick({
                prevArrow: '<button class="prev_arrow"><img src="assets/img/icon/navigation-arrow2.webp" alt=""></button>',
                nextArrow: '<button class="next_arrow"><img src="assets/img/icon/navigation-arrow1.webp" alt=""></button>',
            });
        };
    
        // Slick Slider Activation2
        var $sliderActvation = $('.slick__activation2');
        if ($sliderActvation.length > 0) {
            $sliderActvation.slick({
                prevArrow: '<button class="prev_arrow"><i class="icofont-long-arrow-left"></i></button>',
                nextArrow: '<button class="next_arrow"><i class="icofont-long-arrow-right"></i></button>',
            });
        };
    }, 1500);


    /*--- Magnific Popup Video---*/
    $('.video_popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    $('.popup_img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /*--- counterup activation ---*/
    $('.counterup').counterUp({
        delay: 20,
        time: 2000
    });

    // niceselect activation
    $(document).ready(function () {
        $('select,.select_option').niceSelect();
    });

    // Scroll to top
    scrollToTop();

    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({ scrollTop: 0 }, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();


    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function () {
        $('.offcanvas_menu_wrapper,.body_overlay').addClass('active')
    });

    $('.canvas_close,.body_overlay').on('click', function () {
        $('.offcanvas_menu_wrapper,.body_overlay').removeClass('active')
    });

    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="icofont-simple-down"></i></span>');

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
            $this.toggleClass('menu-open');
        }
    });



})(jQuery);


