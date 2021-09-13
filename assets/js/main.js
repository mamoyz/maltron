$(document).ready(function () {
    $(".intro").addClass("init");

    let fetch = setInterval(() => {
        if (document.readyState == "complete") {
            clearInterval(fetch);
            setTimeout(() => {
                $(".intro").addClass("ready");
                $("body").addClass("ready");
            }, 4000);
            setTimeout(() => {
                $(".intro").fadeOut(1000);
            }, 6000);
        }
    }, 200);
})