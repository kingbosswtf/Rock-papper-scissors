

function getComputerChoice(min, max) {
    number = Math.floor(Math.random() * (max - min + 1) + min )
   
   if (number === 1) {
      
      return "rock"
      
   } else if (number === 2) {
      
      return "paper"
   } else if (number === 3) {
      
      return "scissors" 
   }
  
}

let humanScore = 0;
let compScore = 0;
let round = 1;

function playRound(playerSelection, computerSelection) {

   
   // your code here!
   if (playerSelection === computerSelection) {
      
      
      alert("ITS A TIE!" + " round:" + round);
      return "TIE!"+ humanScore + compScore;
   } else if(playerSelection === "rock" && computerSelection === "paper") {
      compScore += 1;
      round++;
       alert("Player:rock vs Comp:paper YOU LOSE! "+ humanScore +" Vs "+compScore +" round:"+ round);
      return "Player:rock vs Comp:paper YOU LOSE! "+ humanScore + compScore; 
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      humanScore += 1;
      round++;
      alert("Player:paper vs Comp:rock PLAYER WINS! " + humanScore + " Vs "+ compScore);
      return "Player:paper vs Comp:rock PLAYER WINS! "+ humanScore + compScore;
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      compScore += 1;
      round++;
      alert("Player:scissors vs Comp:rock YOU LOSE!" + humanScore + " Vs " + compScore + " round:"+ round);
      return "Player:scissors vs Comp:rock YOU LOSE!" + humanScore + compScore;
     
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      humanScore += 1;
      round++;
      alert("Player:rock vs Comp:scissors PLAYER WINS!"+ humanScore + " Vs " + compScore + " round:"+ round);
      return "Player:rock vs Comp:scissors PLAYER WINS! "+ humanScore + compScore;
   } else if (playerSelection === "scissors" && computerSelection === "paper") { 
      humanScore += 1;
      round++;
      alert("Player:scissors vs Comp:paper PLAYER WINS!"+ humanScore +" Vs "+compScore + " round:"+ round);

      return "Player:scissors vs Comp:paper PLAYER WINS! "+ humanScore +" Vs "+compScore;
      round++;
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      compScore += 1;
      round++;
      alert("Player:paper vs Comp:scissors YOU LOSE!"+ humanScore +" Vs "+compScore + " round:"+ round);
         
      return "Player:paper vs Comp:scissors YOU LOSE! " + humanScore + compScore;
   } else {
      console.log("Error");
      location.reload()
   }
   
}









function game() {
   
    for (let i = 0; i < 5; i++) {
      // your code here!
      const playerSelection = prompt("Rock paper or scissors").toLowerCase();
       const computerSelection = getComputerChoice(1, 3);
       if (playerSelection === computerSelection && round != 1) {
          i-- //to reset the round
          round--
       }

      if (humanScore === 3) {
         alert("HUMAN WINS!");
         console.log("HUMAN WINS!")
         i = 5
      } else if (compScore === 3) {
         alert("YOU LOOOOSE IDOIT!");
         console.log("YOU LOOOOSE IDOIT!");
         i = 5
      } else if (i === 4 && humanScore > compScore) {
         alert("YOU WIN!")
         console.log("YOU WIN!")
         i = 5
      } else if (i === 4 && humanScore < compScore) {
         alert("YOU LOSE!");
         console.log("YOU LOSE!")

         i = 5
      } else if (i === 4 && humanScore === compScore) {
         alert("TIE! hug it out.");
         console.log("TIE! hug it out.");
     } else {

        console.log(playRound(playerSelection, computerSelection));
      }
       
       
    }
   
  
   
}

game();

/* so when i enter a propmt it needs to say who one right after then add 1 to the persons score

it also has to advance to round 2

so how do i do that? idk at the moment but to save a score i need it to be a variable. Maybe i should look at a guide to functions?

I have an idea. instead of having prompt a var maybe just stuff it into the function. Doesnt work. How else can i ask for a prompt
*/




