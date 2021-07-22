

let order = [];
let playerOrder = [];
let computerTurn;
let playerTurn;
let interval;
let flash;
let turn;
let win;
let good;
let on = false
let sound = true;

const redLefttop = document.querySelector("#redBox");
const blueRightTop = document.querySelector("#blueBox");
const greenLeftBottom = document.querySelector("#greenBox");
const yellowRightBottom = document.querySelector("#yellowBox");
const turnPlayer = document.querySelector(".counter");
const startButton = document.querySelector("#start");
const startOverButton = document.querySelector("#startOver");

let sound1 = document.getElementById("audio1");
let sound2 = document.getElementById("audio2");
let sound3 = document.getElementById("audio3");
let sound4 = document.getElementById("audio4");


startButton.addEventListener('click', (event)=>{
    
      on = true;
      if(on || win){
            turnPlayer.innerHTML = "0";
             play();
      }
          
});

function play(){
    flash = 0;
    turn = 1;
    interval = 0;
    order = [];
    playerOrder = [];
    good = true;
    turnPlayer.innerHTML = "1";
    for(var i = 0; i<20; i++)
    {
        order.push(Math.floor(Math.random()*4) +1);
    }
    computerTurn = true;

    interval = setInterval(gameTurn, 800);
}

function gameTurn(){

    on = false;
    if(flash == turn)  {
        clearInterval(interval);
        computerTurn = false;
        originalColor();
        on = true;
    }

    if(computerTurn){
        originalColor();
        setTimeout(()=>{
            if(order[flash] == 1) red();
            if(order[flash] == 2) blue();
            if(order[flash] == 3) green();
            if(order[flash] == 4) yellow();
            flash++;
        }, 200);
    }
}

function originalColor(){
    blueRightTop.style.background = "darkblue";
    greenLeftBottom.style.background = "green";
    yellowRightBottom.style.background = "#fcc419";
    redLefttop.style.background = "darkred";
}

function blue(){
    if(sound){
        sound1.play();
    }
    sound = true;
    blueRightTop.style.background = "blue";
}

function green(){
    if(sound){
        sound2.play();
    }
    sound = true;
    greenLeftBottom.style.background = "LimeGreen";
}

function yellow(){
    if(sound){
        sound3.play();
    }
    sound = true;
    yellowRightBottom.style.background = "yellow";
}

function red(){
    if(sound){
        sound4.play();
    }
    sound = true;
    redLefttop.style.background = "red";
}

redLefttop.addEventListener('click',(event)=>{
    
     if(on){
        playerOrder.push(1);
        check();
        red();
        if(!win){
        setTimeout(()=>{
            originalColor()
        },300);
    }
}
    
});

blueRightTop.addEventListener('click',(event)=>{

    if(on){
        playerOrder.push(2);
        check();
        blue();
        if(!win){
        setTimeout(()=>{
             originalColor()
        },300);
    }
    }
});


greenLeftBottom.addEventListener('click', (event)=>{

    if(on){
      playerOrder.push(3);
      check();
      green();
      if(!win){
      setTimeout(()=>{
         originalColor()
     },300);
    }
}  
});

yellowRightBottom.addEventListener('click', (event)=>{

    if(on){
        playerOrder.push(4);
        check();
        yellow();
        if(!win){
             setTimeout(()=>{
             originalColor()
        } ,300);
    }
    }
});

function check(){

    if(playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]){
        good = false;
    }

    if (playerOrder.length == 20 && good) {
        winGame();
    }

    if(good == false){
        turnPlayer.innerHTML = "wrong";
        on = false;
        setTimeout(()=>{
            playerTurn.innerHTML = turn;
            originalColor();
            play();
        },800);

        sound = false;
        clearColor();
        clearInterval(interval);
    }

    if(turn == playerOrder.length && good && !win){
        turn++;
        playerOrder = [];
        computerTurn = true;
        flash = 0;
        turnPlayer.innerHTML = turn;
        interval = setInterval(gameTurn, 800);
    }
}

startOverButton.addEventListener('click',(event)=>{
    turnPlayer.innerHTML = turn;
    computerTurn = true;
    flash = 0;
    on = true;
    playerOrder=[];
    good = true;
    interval = setInterval(gameTurn,800);
});

function winGame(){
    winColor();
    turnPlayer.innerHTML = "Win!!";
    on = false;
    win = true;
}

function flashColor(){
    blueRightTop.style.background = "blue";
    greenLeftBottom.style.background = "LimeGreen";
    yellowRightBottom.style.background = "yellow";
    redLefttop.style.background = "red";
}

function winColor(){
    
    for(i = 0; i<5; i++)
    {
        originalColor();
        setTimeout(flashColor,300);
    }
}

