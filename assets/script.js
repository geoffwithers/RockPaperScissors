var wins = 0;
var ties = 0;
var losses = 0;

//This is an array of options for the computer to pick from
var options = ["R", "P", "S"];

var playGame = function() {
    // Asks the user for their choice
    var userChoice = window.prompt("Enter R/P/S : ");
    // If the user presses Cancel, end the function
    if(!userChoice) {
        return;
    }
    // Convert to uppercase
    userChoice= userChoice.toUpperCase();

    // Get random index from array of options
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    // If choices are the same, it's a tie
    if (userChoice === computerChoice) {
        ties++;
        window.alert("You tied!");
    // Checking each win condition for the player
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You won!");
    // If these failed, we assume the player lost
    } else {
        losses++;
        window.alert("You lost!");
    }

    //Print stats with line breaks
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    // Ask user to play again
    var playAgain = window.confirm("Play again?");

    // If user hits OK, run the function again
    if (playAgain) {
        playGame();
    }

};

// Run the game for the first time
playGame();