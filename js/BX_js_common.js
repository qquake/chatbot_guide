var w_width = 0;
var w_height = 0;

// Elements Size Control
$(window).load(function() {
    $(window).resize(function() {
        w_height = $(window).height();
        w_width = $(window).width();
        ph = $('.page-head').height();
        $('.container').css('height', (w_height - ($('.page-head').height() + 3)) + "px"); //1 = border
        $('.secondP .container').css('height', (w_height - ($('.page-head').height() + 1)) + "px"); //1 = border
        $('.page-navigation').css('height', (w_height - ($('.sysLogo').height()) - ($('.user-info').height()) - ($('.favMenu').height())) + "px");
        $('.page-left').hasClass('leftOpen') ? $('.container').css('width', (w_width - ($('.page-left').width())) + "px") : $('.container').css('width', (w_width) + "px");
    });

    $(window).resize();

    // List table even row color
    $('.listTable table tbody tr:nth-child(2n)').addClass('even');

});

$(function() {
    // Page-left control
    $('.leftCon').click(function() {
        if ($('.page-left').hasClass('leftOpen')) {
            $('.page-left').animate({ left: -211 }, 300);
            $('.page-content,.page-head').animate({ 'padding-left': 0 }, 300);
            $('.page-left').removeClass('leftOpen');
            $('.container').animate({ width: w_width }, 300);
        } else {
            $('.page-left').animate({ left: 0 }, 300);
            $('.page-content,.page-head').animate({ 'padding-left': 211 }, 300);
            $('.page-left').addClass('leftOpen');
            $('.container').animate({ width: (w_width - ($('.page-left').width())) }, 300);
        }
    });

    // Search toggle
    $('.search-toggleBtn button').click(function() {
        $(this).parent('.search-toggleBtn').toggleClass('spread');
        $(this).parent('.search-toggleBtn').siblings('fieldset').find('.hiddenBlock').toggleClass('show');
    });

    // Widget toggle
    $('.widget-toggleBtn').click(function() {
        $(this).parent('.widget-header').toggleClass('fold');
        $(this).parent('.widget-header').siblings('.widget-content, .widget-footer').toggleClass('hiddenBlock');
    });

    // Checkbox check all
    $('.listTable thead th input[type="checkbox"]').click(function() {
        var chk = $(this).parents('.table').find('tbody td:first-child input[type="checkbox"]');
        this.checked ? chk.each(function() { this.checked = true; }) : chk.each(function() { this.checked = false; });
    });

    // File attach
    $('input[type="file"]').on('change', function() {
        $('input[type="file"').parents('.inline-data').find('input[type="text"]').val(this.value.split(/(\\|\/)/g).pop());
    });

});

// Date & Time
$(document).ready(
    /* realtime date & time */
    function realTime() {
        var now = new Date();
        var year = now.getFullYear();
        var mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
        var day = now.getDate() > 9 ? '' + now.getDate() : '0' + now.getDate();
        var h = now.getHours() > 9 ? '' + now.getHours() : '0' + now.getHours();
        var m = now.getMinutes() > 9 ? '' + now.getMinutes() : '0' + now.getMinutes();
        var s = now.getSeconds() > 9 ? '' + now.getSeconds() : '0' + now.getSeconds();

        // print
        var date = $('#nowDate');
        var clock = $('#nowTime');
        date.html(year + '.' + mon + '.' + day);
        clock.html(h + ':' + m + ':' + s);

        // update period(0.5s)
        setTimeout(function() { realTime() }, 500);
    }
);

$(document).ready(
    function() {
        /* Left Navigation */
        $('#leftNav [data-accordion]').accordion();
    }
);

// Tree toggle all
function toggleTree(em, id) {
    var tree = id;
    $(tree).toggleClass('openedAll');
    if ($(tree).hasClass('openedAll')) {
        $(tree).jstree('open_all');
        $(em).html('- All');
    } else {
        $(tree).jstree('close_all');
        $(em).html('+ All');
    };
}


//tab
$(window).load(function() {
    $(".tab_content").hide();
    $(".tab_content:first-child").show();
    $("ul.u_tab li").click(function() {
        $(this).parent().children().removeClass("selected");
        $(this).addClass("selected");

        var activeTab = $(this).attr("rel");
        $("#" + activeTab).parent().children(".tab_content").hide();
        $("#" + activeTab).show();
    });
});