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
function playRound (playerWeaponChoice, computerWeaponChoice) {
  if (playerWeaponChoice === "rock") {
    if (computerWeaponChoice === "rock") {
      alert (`That was a tie! You both picked rock. Find a nice canyon to spend some time together in.
Results as of round ${ round }. Current score: ${ playerWinTotal } to ${ computerWinTotal }`);
			return;
    }
    else if (computerWeaponChoice === "paper") {
			computerWinTotal++;
      alert (`You lose! Rocks are actually pretty claustrophobic...
Results as of round ${ round }. Current score: ${ playerWinTotal } to ${ computerWinTotal }`);
			return computerWinTotal;
    }
    else {
			playerWinTotal++;
      alert (`You win! Smash those scissors to bits!
Results as of round ${ round }. Current score: ${ playerWinTotal } to ${ computerWinTotal }`);
			return playerWinTotal;
    }
  }
  else if (playerWeaponChoice === "paper") {
    if (computerWeaponChoice === "rock") {
			playerWinTotal++;
      alert (`You win! Smother the life out of that pebble!
Results as of round ${ round }. Current score: ${ playerWinTotal } to ${ computerWinTotal }`);
			return playerWinTotal;
    }
    else if (computerWeaponChoice === "paper") {
      alert (`That was a tie! You both picked paper. Find a nice manila folder to spend some time with your new friend in.
Results as of round ${ round }. Current score: ${ playerWinTotal } to ${ computerWinTotal }`);
			return;
    }
    else {
			computerWinTotal++;
      alert (`You lose! I'm afraid you're getting cut to ribbons...
Results as of round ${ round }. Current score: ${ playerWinTotal } to ${ computerWinTotal }`);
			return computerWinTotal;
    }
  }
  else {
    if (computerWeaponChoice === "rock") {
			computerWinTotal++;
      alert (`You lose! Lmao you got rocked, kid.
Results as of round ${ round }. Current score: ${ playerWinTotal } to ${ computerWinTotal }`);
			return computerWinTotal;
    }
    else if (computerWeaponChoice === "paper") {
			playerWinTotal++;
      alert(`You win! Just think of all the pretty paper snowflakes you can make.
Results as of round ${ round }. Current score: ${ playerWinTotal } to ${ computerWinTotal }`);
			return playerWinTotal;
    }
    else {
      alert (`That was a tie! You both picked scissors. Uhhhhh this might get a bit NSFW.
Results as of round ${ round }. Current score: ${ playerWinTotal } to ${ computerWinTotal }`);
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
function getPlayerWeapon() {
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
	return playerWeaponChoice;
}

let playerWinTotal = 0;
let computerWinTotal = 0;
let round = 1;

// Play five rounds
for (round; round <= 5; round++) {
	// Player picks rock, paper, or scissors
	let playerWeaponChoice = getPlayerWeapon();
	// Computer picks rock, paper, or scissors RANDOMLY
	let weaponsChest = ["rock", "paper", "scissors"];
	let computerWeaponChoice = weaponsChest[Math.floor(Math.random()*3)];
	// After figuring out the result, you and your friend play a few more times
	playRound(playerWeaponChoice, computerWeaponChoice);
}

if (playerWinTotal > computerWinTotal) {
	alert (`With a score of ${ playerWinTotal } to ${ computerWinTotal }, YOU WIN! Minstrels will write songs of praise to honor your glorious conquest.`)
} 
else if (playerWinTotal === computerWinTotal) {
	alert (`With a score of ${ playerWinTotal } to ${ computerWinTotal }, you tie. So close, too!`)
} 
else {
	alert (`With a score of ${ playerWinTotal } to ${ computerWinTotal }, YOU LOSE! YOU WERE SUPPOSED TO BE THE CHOSEN ONE!`)
}