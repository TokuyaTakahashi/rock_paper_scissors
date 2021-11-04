const hands = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return hands[Math.floor((Math.random() * hands.length))]; 
}

function capFrst(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function result(playerSelection, computerSelection, bool) {
    if(bool) {
        playerScore++;
        console.log(`Score: Playerscore: ${playerScore} vs. ComputerScore ${computerScore}`);
        return `You Win! ${capFrst(playerSelection)} beats ${capFrst(computerSelection)}!`;
    } else {
        computerScore++;
        console.log(`Score: Playerscore: ${playerScore} vs. ComputerScore ${computerScore}`);
        return `You Lose! ${capFrst(computerSelection)} beats ${capFrst(playerSelection)}!`;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
    if (playerSelection === "rock" ) {
        switch(hands.indexOf(computerSelection)) {
            case hands.indexOf("paper"):
                return result(playerSelection, computerSelection, true);
            case hands.indexOf("scissors"):
                return result(playerSelection, computerSelection, false);
            default:
                return "Tie";                        
        }
    }
    else if (playerSelection === "paper" ) {
        switch(hands.indexOf(computerSelection)) {
            case hands.indexOf("rock"):
                return result(playerSelection, computerSelection, true);   
            case hands.indexOf("scissors"):
                return result(playerSelection, computerSelection, false);
            default:
                return "Tie";                        
        }
    }
    else if (playerSelection === "scissors" ) {
        switch(hands.indexOf(computerSelection)) {
            case hands.indexOf("paper"):
                return result(playerSelection, computerSelection, true);    
            case hands.indexOf("rock"):
                return result(playerSelection, computerSelection, false);
            default:
                return "Tie";                        
        }
    }
} 

function game() {
    for(var i = 0; i <= 5; i++) {
        let playerSelection = prompt("Enter your hand in rock-paper-scissors");
        let computerSelection = computerPlay();
        console.log(`Player: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if(computerScore === playerScore) {
        console.log(`Its a Tie!\nFinal Score- Computer:${computerScore} vs. Player: ${playerScore}`);
    }
    else if(computerScore > playerScore) {
        console.log(`You have lost.......\nFinal Score- Computer:${computerScore} vs. Player: ${playerScore}`);
    } else {
        console.log(`You have won!\nFinal Score- Computer:${computerScore} vs. Player: ${playerScore}`);
    }

}
console.log(game());