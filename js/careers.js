$( document ).ready(function() {

    const SCROLLAMOUNT = 2;
    const DOWNSCROLLOFFSETLIMIT = -200;
    const UPSCROLLOFFSETLIMIT = 0;
    var scrollDirectionDown = true;
    var lastScrollTop = $(window).scrollTop();


    var photoOffsetArray = [$(".careers-photo-01").offset().top, $(".careers-photo-02").offset().top, $(".careers-photo-03").offset().top];
    var scrollOffsetArray = [0, 0, 0];

    $(window).scroll(function() {
        scrollDirectionDown = ($(window).scrollTop() > lastScrollTop);


        photoScroll(".careers-photo-01", 0, 2);
        photoScroll(".careers-photo-02", 1, 4);
        photoScroll(".careers-photo-03", 2, 4);

        lastScrollTop = $(window).scrollTop();
    });

    var photoScroll = function(photoOffsetDOM, index, offsetModifier){
        if (($(window).scrollTop() > (photoOffsetArray[index] - photoOffsetArray[index]/offsetModifier)) && (scrollOffsetArray[index] > DOWNSCROLLOFFSETLIMIT) && scrollDirectionDown) {
            var scrollOffsetStyle = "0 " + (scrollOffsetArray[index]-=5) + "px";
            $(photoOffsetDOM).css('background-position', scrollOffsetStyle);

        } else if(($(window).scrollTop() < (photoOffsetArray[index] - photoOffsetArray[index]/offsetModifier)) && (scrollOffsetArray[index] < UPSCROLLOFFSETLIMIT) && !scrollDirectionDown) {
            var scrollOffsetStyle = "0 " + (scrollOffsetArray[index]+=5) + "px";
            $(photoOffsetDOM).css('background-position', scrollOffsetStyle);
        }

    }

});