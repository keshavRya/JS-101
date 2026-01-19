var num1= Math.floor((Math.random())*6) +1;
var num2= Math.floor((Math.random())*6) +1;



// setting first dice

if (num1===1){
    document.querySelector(".dice").lastElementChild.setAttribute("src", "./images/dice1.png");
}

else if (num1===2){
    document.querySelector(".dice").lastElementChild.setAttribute("src", "./images/dice2.png");
}

else if (num1===3){
    document.querySelector(".dice").lastElementChild.setAttribute("src", "./images/dice3.png");
}
else if (num1===4){
    document.querySelector(".dice").lastElementChild.setAttribute("src", "./images/dice4.png");
}
else if (num1===5){
    document.querySelector(".dice").lastElementChild.setAttribute("src", "./images/dice5.png");
}
else{
    document.querySelector(".dice").lastElementChild.setAttribute("src", "./images/dice6.png");
}



// setting second dice

if (num2===1){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "./images/dice1.png");
}

else if (num2===2){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "./images/dice2.png");
}

else if (num2===3){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "./images/dice3.png");
}
else if (num2===4){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "./images/dice4.png");
}
else if (num2===5){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "./images/dice5.png");
}
else{
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src", "./images/dice6.png");
}



// changing the header

if (num1===num2){
    document.querySelector("h1").textContent = "Draw!";
}

else if (num1 > num2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins";

}

else{
    document.querySelector("h1").textContent = "Player 2 wins 🚩";

}