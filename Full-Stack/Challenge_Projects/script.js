let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Invalid number entered - please try again')
    }
    const humanDiff = getAbsoluteDistance(targetGuess, humanGuess);
    const compDiff = getAbsoluteDistance(targetGuess, computerGuess);
    return humanDiff <= compDiff;
}

const updateScore = winner => {
    if(winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}
const advanceRound = () => currentRoundNumber++;


// Helper functions
const getAbsoluteDistance = (targetGuess, guess) => {
    return Math.abs(target - guess);
}

