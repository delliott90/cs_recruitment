$( document ).ready(function() {

    $("#careerLink").mouseover(function(){
        $("#careerBox").addClass("homepage-purple-border-rollover");
        $("#careerBox").removeClass("homepage-purple-border");
        $("#careerBack").addClass("purple-back-rollover");
    });
    $("#careerLink").mouseout(function(){
        $("#careerBox").removeClass("homepage-purple-border-rollover");
        $("#careerBox").addClass("homepage-purple-border");
        $("#careerBack").removeClass("purple-back-rollover");
    });

    $("#coopLink").mouseover(function(){
        $("#coopBox").addClass("homepage-orange-border-rollover");
        $("#coopBox").removeClass("homepage-orange-border");
        $("#coopBack").addClass("orange-back-rollover");
    });
    $("#coopLink").mouseout(function(){
        $("#coopBox").removeClass("homepage-orange-border-rollover");
        $("#coopBox").addClass("homepage-orange-border");
        $("#coopBack").removeClass("orange-back-rollover");
    });

    $("#mythLink").mouseover(function(){
        $("#mythBox").addClass("homepage-green-border-rollover");
        $("#mythBox").removeClass("homepage-green-border");
        $("#mythBack").addClass("green-back-rollover");
    });
    $("#mythLink").mouseout(function(){
        $("#mythBox").removeClass("homepage-green-border-rollover");
        $("#mythBox").addClass("homepage-green-border");
        $("#mythBack").removeClass("green-back-rollover");
    });

    $("#nextStepsLink").mouseover(function(){
        $("#nextStepsBox").addClass("homepage-red-border-rollover");
        $("#nextStepsBox").removeClass("homepage-red-border");
        $("#nextStepsBack").addClass("red-back-rollover");
    });
    $("#nextStepsLink").mouseout(function(){
        $("#nextStepsBox").removeClass("homepage-red-border-rollover");
        $("#nextStepsBox").addClass("homepage-red-border");
        $("#nextStepsBack").removeClass("red-back-rollover");
    });

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