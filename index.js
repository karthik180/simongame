var arrGame = [];
var arrPlayer =[];
var i=0;
var started = false;
var buttons = ["green" , "red" , "yellow" , "blue"];

$(document).keypress(function(){
    if (!started) {
        $("h1").text("Level " + i);
        startGame();
        started = true;
      }
 });

 $(document).click(function(){
  if (!started) {
      $("h1").text("Level " + i);
      startGame();
      started = true;
    }
});

 $("h1").click(function(){
  if (!started) {
      $("h1").text("Level " + i);
      startGame();
      started = true;
    }
});


$("button").on("click",function(){
    arrPlayer.push("."+ event.srcElement.className);
    playSound(event.srcElement.className);
    animatePress(event.srcElement.className);
    check(arrPlayer.length-1);
})  

function startGame(){
        arrPlayer=[];
        i++;
        $("h1").text("Level " + i);
        
        var n = Math.floor(Math.random()*4);
        $("."+buttons[n]).fadeIn(100).fadeOut(100).fadeIn(100);
        arrGame.push("."+buttons[n]);
        playSound(buttons[n]);
        
    
}
function check(len){
    if (arrGame[len] === arrPlayer[len])
    {
        if (arrPlayer.length === arrGame.length){
      
            setTimeout(function () {
                        startGame();
                      }, 1000);
            
                    }
            
    }
    else {
        playSound("wrong");

        //17. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        //18. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("h1").text("Game Over, Press Any Keyboard Key to Restart");

        //19. Call startOver() if the user gets the sequence wrong.
        startOver();

    }
 }
 function animatePress(currentColor) {

    //31. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("." + currentColor).addClass("pressed");
  
    //32. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("." + currentColor).removeClass("pressed");
    }, 100);
  }
  
  //33. Create a new function called playSound() that takes a single input parameter called name.
  function playSound(name) {
  
    //34. Take the code we used to play sound in the nextSequence() function and add it to playSound().
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  
  
  //35. Create a new function called startOver().
  function startOver() {
  
    //36. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    i = 0;
    arrGame = [];
    started = false;
  }

   


    

