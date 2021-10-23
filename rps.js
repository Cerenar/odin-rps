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
function playRound () {
	// Computer picks rock, paper, or scissors RANDOMLY
	let weaponsChest = ["rock", "paper", "scissors"];
	let computerWeaponChoice = weaponsChest[Math.floor(Math.random()*3)];

  if (this.id === "rock") {
    if (computerWeaponChoice === "rock") {

    }
    else if (computerWeaponChoice === "paper") {
			computerWinTotal++;
			computerScore.textContent = computerWinTotal;
    }
    else {
			playerWinTotal++;
      playerScore.textContent = playerWinTotal;
    }
  }
  else if (this.id === "paper") {
    if (computerWeaponChoice === "rock") {
			playerWinTotal++;
      playerScore.textContent = playerWinTotal;
    }
    else if (computerWeaponChoice === "paper") {
      
    }
    else {
			computerWinTotal++;
      computerScore.textContent = computerWinTotal;
    }
  }
  else {
    if (computerWeaponChoice === "rock") {
			computerWinTotal++;
      computerScore.textContent = computerWinTotal;
    }
    else if (computerWeaponChoice === "paper") {
			playerWinTotal++;
      playerScore.textContent = playerWinTotal;
    }
    else {

    }
  }
	if (playerWinTotal > 4) {
		alert (`With a score of ${ playerWinTotal } to ${ computerWinTotal }, YOU WIN! Minstrels will write songs of praise to honor your glorious conquest.`)
	}
	if (computerWinTotal > 4) {
		alert (`With a score of ${ playerWinTotal } to ${ computerWinTotal }, YOU LOSE! YOU WERE SUPPOSED TO BE THE CHOSEN ONE!`)
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

function game() {

}

let playerWinTotal = 0;
let computerWinTotal = 0;
let keepGoing = true;

const container = document.querySelector("#container");
const scoreboard = document.createElement("div");
scoreboard.classList.add("scoreboard");
const player = document.createElement("div");
player.classList.add("combatant");
const computer = document.createElement("div");
computer.classList.add("combatant");
const resultMessage = document.createElement("div");
resultMessage.classList.add("resultMessage");

const playerName = document.createElement("div");
const playerScore = document.createElement("div");
const computerName = document.createElement("div");
const computerScore = document.createElement("div");
player.appendChild(playerName);
player.appendChild(playerScore);
computer.appendChild(computerName);
computer.appendChild(computerScore);
playerName.textContent = "YOU";
computerName.textContent = "CPU";
playerScore.textContent = playerWinTotal;
computerScore.textContent = computerWinTotal;
scoreboard.appendChild(player);
scoreboard.appendChild(computer);
container.appendChild(scoreboard);

const buttons = document.querySelectorAll("button");
buttons.forEach (button => button.addEventListener("click", playRound));