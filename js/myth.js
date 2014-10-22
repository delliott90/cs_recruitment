$( document ).ready(function() {

    const SCROLLAMOUNT = 2;
    const DOWNSCROLLOFFSETLIMIT = -200;
    const UPSCROLLOFFSETLIMIT = 0;
    var scrollDirectionDown = true;
    var lastScrollTop = $(window).scrollTop();


    var photoOffsetArray = [$(".myth-photo-01").offset().top, $(".myth-photo-02").offset().top, $(".myth-photo-03").offset().top, $(".myth-photo-04").offset().top, $(".myth-photo-05").offset().top, $(".myth-photo-06").offset().top, $(".myth-photo-07").offset().top, $(".myth-photo-08").offset().top, $(".myth-photo-09").offset().top, $(".myth-photo-10").offset().top];
    var scrollOffsetArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    $(window).scroll(function() {
        scrollDirectionDown = ($(window).scrollTop() > lastScrollTop);


        photoScroll(".myth-photo-01", 0, 2, -200);
        photoScroll(".myth-photo-02", 1, 4, -200);
        photoScroll(".myth-photo-03", 2, 4, -200);
        photoScroll(".myth-photo-04", 3, 6, -150);
        photoScroll(".myth-photo-05", 4, 8, -100);
        photoScroll(".myth-photo-06", 5, 10, -200);
        photoScroll(".myth-photo-07", 6, 12, -200);
        photoScroll(".myth-photo-08", 7, 14,  -200);
        photoScroll(".myth-photo-09", 8, 16, -200);
        photoScroll(".myth-photo-10", 9, 18, -200);

        lastScrollTop = $(window).scrollTop();
    });

    var photoScroll = function(photoOffsetDOM, index, offsetModifier, downscrollOffsetLimit){
        if (($(window).scrollTop() > (photoOffsetArray[index] - photoOffsetArray[index]/offsetModifier)) && (scrollOffsetArray[index] > downscrollOffsetLimit) && scrollDirectionDown) {
            var scrollOffsetStyle = "0 " + (scrollOffsetArray[index]-=5) + "px";
            $(photoOffsetDOM).css('background-position', scrollOffsetStyle);

        } else if(($(window).scrollTop() < (photoOffsetArray[index] - photoOffsetArray[index]/offsetModifier)) && (scrollOffsetArray[index] < UPSCROLLOFFSETLIMIT) && !scrollDirectionDown) {
            var scrollOffsetStyle = "0 " + (scrollOffsetArray[index]+=5) + "px";
            $(photoOffsetDOM).css('background-position', scrollOffsetStyle);
        }

    }

});