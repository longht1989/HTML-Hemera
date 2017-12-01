/* ====================================
   Onload functions
   ==================================== */

$(function() {
    // affix site header
    var headerHeight = $('.site-header').height();
    $('.site-header').affix({
        offset: headerHeight
    })
    // go to top
    $("#go-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    // toggle header menu
    $('.site-header__menu .btn').click(function() {
        $(this).toggleClass('is-active');
        $(".menu__listing").slideToggle('fast');
        $(".menu__listing").toggleClass('m-show');
    });
    // index slider
    $('.slider').bxSlider({
        pager: 0,
        nextText: '',
        prevText: '',
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev'
    });
    // aminate fade in index section
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.foo');
    // hover action video featured
    var videosource = $(".area--video .story").attr('data-video');
    $(".area--video .story").hover(
        function() {
            var videosource = $(this).attr('data-video');
            $('.bg-video').replaceWith('<div class="bg-video"><video id="video_background" preload="auto" autoplay="true" loop="loop" muted="" volume="0"><source src="' + videosource + '.webm" type="video/webm" /><source src="' + videosource + '.ogv" type="ogg ogv" ; codecs="theora, vorbis" /><source src="' + videosource + '.mp4" type="video/mp4"></video></div>');
            $('.bg-mask').css("opacity", "0.5");
            $(".bg-video").css('opacity', 0).animate({ opacity: 1 }, 1000);
        },
        function() {
            $('.bg-video').replaceWith('<div class="bg-video"></div>');
            $('.bg-mask').css("opacity", "0.9");
        }
    );
});