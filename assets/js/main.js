$(document).ready(function () {
    $(".intro").addClass("init");
    let introTimeout = 0;
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

            }, introTimeout + 2000);
        }
    }, 200);
    $(window).scroll(function (e) {
        let winTop = $(window).scrollTop();
        let co = ($(window).innerWidth() / $(window).innerHeight() < 0.8) ? 0.7 : 0.5
        $.each($(".yz-animate"), function () {
            if (winTop + $(window).innerHeight() * co > $(this).offset().top) {
                $(this).addClass("init");
            }
        });
        console.log((winTop + $(window).innerHeight()), $("body").innerHeight());

        if ((winTop + $(window).innerHeight()) > $("body").innerHeight() - 100) {
            $("footer").addClass("init");
        }
    })
})