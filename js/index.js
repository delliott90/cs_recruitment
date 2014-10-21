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

});