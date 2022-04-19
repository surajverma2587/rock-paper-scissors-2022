// declare the game object
const game = {
  inProgress: false,
  score: {
    wins: 0,
    losses: 0,
    ties: 0,
  },
  validChoices: ["R", "P", "S"],
  displayScore: function () {
    console.log(this.score);
  },
  startGame: function () {
    // present confirm
    const confirmChoice = confirm("Are you ready to play?");

    // if yes set inProgress to true
    if (confirmChoice) {
      this.inProgress = true;
    }

    // return confirm boolean
    return confirmChoice;
  },
  getUserChoice: function () {
    // prompt user for R, P or S
    const promptInput = prompt(
      "Please select one of the following: rock (R) | paper (P) | scissors (S)"
    );

    // validate if input is included in validChoices array
    const isValid = this.validChoices.includes(promptInput.toUpperCase());
    if (isValid) {
      return promptInput.toUpperCase();
    } else {
      // show alert
      alert("Please enter a valid value");
    }
  },
  getComputerChoice: function () {
    // get random index between 0 and 2
    const randomIndex = Math.floor(
      Math.random() * this.validChoices.length + 0
    );

    // return random choice
    return this.validChoices[randomIndex];
  },
  continueGame: function () {
    // present confirm
    const confirmChoice = confirm("Do you want to play again?");

    // if yes set inProgress to true
    if (!confirmChoice) {
      this.inProgress = false;
    }
  },
  getGameOutcome: (userChoice, computerChoice) => {
    // return string "wins" or "losses" or "ties"
    if (userChoice === "R" && computerChoice === "R") {
      return "ties";
    }

    if (userChoice === "R" && computerChoice === "P") {
      return "losses";
    }

    if (userChoice === "R" && computerChoice === "S") {
      return "wins";
    }

    if (userChoice === "P" && computerChoice === "R") {
      return "wins";
    }

    if (userChoice === "P" && computerChoice === "P") {
      return "ties";
    }

    if (userChoice === "P" && computerChoice === "S") {
      return "losses";
    }

    if (userChoice === "S" && computerChoice === "R") {
      return "losses";
    }

    if (userChoice === "S" && computerChoice === "P") {
      return "wins";
    }

    if (userChoice === "S" && computerChoice === "S") {
      return "ties";
    }
  },
  updateScore: function (gameOutcome) {
    this.score[gameOutcome] += 1;
  },
};

// MAIN APP
const confirmStartGame = game.startGame();

if (confirmStartGame) {
  // TODO: start loop here

  while (game.inProgress) {
    // get the user's choice
    const userChoice = game.getUserChoice();

    // if userChoice is valid
    if (userChoice) {
      // get computer choice
      const computerChoice = game.getComputerChoice();

      // get game outcome
      const gameOutcome = game.getGameOutcome(userChoice, computerChoice);

      // update score after game outcome
      game.updateScore(gameOutcome);

      // display score after update
      game.displayScore();

      // ask user if continue
      game.continueGame();
    }
  }

  console.log("YOUR FINAL SCORE");
  console.table(game.score);
} else {
  // display message
  console.log("Maybe try again!!");
}
