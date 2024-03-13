
$(function () {
    $(window).scroll(function (e) {
        $('header').toggleClass("header-fixed", $(this).scrollTop() > ($(window).height()) / 100);
    });

    // Model Pop

    $('.model-open').on('click', function (e) {
        e.preventDefault();
        var model = $(this).attr('data-model');
        var overlay = $(this).attr('data-overlay');
        $(model).addClass('is-open');
        $(overlay).addClass('overlay_active');
        $("body").addClass("overfloy-hidden");
    });
    $('.close_model').on('click', function () {
        $("body").removeClass("overfloy-hidden");
        $(this).parents('.model').removeClass('is-open');
        $(".overlay").removeClass('overlay_active');
        $('.video_full iframe').attr('src', '');
    });
    $('.overlay').on('click', function () {
        $("body").removeClass("overfloy-hidden");
        $('.model').removeClass('is-open');
        $(this).removeClass('overlay_active');
    });
    $('.model-video').on('click', function () {
        $(".overlay").removeClass('overlay_active');
        var src = $(this).attr('data-video');
        $('.video_full iframe').attr('src', src);
    });

    //Form validation

    $('.form-control').each(function () {
        var label = $(this).siblings('label');
        var isEmpty = $(this).val() === '';
        label.toggleClass('valid', !isEmpty);
    });
    $('.form-control').on('change', function () {
        var label = $(this).siblings('label');
        var isEmpty = $(this).val() === '';
        label.toggleClass('valid', !isEmpty);
    });
    $('.form-group input,textarea').focus(function () {
        $(this).siblings('label').addClass('valid');
    });
    $('.form-group input,textarea').focusout(function () {
        var label = $(this).siblings('label');
        var isEmpty = $(this).val() === '';
        label.toggleClass('valid', !isEmpty);
    });
    if ($('.form-group input').val() == '') {
        $(this).siblings('label').removeClass('valid');
    }

    //tabs

    $('.tab-nav ul li').on('click', function () {
        var tab = $(this).addClass('active').siblings().removeClass('active').end().data('tab');
        $('.tab-nav-content .tabs[data-tab= ' + tab + ']').addClass('active').siblings().removeClass('active');
    });

    //

    $('.banner-tab ul li').click(function () {
        var tab = $(this).attr('data-tab');
        $('.banner-tab-content .tabs video').removeAttr('autoplay');
        $('.banner-tab-content .tabs video').removeAttr('loop');
        $(function () {
            var videoactive = $('.banner-tab-content .tabs[data-tab="' + tab + '"] video')[0];
            videoactive.setAttribute('autoplay', '');
            videoactive.setAttribute('loop', 'true');
            videoactive.play();
        })
    });

    $('.prd-cat ul li').hover(function () {
        var cat = $(this).attr('data-cat');
        $(this).addClass('active').siblings().removeClass('active');
        $('.prd-cat-wrap .prd-cat-content[data-cat="' + cat + '"]').addClass('active').siblings().removeClass('active');
    })

    //menu dropdown hamburger arrow click

    $(".menu_li").each(function () {
        var menu = $(this)
        $(menu).children(".menu_li_ttl").children('.arr').click(function () {
            $(menu).find('.side-sub-menu:first').slideToggle();
            $(menu).siblings().find('.side-sub-menu').slideUp()
        })
    })

    $('.plu-ico').click(function () {
        $(this).toggleClass('active');
        $(this).parents('.menu_li').siblings().find('.plu-ico').removeClass('active');
    })

    //menu dropdown hamburger title click

    $(".title-selectbox").click(function () {
        $(this).toggleClass('active').parent().siblings().find('.title-selectbox').removeClass('active');
        $(this).find('.arr').toggleClass('active');
        $(this).parent().siblings().find('.arr').removeClass('active');
        $(this).siblings('.title-selectbox-item:first').slideToggle();
        $(this).parent().siblings().find('.title-selectbox-item').slideUp();
    })

    //

    $(".minus").on("click", function () {
        const quantityInput = $(this).siblings("input");
        quantityInput[0].stepDown();
    });

    $(".plus").on("click", function () {
        const quantityInput = $(this).siblings("input");
        quantityInput[0].stepUp();
    });

    //

    $('.slide-top').click(function () {
        $('.slide-top-content').slideToggle();
        $(this).toggleClass('active');
    })

    $('.close-ico').click(function () {
        $('.slide-top-content').slideUp();
        $('.slide-top').removeClass('active');
    })

    //

    $('.sort-by>a').click(function () {
        $(this).siblings('.drpdwn-menu').toggleClass('active');
    })

    $('input[type="radio"]').click(function () {
        $('input[name="sortbyfilter"]').not(this).prop('checked', false);
    });

    //custom-select

    $('.custom-select').click(function (e) {
        $(this).toggleClass('open');
    })

    $('.custom-select .list li').click(function () {
        var livalue = $(this).attr("data-value");
        var litext = $(this).html();
        $(this).addClass('selected').siblings().removeClass('selected');
        $(this).parent('.list').siblings('span.current').children('em').html(litext);
        $('.blog-category').val(livalue);
    })

    $('body').on('click', function (e) {
        if (!$(e.target).closest('.custom-select,.sort-by').length) {
            $('.custom-select').removeClass('open');
            $('.sort-by .drpdwn-menu').removeClass('active');
        }
    });

    //

    $('.download-tab ul li').click(function () {
        $('body,html').animate({
            scrollTop: $('.download-secA').offset().top - 118 - 48
        }, 1000)
    })

    //

    $('.hide-filter-btn').click(function () {
        $('.product-wrap .flex').toggleClass('active');
    })
    if ($(window).width() <= 767) {
        function checkactive() {
            if (checkboxes.is(':checked')) {
                $('.clear-btn').show();
            } else {
                $('.clear-btn').hide();
            }
        }
        var checkboxes = $('.product-sec .colA input');
        $('.show-filter-btn').click(function () {
            $('.product-sec .colA').addClass('is-open');
            checkactive()
        })
        $('.apply-btn,.clear-btn,.cancel-btn').click(function () {
            $('.product-sec .colA').removeClass('is-open');
            $("body").removeClass("overfloy-hidden");
        })
        $('.clear-btn').click(function () {
            $('.product-sec .colA input').prop('checked', false);
        })
        checkboxes.on('change', function () {
            checkactive()
        })
    }

    //Owl carousels

    $('.products-search-slider').owlCarousel({
        autoplay: false,
        margin: 0,
        nav: false,
        loop: true,
        autoplayTimeout: 3000,
        smartSpeed: 1900,
        dots: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 10,
            },
            767: {
                items: 1.4,
                margin: 10,
            },
            991: {
                items: 2.4,
                margin: 10,
            },
            1025: {
                items: 4,
                margin: 10,
            },
        }
    });

    $('.gallery-slider').owlCarousel({
        items: 1,
        autoplay: false,
        margin: 0,
        nav: true,
        navText: ['<img src="assets/icon/prev.png" />', '<img src="assets/icon/next.png" />'],
        loop: true,
        autoplayTimeout: 3000,
        smartSpeed: 1900,
        dots: false,
    });

    $('.fm-product-slider').owlCarousel({
        autoplay: false,
        nav: true,
        navContainer: '.custom-nav',
        navText: ['<img src="assets/icon/prev.png" />', '<img src="assets/icon/next.png" />'],
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1.3,
                margin: 10,
                nav: false,
            },
            767: {
                items: 2,
                margin: 10,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            },
            991: {
                items: 3,
                margin: 10,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            }
        }
    });

    //client slider

    var slide_by;
    var owlSlidA = $('.client-slider');

    owlSlidA.owlCarousel({
        autoplay: false,
        nav: true,
        slideBy: slide_by,
        navContainer: '.custom-client-nav',
        navText: ['<img src="assets/icon/prev.png" />', '<img src="assets/icon/next.png" />'],
        loop: false,
        onInitialized: teammember,
        onChanged: teammember,
        responsive: {
            0: {
                items: 1.2,
                margin: 10,
                dots: false,
            },
            767: {
                items: 2,
                margin: 10,
                dots: true,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            },
            1025: {
                items: 3,
                margin: 10,
                dots: false,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            },
        }
    });

    function teammember(e) {
        slide_by = 3;
        var owlAItem = owlSlidA.find('.col');
        $('.custom-client-nav span em').html(e.relatedTarget.relative(e.item.index) * 2 + slide_by * 2);
        $('.custom-client-nav p em').html(e.item.count * 2);
        owlAItem.each(function (i) {
            $(this).attr('data-index', i + 1)
        })
    }

    //  

    $('.clients-lg-slider').owlCarousel({
        autoplay: false,
        nav: false,
        loop: false,
        autoplayTimeout: 3000,
        smartSpeed: 1900,
        dots: true,
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            767: {
                items: 3,
                margin: 10,
            },
            991: {
                items: 4,
                margin: 10,
            },
            1025: {
                items: 5,
                margin: 10,
            },
        }
    });

    $('.more-blogs-slider').owlCarousel({
        autoplay: false,
        margin: 0,
        navText: ['<img src="assets/icon/prev2.png" />', '<img src="assets/icon/next2.png" />'],
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1.2,
                margin: 10,
                nav: false,
            },
            767: {
                items: 2,
                margin: 10,
                nav: true,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            },
            991: {
                items: 3,
                margin: 15,
                nav: true,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            }
        }
    });

    $('.product-slider').owlCarousel({
        autoplay: false,
        margin: 0,
        navText: ['<img src="assets/icon/prev2.png" />', '<img src="assets/icon/next2.png" />'],
        loop: true,
        autoplayTimeout: 3000,
        smartSpeed: 1900,
        dots: false,
        dotsContainer: '.gallr-btn',
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1141: {
                items: 1.4,
                nav: true,
            }
        }
    });

    var productcarousel = $(".product-showcase-slider");
    productcarousel.owlCarousel({
        autoplay: false,
        margin: 0,
        navText: ['<img src="assets/icon/prev2.png" />', '<img src="assets/icon/next2.png" />'],
        loop: false,
        rewind: false,
        dots: false,
        onInitialized: checkClasses,
        onChanged: checkClasses,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1.3,
                nav: false,
                margin: 15,
                touchDrag: true,
                mouseDrag: true,
            },
            767: {
                items: 1.4,
                margin: 22,
                nav: true,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            },
            991: {
                margin: 38,
                items: 1.4,
                nav: true,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            },
            1141: {
                items: 1.4,
                margin: 60,
                nav: true,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            }
        }
    });

    function checkClasses() {
        $('.product-showcase-slider .owl-stage .owl-item.active').first().addClass('center');
        $('.product-showcase-slider .owl-stage .owl-item.active').last().addClass('next');
        $(function () {
            if ($('.product-showcase-slider .owl-item:first-child').is('.active')) {
                $('.product-showcase-slider .owl-nav .owl-prev').addClass('disabled').siblings().removeClass('disabled');
            }
            else {
                $('.product-showcase-slider .owl-nav .owl-prev').removeClass('disabled');
            }
        })
        $(function () {
            if ($('.product-showcase-slider .owl-item:last-child').is('.active')) {
                $('.product-showcase-slider .owl-nav .owl-next').addClass('disabled').siblings().removeClass('disabled');
            }
            else {
                $('.product-showcase-slider .owl-nav .owl-next').removeClass('disabled');
            }
        })
    }
    $('.product-showcase-slider .owl-nav button').click(function () {
        $('.product-showcase-slider .owl-stage .owl-item.active').first().addClass('center').siblings().removeClass('center');
        $('.product-showcase-slider .owl-stage .owl-item.active').last().addClass('next').siblings().removeClass('next');
    })

    $('.more-product-slider').owlCarousel({
        autoplay: false,
        margin: 0,
        nav: true,
        navText: ['<img src="assets/icon/prev2.png" />', '<img src="assets/icon/next2.png" />'],
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1.5,
                margin: 10,
                nav: false,
            },
            767: {
                items: 2,
                margin: 10,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            },
            991: {
                items: 3,
                margin: 10,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            },
            1025: {
                items: 4,
                margin: 40,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
            },
        }
    });

    var videocarousel = $('.video-gallery-slider');
    videocarousel.owlCarousel({
        autoplay: false,
        margin: 0,
        slideBy: 1,
        nav: false,
        loop: true,
        autoplayTimeout: 3000,
        smartSpeed: 1900,
        onInitialized: video_gallery,
        onChanged: video_gallery,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 10,
            },
            767: {
                items: 1.4,
                margin: 10,
            },
            991: {
                items: 1.6,
                margin: 10,
            },
            1025: {
                items: 1.6,
                margin: 40,
            },
        }
    });

    function video_gallery(e) {
        $('.video-gallery-slider .owl-stage .owl-item').eq(e.item.index).addClass('current').siblings().removeClass('current');
    }

    $('.about-slider').owlCarousel({
        items: 1,
        autoplay: false,
        margin: 15,
        nav: false,
        loop: false,
        stagePadding: 10,
        autoplayTimeout: 3000,
        smartSpeed: 1900,
        onInitialized: aboutfun,
        onChanged: aboutfun,
    });

    function aboutfun(e) {
        $('.abt-btn-carousel .owl-item').eq(e.item.index).addClass('current on').siblings().removeClass('current');
        $('.abt-btn-carousel .owl-item').eq(e.item.index).prevAll().addClass('on');
        $('.abt-btn-carousel .owl-item').eq(e.item.index).nextAll().removeClass('on');
    }

    $('.abt-btn-carousel').owlCarousel({
        items: 1,
        autoplay: false,
        navContainer: '.custom-abut-nav',
        navText: ['<img src="assets/icon/prev3.png" />', '<img src="assets/icon/next3.png" />'],
        dots: false,
        loop: false,
        autoplayTimeout: 3000,
        smartSpeed: 1900,
        responsive: {
            0: {
                items: 2,
            },
            767: {
                items: 6,
            },
            991: {
                items: 8,
            },
            1025: {
                items: 8,
            },
        }
    });

    $('.abt-btn-carousel .owl-item').eq(0).addClass('current');

    $('.abt-btn-carousel .owl-item').click(function (e) {
        $(this).addClass('on current').siblings().removeClass('current');
        $(this).prevAll().addClass('on');
        $(this).nextAll().removeClass('on');
        $('.about-slider').trigger('to.owl.carousel', [$(this).index(), 500]);
    })

    function handleNavClick(isNext) {
        var currentElement = $('.abt-btn-carousel .owl-item.current');
        var targetElement;

        if (isNext) {
            targetElement = currentElement.next().length > 0
                ? currentElement.next()
                : $('.abt-btn-carousel .owl-item:first-child');
        } else {
            targetElement = currentElement.prev().length > 0
                ? currentElement.prev()
                : $('.abt-btn-carousel .owl-item:last-child');
        }

        $('.abt-btn-carousel').trigger('to.owl.carousel', [targetElement.index(), 500]);
        targetElement.addClass("current").siblings().removeClass("current");
        $('.about-slider').trigger('to.owl.carousel', [targetElement.index(), 500]);
    }

    $('.custom-abut-nav .owl-next, .custom-abut-nav .owl-prev').click(function () {
        handleNavClick($(this).is('.owl-next'));
    });

    //

    $('.team-slider').owlCarousel({
        autoplay: false,
        margin: 0,
        nav: false,
        loop: true,
        responsive: {
            0: {
                items: 1.2,
                margin: 10,
                dots: false,
            },
            767: {
                items: 2,
                margin: 10,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
                dots: true,
            },
            991: {
                items: 3,
                margin: 10,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
                dots: true,
            },
            1025: {
                items: 4,
                margin: 30,
                autoplayTimeout: 3000,
                smartSpeed: 1900,
                dots: true,
            },
        }
    });

    //banner carousel

    $(window).on('resize load', function () {
        if ($(window).width() <= 767) {
            startCarousel();
            $('.mbl-crsl li').click(function () {
                $(this).addClass('active').parent('.owl-item').siblings().find('li[data-tab]').removeClass('active');
            })
        } else {
            stopCarousel();
        }
    });
    function startCarousel() {
        $('.mbl-crsl').addClass('owl-carousel');
        $('.mbl-crsl').owlCarousel({
            autoplay: false,
            loop: true,
            margin: 0,
            nav: true,
            navText: ["<img src='assets/icon/prev.png'>", "<img src='assets/icon/next.png'>"],
            dots: false,
            smartSpeed: 1300,
            items: 3,
        });
    }
    function stopCarousel() {
        var owl = $('.mbl-crsl');
        owl.removeClass('owl-carousel');
        owl.trigger('destroy.owl.carousel');
    }

})
