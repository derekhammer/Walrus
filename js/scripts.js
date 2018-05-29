$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});



$(document).ready(function(){
    $(".fIn").click(function(){
        $(".test").fadeOut()
    });
    $(".fOut").click(function(){
        $(".test").fadeIn();
    });
});


$(document).ready(function(){
    $(".slideD").click(function(){
        $(".test1").slideDown()
    });
    $(".slideU").click(function(){
        $(".test1").slideUp();
    });
});

$(document).ready(function() {

  $(".green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $("body").addClass("blueText");
  });

  $(".yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $("body").addClass("brownText");
  });

  $(".red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $("body").addClass("whiteText");
  });
});
