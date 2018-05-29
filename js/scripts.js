$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});



$(document).ready(function(){
  $(".fOut").click(function(){
      $(".test").fadeIn();
  })
    $(".fIn").click(function(){
        $(".test").fadeOut()
    });;
});


$(document).ready(function(){
  $(".slideU").click(function(){
      $(".test1").slideUp();
  });
    $(".slideD").click(function(){
        $(".test1").slideDown()
    });
});

$(document).ready(function() {
  $(".white").click(function() {
    $("body").removeClass();
    $("body").removeClass();
    $("body").addClass("white-background");
  });

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
