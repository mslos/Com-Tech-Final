$("#show-info").hide();

$("#play-video").click(function(){
    $(".video-overlay").hide();
    $("#show-info").show();
    $("button.play").click();
    console.log($(iframe).contents());
    $('#abc').load(function(){
      console.log("ha");
      console.log(('#abc').contents().find('button'));
      ('#abc').contents().find('button.play').click();
    });
});

$("#show-info").click(function(){
    $(".video-overlay").show();
    $("#show-info").hide();
});
