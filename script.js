
function incrementPlayer(){
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var reset = document.getElementById("reset");
    var input = document.querySelector("input");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var playingTo = document.getElementById('x');
    var increment1 = 0;
    var increment2 = 0;
    var gameOver = false;
    var winningScore = 5;


    player1.addEventListener("click", () => { 
       if(!gameOver){
            increment1++; 
        } if( increment1 == input.value ){
            p1.style.color = "red";
            gameOver = true;
        }
       p1.textContent = increment1;
    })
    player2.addEventListener("click", () => {
        if( !gameOver ){
            increment2++;
        } if( increment2 == input.value ){
            p2.style.color = "red";
            gameOver = true;
        }
       
        p2.textContent = increment2;
        
    })
    reset.addEventListener("click", () => { 
        p1.textContent = 0;
        p2.textContent = 0;
        increment1 = 0;
        increment2 = 0;
        playingTo.textContent = 5;
        winningScore = 5;
        gameOver = false;
        p1.style.color = "black";
        p2.style.color = "black";
    })
    input.addEventListener("change", () => { 
        input.value;
        x.textContent = input.value;
        winningScore = Number(input.value);
    })
}

incrementPlayer();