var clicks = document.querySelectorAll('[data-btn]');
var human;
var computer;
clicks.forEach(element => {
    function compCh(){
        var ran =  Math.floor(Math.random()*3)+1;
        if (ran == 1){
            computer = "paper";
        } else if(ran == 2){
            computer = "rock";
        } else {
            computer = "scissors";
        }
        console.log("human has " + human,"computer has " + computer);
       }
    function test() {
        human = element.id;
        compCh();
        if (human =="rock" && computer == "paper"){            
            resMsg.innerHTML = "Paper covers rock. Computer wins!"
            compScore.innerHTML ++;
        } else if (human =="rock" && computer == "scissors"){           
            resMsg.innerHTML = "Rock crushes Scissors. You win!"
            userScore.innerHTML ++;
        } else if (human =="rock" && computer == "rock"){
            resMsg.innerHTML = "Tie!";      
        } 
        //--------------------
        if (human =="paper" && computer == "scissors"){            
            compScore.innerHTML ++;
            resMsg.innerHTML = "Scissors cuts paper. Computer wins!"
        } else if (human =="paper" && computer == "rock"){            
            resMsg.innerHTML = "Paper covers rock. You win!"
            userScore.innerHTML ++;
        } else if (human =="paper" && computer == "paper"){
            resMsg.innerHTML = "Tie!";            
        }
        //------------------------
        if (human =="scissors" && computer == "rock"){
            resMsg.innerHTML = "Rock crushes scissors. Computer wins!";            
            compScore.innerHTML ++;
        } else if (human =="scissors" && computer == "paper"){           
            resMsg.innerHTML = "Scissors cuts paper. You win!";
            userScore.innerHTML ++;
        } else if (human =="scissors" && computer == "scissors"){
            resMsg.innerHTML = "Tie!";
        } 
    }
    
    element.addEventListener("click", test)
    
    
});
