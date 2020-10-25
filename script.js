$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
    });
});

$(".revealOnScroll:not(.animated)").each(function () {
    var $this = $(this),
        offsetTop = $this.offset().top;

    if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
            window.setTimeout(function () {
                $this.addClass('animated ' + $this.data('animation'));
            }, parseInt($this.data('timeout'), 10));
        } else {
            $this.addClass('animated ' + $this.data('animation'));
        }
    }
});
// Hidden...
$(".revealOnScroll.animated").each(function (index) {
    var $this = $(this),
        offsetTop = $this.offset().top;
    if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
    }
});