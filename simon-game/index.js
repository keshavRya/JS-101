
var pallet = ["green", "red", "yellow", "blue"];


function randomNum(){
    return (Math.floor(Math.random()*4));
}


var start =0;

$(document).on("keydown", function(){
    if (start ===0) {
        start++;
        game();
    }
});



var user=[];
var pattern = [];


var level = 0;

function game(){

    
    user = [];
    
    level++;
    

    $("#level-title").text("Level " + level);

    var randomColor = pallet[randomNum()];
    pattern.push(randomColor);    

    setTimeout(function(){
        guide(randomColor);
    }, 500);
}


$(".bton").on("click", function(){
    if (start === 1){
        var userColor = $(this).attr("id");
        user.push(userColor);
        pressed(userColor);
        

        if (!checker(user, pattern)){
            gameOver();
        } else if (user.length === pattern.length) {

            setTimeout(function(){
                game();
            }, 1000);
        }
    }
});





function checker(user, pattern){
    for ( var i=0; i<user.length; i++){
        if (user[i] != pattern[i])
            return false;
    }

    return true;
}



function gameOver(){
    $("h1").html("Game Over!<br/>Press any key to restart")
    $("html, body").addClass("game-over");
    setTimeout(function(){
        $("html, body").removeClass("game-over");
    }, 100);
    var aud = new Audio("./sounds/wrong.mp3");
    aud.play();
    start=0;
    pattern=[];
    level=0;
}




function guide(color){
    
            $("#" + color).fadeToggle();
            setTimeout(function(){$("#" + color).fadeToggle();}, 1);
            var aud = new Audio("./sounds/" + color + ".mp3");
            aud.play();
       
     
}


function pressed(color){

    
    $("#" + color).addClass("pressed");
    setTimeout(function(){$("#" + color).removeClass("pressed");}, 50);
    var aud = new Audio("./sounds/" + color +".mp3");
    aud.play();
  
        
  
    
}


