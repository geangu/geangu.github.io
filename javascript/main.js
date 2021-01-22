"use strict";
var herodetail = $('#detail-hero');
var testimonial = $('#detail-testimonial');
var heroimage = $('#image-hero');
var headhed = $('#headder-mainpage');
var ido = $('#ido-slide');
var slideoutMenu = $('.menunavigation');
var imagezoom = $('.img-popup-btn');
var popupImage = $(".popup-image");
var videoPopup = $(".video-popup");
var preload = $(".preloader");
var paralax = document.getElementsByClassName('paralax');
var Window = $(window);
herodetail.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoPlay: true,
    touchDrag: true,
    slideSpeed: 1000,
    dots: false,
    mouseDrag: false
});
testimonial.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoPlay: true,
    touchDrag: true,
    slideSpeed: 1000,
    dots: false,
    mouseDrag: true
});
heroimage.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoPlay: true,
    touchDrag: true,
    slideSpeed: 1000,
    dots: false,
    mouseDrag: false
});
ido.owlCarousel({
    loop: true,
    nav: false,
    autoPlay: true,
    touchDrag: true,
    slideSpeed: 1000,
    dots: false,
    mouseDrag: true,
    responsive: {
        0: {
            items: 1
        },
        680: {
            items: 2
        },
        960: {
            items: 4
        }
    }
});
herodetail.on('initialized.owl.carousel translate.owl.carousel', function (e) {
    var idx = e.item.index;
    $('.owl-item.bigfade').removeClass('bigfade');
    $('.owl-item.fadeup').removeClass('fadeup');
    $('.owl-item').eq(idx).addClass('bigfade');
    $('.owl-item').eq(idx - 1).addClass('fadeup');
    $('.owl-item').eq(idx + 1).addClass('fadeup');
});
// zoom magnificpopup init ------------------------
function magnific() {
    imagezoom.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    if (popupImage.length > 0) {
        popupImage.magnificPopup({
            type: 'image',
            fixedContentPos: true,
            gallery: { enabled: true },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }
    //Video Popup init
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
    //Video Popup
    if (videoPopup.length > 0) {
        videoPopup.magnificPopup({
            type: "iframe",
            removalDelay: 300,
            mainClass: "mfp-fade",
            overflowY: "hidden",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                },
                srcAction: 'iframe_src'
            }
        });
    }
};

$('.nav-next').click(function () {
    herodetail.trigger('next.owl.carousel');
    heroimage.trigger('next.owl.carousel');
});
$('.nav-prev').click(function () {
    herodetail.trigger('prev.owl.carousel', [300]);
    heroimage.trigger('prev.owl.carousel', [300]);
});
$('.wrap-togglemenu').on('click', function (e) {
    //$('.burger').addClass('open');
    $(this).toggleClass('menus');
    slideoutMenu.toggleClass("open");
    $('.overlayclose').toggleClass('fades');
});
$('.menunavigation nav ul li a').on('click', function (e) {
    //$('.burger').addClass('open');
    $('.wrap-togglemenu').removeClass('menus');
    slideoutMenu.toggleClass("open");
    $('.overlayclose').toggleClass('fades');
});
// portfolio filter init ----------------------
$(document).on('click', '.list', function () {
    var t = $(this).attr('data-fil')
    $(this).addClass('aktip').siblings().removeClass('aktip');
    $(".masonry-item").each(function (index) {
        $(".masonry-item").hide();
        if (t == '*') {
            $(".masonry-item").show();
        } else {
            $(".masonry-item[data-filter=" + t + "]").show();
        }
    });
});
Window.on('scroll', function () {
    if (Window.scrollTop() > 0) {
        headhed.addClass('fixis');
    } else {
        headhed.removeClass('fixis');
    }
});
// window on load
$(window).on('load', function () {
    setTimeout(function () {
        preload.fadeOut();
    }, 2000);
});
// documennt ready
$(document).ready(function () {
    magnific();

         //detect mobile device
         var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        //init simpleParallax if not on mobile device
        if (!isMobile.any()) {
    new simpleParallax(paralax, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });
}
});
