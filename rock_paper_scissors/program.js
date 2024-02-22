function getComputerChoice(){
 const choices = ["rock","paper","scissors"];
 const randomChoices = Math.floor(Math.random()*choices.length)

 return choices[randomChoices]
}

//console.log(getComputerChoice());

function playRound(playerselection,computerselection){
  if ((playerselection=== "rock" && computerselection==="paper") ||
     (playerselection==="paper" && computerselection === "scissors") ||
     (playerselection==="scissors" && computerselection==="rock")){
      return "you lose!"
  }
  else if(playerselection===computerselection){
      return"tie!"
  }
  else{
     return"you win!"
  }
}
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    
    console.log(result);
    
    
    if (result.startsWith('You win')) {
      playerScore++;
    } else if (result.startsWith('You lose')) {
      computerScore++;
    }
  }
  
  
  if (playerScore > computerScore) {
    console.log('You win the game! Final score: ' + playerScore + ' - ' + computerScore);
  } else if (playerScore < computerScore) {
    console.log('You lose the game! Final score: ' + playerScore + ' - ' + computerScore);
  } else {
    console.log('It\'s a tie! Final score: ' + playerScore + ' - ' + computerScore);
  }
}


playGame();
