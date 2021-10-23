/*	
Function: playRound
Goals: 		Compare the two choices that the player and computer picked for their weapon.
					Determine if the player wins, loses, or draws. Return that result as output.
Inputs: 	String containing the player's choice of rock, paper, scissors.
					String containing the computer's choice of rock, paper, scissors.
Outputs: 	Updated win totals for player and computer.
Steps:		Function receives player and computer weapon choices as input.
					Using the player's choice as the basis of comparison, begin comparing inputs.
					After determining the result of a round, alert the user of that result and
					the current total wins for player and computer.
					Return updated win totals as output.
*/
const container = document.querySelector("#container");
const scoreboard = document.createElement("scoreboard");
const resultMessage = document.createElement("div");
resultMessage.classList.add("resultMessage");

function playRound () {
	// Computer picks rock, paper, or scissors RANDOMLY
	let weaponsChest = ["rock", "paper", "scissors"];
	let computerWeaponChoice = weaponsChest[Math.floor(Math.random()*3)];

  if (this.id === "rock") {
    if (computerWeaponChoice === "rock") {
			
			return;
    }
    else if (computerWeaponChoice === "paper") {
			computerWinTotal++;
      
			return computerWinTotal;
    }
    else {
			playerWinTotal++;
      
			return playerWinTotal;
    }
  }
  else if (this.id === "paper") {
    if (computerWeaponChoice === "rock") {
			playerWinTotal++;
      
			return playerWinTotal;
    }
    else if (computerWeaponChoice === "paper") {
      
			return;
    }
    else {
			computerWinTotal++;
      
			return computerWinTotal;
    }
  }
  else {
    if (computerWeaponChoice === "rock") {
			computerWinTotal++;
      
			return computerWinTotal;
    }
    else if (computerWeaponChoice === "paper") {
			playerWinTotal++;
      
			return playerWinTotal;
    }
    else {
      
			return;
    }
  }
}

/*
Function: getPlayerWeapon
Goals: 		Determine the type of weapon the player wants to use.
Inputs:		No arguments passed to function.
					User input string at runtime for their weapon choice.
Outputs:	String containing user's weapon choice.
Steps:		Prompt the user for their weapon of choice. R, P, S?
					Standardize user input by making all responses lower case.
					Determine if a legal weapon has been chosen.
					If their weapon choice isn't legal, ask the user to try again.
					If it is legal, output their choice as a string.
*/
/*function getPlayerWeapon() {
  let playerWeaponChoice = "";
	let keepGoing = true;
	while (keepGoing) {
    playerWeaponChoice = prompt ("Rock, paper, or scissors?", "Rock");
    // Make sure they have a proper rock, even if they spell it rOcK
    playerWeaponChoice = playerWeaponChoice.toLowerCase();
    // Make sure they don't bring a gun to an arts and crafts fight; if they do, ask until they don't
    if (playerWeaponChoice !== "rock" && playerWeaponChoice !== "paper" && playerWeaponChoice !== "scissors") {
      alert ("You're not trying to cheat, are you? Use a weapon more fitting of a gentleman.");
			keepGoing = true;
    }
		// Oh hey, they picked a fair weapon!
		else {
			keepGoing = false;
		}
  }
	console.log(this.id);
}*/

let playerWinTotal = 0;
let computerWinTotal = 0;
let round = 1;

const buttons = document.querySelectorAll("button");
buttons.forEach (button => button.addEventListener("click", playRound));

/*if (playerWinTotal > 4) {
	alert (`With a score of ${ playerWinTotal } to ${ computerWinTotal }, YOU WIN! Minstrels will write songs of praise to honor your glorious conquest.`)
} 
else if (playerWinTotal === computerWinTotal) {
	alert (`With a score of ${ playerWinTotal } to ${ computerWinTotal }, you tie. So close, too!`)
} 
else {
	alert (`With a score of ${ playerWinTotal } to ${ computerWinTotal }, YOU LOSE! YOU WERE SUPPOSED TO BE THE CHOSEN ONE!`)
}*/