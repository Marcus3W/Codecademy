const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Invalid entry')
    }
}

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return 'rock';
    }
    else if ( choice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}

/*
TESTS
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
*/

function playGame() {
    let userChoice = getUserChoice('bomb');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}
playGame();