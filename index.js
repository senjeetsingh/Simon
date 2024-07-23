var level = 0;
var gamePattern = [];
var buttonColours = ["red", "green", "blue", "yellow"];
function nextSequence(){
    level++;
    $("h1").text("Level-"+level);
    var index = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[index];
    gamePattern.push(randomChosenColour);
    var element = "#"+randomChosenColour;
    $(element).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
$(document).keydown(function(){
    if(level == 0){
        nextSequence();
    }
})
var i = 0;
$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    if(i == level)
    {
        playSound("wrong");
        level = 0;
        i = 0;
        $("h1").text("Press A Key to Start");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        gamePattern = [];
    }
    else if(gamePattern[i] == userChosenColour)
    {
        playSound(userChosenColour);
        $("."+userChosenColour).addClass("pressed");
        setTimeout(function(){
            $("."+userChosenColour).removeClass("pressed");
        },100);
        i++;
        if(i == level)
        {
            i = 0;
            nextSequence();
        }
    }
    else{
        playSound("wrong");
        level = 0;
        i = 0;
        $("h1").text("Press A Key to Start");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        gamePattern = [];
    }
    // userClickedPattern.push(userChosenColour);
})