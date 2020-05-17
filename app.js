var playerone = document.querySelector("#img1");
var playertwo = document.querySelector("#img2");


startgame();

//to generate randon number from 0 to 2
//to change the score in text content



//send Two random number to switch case
//function to call it repeatedly
function startgame(){

    var randomnumone = Math.floor(Math.random() * 6);
    var randomnumtwo = Math.floor(Math.random() * 6);

    var score1 = document.querySelector("#scoreone");
    var score2 = document.querySelector("#scoretwo");

    switch(randomnumone) {
        case 0:
            playerone.setAttribute("src", "img/r.png" );
            score1.textContent = "ROCK";
            break;
        case 1:
            playerone.setAttribute("src", "img/p.png" );
            score1.textContent = "PAPER";
            break;
        case 2:
            playerone.setAttribute("src", "img/s.png" );
            score1.textContent = "SISSOR";
            break;
        case 3:
            playerone.setAttribute("src", "img/r.png" );
            score1.textContent = "ROCK";
            break;
        case 4:
            playerone.setAttribute("src", "img/p.png" );
            score1.textContent = "PAPER";
            break;
        case 5:
            playerone.setAttribute("src", "img/s.png" );
            score1.textContent = "SISSOR";
            break;
      }
    
      switch(randomnumtwo) {
        case 0:
            playertwo.setAttribute("src", "img/r.png" );
            score2.textContent = "ROCK";
            break;
        case 1:
            playertwo.setAttribute("src", "img/p.png" );
            score2.textContent = "PAPER";
            break;
        case 2:
            playertwo.setAttribute("src", "img/s.png" );
            score2.textContent = "SISSOR";
            break;
        case 3:
            playertwo.setAttribute("src", "img/r.png" );
            score2.textContent = "ROCK";
            break;
        case 4:
            playertwo.setAttribute("src", "img/p.png" );
            score2.textContent = "PAPER";
            break;
        case 5:
            playertwo.setAttribute("src", "img/s.png" );
            score2.textContent = "SISSOR";
            break;
      }

  //adding score in players list

  

}



//set the reset button to it

var btn = document.querySelector("button");

//reset modee to the button

btn.addEventListener("click", function(){
   startgame();
});
