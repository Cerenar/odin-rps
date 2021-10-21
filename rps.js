// You want to play a game of rock paper scissors
// You find a friend (computer) to play with
function playRound (playerWeaponChoice, computerWeaponChoice) {
  if (playerWeaponChoice === "rock") {
    if (computerWeaponChoice === "rock") {
      return "That was a tie! You both picked rock. Find a nice canyon to spend some time together in.";
    }
    else if (computerWeaponChoice === "paper") {
      return "You lose! Rocks are actually pretty claustrophobic...";
    }
    else {
      return "You win! Smash those scissors to bits!";
    }
  }
  else if (playerWeaponChoice === "paper") {
    if (computerWeaponChoice === "rock") {
      return "You win! Smother the life out of that pebble!";
    }
    else if (computerWeaponChoice === "paper") {
      return "That was a tie! You both picked paper. Find a nice manila folder to spend some time with your new friend in.";
    }
    else {
      return "You lose! I'm afraid you're getting cut to ribbons...";
    }
  }
  else {
    if (computerWeaponChoice === "rock") {
      return "You lose! Lmao you got rocked, kid.";
    }
    else if (computerWeaponChoice === "paper") {
      return "You win! Just think of all the pretty paper snowflakes you can make.";
    }
    else {
      return "That was a tie! You both picked scissors. Uhhhhh this might get a bit NSFW.";
    }
  }
}

function getPlayerWeapon() {
  while (true) {
    let playerWeaponChoice = prompt ("Rock, paper, or scissors?", "Rock");
    // Make sure they have a proper rock, even if they spell it rOcK
    playerWeaponChoice = playerWeaponChoice.toLowerCase();
    // Make sure they don't bring a gun to an arts and crafts fight; if they do, ask until they don't
    if (playerWeaponChoice !== "rock" && playerWeaponChoice !== "paper" && playerWeaponChoice !== "scissors") {
      alert ("You're not trying to cheat, are you? Use a weapon more fitting of a gentleman.");
      continue;
    }
    return playerWeaponChoice;
  }
}

let playAgain = true;

while (playAgain) {
// You pick rock, paper, or scissors - message player for input
let playerWeaponChoice = getPlayerWeapon();
// Your friend picks rock, paper, or scissors RANDOMLY - computer generates randomly
let weaponsChest = ["rock", "paper", "scissors"];
let computerWeaponChoice = weaponsChest[Math.floor(Math.random()*3)];
// After figuring out the result, you and your friend play a few more times
alert (playRound(playerWeaponChoice, computerWeaponChoice));
playAgain = confirm ("Would you like to play again?");
}

alert("See you next time!");