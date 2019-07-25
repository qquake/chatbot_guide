/* chatbot.js v1.0 | 2019.07.02 | UX/UI, HyunHyun Lee */


$(document).ready(function() {
    // check pc/mobile
    var filter = "win16|win32|win64|mac|macintel";

    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
        $('#wrap').addClass('mobile');
    } else {
        $('#wrap').addClass('pc');
    }

    // initialize carousel
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        CSSWidthAndHeight: true,
        slidesOffsetBefore: 47,
        slidesOffsetAfter: 47,
        spaceBetween: 7,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // initialize carousel (only)
    var swiper = new Swiper('.carousel_only .swiper-container', {
        slidesPerView: 'auto',
        CSSWidthAndHeight: true,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
        spaceBetween: 7,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // initialize footer quick reply carousel
    var swiper = new Swiper('.quick_reply.swiper-container', {
        slidesPerView: 'auto',
        CSSWidthAndHeight: true,
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
        spaceBetween: 7,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // popup close
    $(".popup .btn_back").click(function() {
        $(this).parents('.popup').css('display', 'none');
        $("body").css({
            overflow: 'auto'
        }).unbind('touchmove');
    });
});

// toggle mode between chatbot/customer service
$(".btn_customerService").click(function() {
    $('.header_chatbot').addClass('mode_customerService');
    $('.header_chatbot h1').text('UX 상담원');
});
$(".btn_chatbot").click(function() {
    $('.header_chatbot').removeClass('mode_customerService');
    $('.header_chatbot h1').text('UX봇');
});

// check whether footer input text has value
$('.footer_frame input').on('input', function(e) {
    if (!$(this).val()) {
        $('.footer_frame').removeClass('on');
    } else {
        $('.footer_frame').addClass('on');
    }
});

// clear footer input text
$(".footer_frame .btn_clear").click(function() {
    $('.footer_frame input').val('');
    $('.footer_frame').removeClass('on');
});

// rate - emoticon toggle select
$(".rate_emoticon .btn_icon").click(function() {
    $(".rate_emoticon .btn_icon").removeClass('on');
    $(this).addClass('on');
});

// rate - star select
$(".rate_star .btn_icon").click(function() {
    $(".rate_star .btn_icon").removeClass('on');
    $(this).prevAll().addClass('on');
    $(this).addClass('on');
});

// initialize datepicker
$(function() {
    $("#datepicker").datepicker({
        showMonthAfterYear: true,
        monthNames: ['01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
    });
});