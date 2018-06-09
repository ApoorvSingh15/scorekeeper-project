
function incrementPlayer(){
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    var reset = document.getElementById("reset");
    var input = document.querySelector("input");
    var increment1 = 0;
    var increment2 = 0;
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var playingTo = document.getElementById('x');
    player1.addEventListener("click", () => { 
       if( increment1 < input.value ){
            increment1++; 
            if( increment1 === input.value ){
                p1.classList.color = "green";
            }
        }
        
       p1.textContent = increment1;
    })
    player2.addEventListener("click", () => {
        if( increment2 < input.value ){
            increment2++;
        }
        if( increment2 === input.value ){
            p2.style.color = "green";
        }
        p2.textContent = increment2;
    })
    reset.addEventListener("click", () => { 
        p1.textContent = 0;
        p2.textContent = 0;
        playingTo.textContent = 'x';
    })
    input.addEventListener("blur", () => { 
        input.value;
        x.textContent = input.value;
    })
}

incrementPlayer();