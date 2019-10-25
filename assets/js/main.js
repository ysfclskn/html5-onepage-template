$(function () {
    $('.scroll-animate a').click(function (e) {
        var href = $(e.target).attr('href');
	
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000)
    });

    // var c, currentScrollTop = 0;
    // $(window).scroll(function () {
    //     var navbar = $('.navbar');
    //     var a = $(window).scrollTop();
    //     var b = navbar.height();

    //     currentScrollTop = a;

    //     if (c < currentScrollTop && a > b + b) {
    //         navbar.addClass("hidenav");
    //     } else if (c > currentScrollTop && !(a <= b)) {
    //         navbar.removeClass("hidenav");
    //     }
    //     c = currentScrollTop;
    // });

});
