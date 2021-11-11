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
    if(playerSelection === computerSelection) {
        const game = document.querySelector('#game');
        const div = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.textContent = `Tie!`;
        p2.textContent = `Playerscore: ${playerScore} vs. ComputerScore ${computerScore}`;
        div.appendChild(p1);
        div.appendChild(p2);
        game.appendChild(div);

    } else if(bool) {
        playerScore++;
        const score = document.getElementById(`_${playerScore}`);
        score.classList.add('winPlayer');
        if (playerScore >= 5) {
            gameEnd();
        } else {
            const game = document.querySelector('#game');
            const div = document.createElement('div');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            p1.textContent = `You Win! ${capFrst(playerSelection)} beats ${capFrst(computerSelection)}!`;
            p2.textContent = `Playerscore: ${playerScore} vs. ComputerScore ${computerScore}`;
            div.appendChild(p1);
            div.appendChild(p2);
            game.appendChild(div);
        }
    } else {
        computerScore++;
        const score = document.getElementById(`${computerScore}_`);
        score.classList.add('winComputer');
        if (computerScore >= 5) {
            gameEnd();
        } else {
            const game = document.querySelector('#game');
            const div = document.createElement('div');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            p1.textContent = `You Lose! ${capFrst(computerSelection)} beats ${capFrst(playerSelection)}!`;
            p2.textContent = `Playerscore: ${playerScore} vs. ComputerScore ${computerScore}`;
            div.appendChild(p1);
            div.appendChild(p2);
            game.appendChild(div);
        }
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
    if (playerSelection === "rock" ) {
        switch(hands.indexOf(computerSelection)) {
            case hands.indexOf("paper"):
                return result(playerSelection, computerSelection, false);
            case hands.indexOf("scissors"):
                return result(playerSelection, computerSelection, true);
            default:
                return result(playerSelection, computerSelection, true);                        
        }
    }
    else if (playerSelection === "paper" ) {
        switch(hands.indexOf(computerSelection)) {
            case hands.indexOf("rock"):
                return result(playerSelection, computerSelection, true);   
            case hands.indexOf("scissors"):
                return result(playerSelection, computerSelection, false);
            default:
                return result(playerSelection, computerSelection, true);                      
        }
    }
    else if (playerSelection === "scissors" ) {
        switch(hands.indexOf(computerSelection)) {
            case hands.indexOf("paper"):
                return result(playerSelection, computerSelection, true);    
            case hands.indexOf("rock"):
                return result(playerSelection, computerSelection, false);
            default:
                return result(playerSelection, computerSelection, true);                      
        }
    }
} 
function addSelectionText(playerSelection, computerSelection) {
    const divP = document.querySelector('#player');
    const content1 = document.createElement('p');
    content1.textContent = `Player: ${capFrst(playerSelection)}`;
    divP.appendChild(content1);

    const divC = document.querySelector('#computer');
    const content2 = document.createElement('p');
    content2.textContent = `Computer: ${capFrst(computerSelection)}`;
    divC.appendChild(content2);
}

function gameEnd() {
    if (computerScore > playerScore) {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const div = document.createElement('div');
        const container = document.querySelector('#game');
        p1.textContent = `You have lost.......`; 
        p2.textContent = `Final Score- Player: ${playerScore} vs. Computer:${computerScore}`;
        div.appendChild(p1);
        div.appendChild(p2);
        container.appendChild(div);
        removeChild("#game");
        removeClasses("playerScore", "winPlayer")
        removeClasses("computerScore", "winComputer")
        playerScore = 0;
        computerScore = 0;
    } else {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const div = document.createElement('div');
        const container = document.querySelector('#game');
        p1.textContent = "You have won!";
        p2.textContent = `Final Score- Player: ${playerScore} vs. Computer:${computerScore}`; 
        div.appendChild(p1);
        div.appendChild(p2);
        container.appendChild(div);
        removeChild("#game");
        removeClasses("playerScore", "winPlayer")
        removeClasses("computerScore", "winComputer")
        playerScore = 0;
        computerScore = 0;
    }
}

function game(e) {
            playerSelection = e.target.id;
            computerSelection = computerPlay();
            addSelectionText(playerSelection, computerSelection);
            addImages(e.target.id, "playerImage");
            addImages(computerSelection, "cpuImage");    
            playRound(playerSelection, computerSelection);
            removeChild("#game");
            removeChild("#player");
            removeChild("#computer");
            removeChild(".playerImage");
            removeChild(".cpuImage");
}

function removeChild(divId) {
    const div = document.querySelector(divId);
    while(div.childElementCount > 1) {
        div.removeChild(div.firstChild);
    }
}

function addImages(choice, location) {
    const img = document.createElement('img');
    const div = document.createElement('div');
    if(choice=== "rock") {
        img.src = "images/rock.png";
    } else if(choice === "paper") {
        img.src = "images/paper.png";
    } else {
        img.src = "images/scissors.png";
    }
    const images = document.querySelector(`.${location}`);
    images.appendChild(img);
}
function removeClasses(score, person) {
    const element = document.getElementById(`${score}`);
    var boxes = element.children;
    var arr = [...boxes];
    arr.forEach((box) =>{box.classList.remove(`${person}`)});
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click',game));