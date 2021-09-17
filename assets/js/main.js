$(document).ready(function () {
    $(".intro").addClass("init");
    let introTimeout = 4000; //4000
    let startDelay = 2000; //2000
    let sliderDelay = 1000; //2000
    let fetch = setInterval(() => {
        if (document.readyState == "complete") {
            clearInterval(fetch);
            setTimeout(() => {
                $(".intro").addClass("ready");
                $("body").addClass("ready");
            }, introTimeout);
            setTimeout(() => {
                $(".intro").fadeOut(1000);
                $(".hero").addClass("init");

            }, introTimeout + startDelay);
            setTimeout(() => {
                $(".hero .hero-bg .bg").eq(0).addClass("active");
                initSlider();
            }, introTimeout + startDelay + sliderDelay);
        }
    }, 200);
    function initSlider() {
        let slides = $(".hero .hero-bg .bg").length;
        let i = 2;
        let sliderInterval = setInterval(() => {
            if (i == slides + 1) {
                i = 2;
                $(".hero .hero-bg .bg:gt(0)").removeClass("active");

            }
            i++;
            setTimeout(() => {
                $(".hero .hero-bg .bg:lt(" + (i - 1) + ")").addClass("active");
                $(".hero .hero-bg .bg:gt(" + (i - 2) + ")").removeClass("active");
            }, 100);
        }, 5000);
    }
    $(window).scroll(function (e) {
        let winTop = $(window).scrollTop();
        let co = ($(window).innerWidth() / $(window).innerHeight() < 0.8) ? 0.7 : 0.5
        $.each($(".yz-animate"), function () {
            if (winTop + $(window).innerHeight() * co > $(this).offset().top) {
                $(this).addClass("init");
            }
        });
        if ((winTop + $(window).innerHeight()) > $("body").innerHeight() - 100) {
            $("footer").addClass("init");
        }
    })
})