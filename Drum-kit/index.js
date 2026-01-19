var arr = document.querySelectorAll(".drum");

for (var i=0; i<arr.length; i++){
    arr[i].addEventListener("click", function(){
        playSound(this.textContent);
        addAnimation(this.textContent);
    });
}



document.addEventListener("keydown", function(event){
    playSound(event.key);
    addAnimation(event.key);
});




function addAnimation(key){

    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}



function playSound(key){
    switch(key){
            case "w": var aud = new Audio("./sounds/tom-1.mp3");
                      aud.play();
                      break;
            
            case "a": var aud = new Audio("./sounds/tom-2.mp3");
                      aud.play();
                      break;
            case "s": var aud = new Audio("./sounds/tom-3.mp3");
                      aud.play();
                      break;
            case "d": var aud = new Audio("./sounds/tom-4.mp3");
                      aud.play();
                      break;
            case "j": var aud = new Audio("./sounds/crash.mp3");
                      aud.play();
                      break;
            case "k": var aud = new Audio("./sounds/kick-bass.mp3");
                      aud.play();
                      break;
            case "l": var aud = new Audio("./sounds/snare.mp3");
                      aud.play();
                      break;

            default: 
            
        }

}