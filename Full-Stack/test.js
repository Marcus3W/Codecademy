// Write your function here:
const tipCalculator = (quality, total) => {
    switch (quality) {
        case 'bad':
            return total * 0.05;
            break;
        case 'ok':
            return total * 0.15;
            break;
        case 'good':
            return total * 0.20;
            break;
        case 'excellent':
            return total * 0.30;
            break;
        default:
            return total * 0.18;
            break;
    }
}



// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator , currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
}, 10);

console.log(newSum);

//

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
    return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
    return word.length > 5;
});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
    return word.length > 5;
} ));


//

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);





function isStringPerfectLength(string, minLength, maxLength) {
    const stringLength = string.length;

    if (stringLength > minLength) {
        return false;
    }
    else {
        return stringLength >= maxLength;
    }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));


// Write your code here:
function reverseArray(arr) {
    let count = 0;
    let newSentence = [];
    for(let i = arr.length-1; i >= 0; i--) {
        newSentence[count] = arr[i]
        count++;
    }
    return newSentence;
}
// When you're ready to test your code, uncomment the below and run:
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];

// Write your code here:
function greetAliens1(arr) {
    arr.forEach(string => {
        console.log(`Oh powerful ${string}, we humans offer our unconditional surrender!`);
    })
}

function greetAliens(arr) {
    for(let i = 0;i < arr.length; i++) {
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
    }
}
// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// Write your code here:
function convertToBaby(arr) {
    let newWord = [];
    for(let i = 0;i < arr.length; i++) {
        newWord[i] = 'baby ' + arr[i]
    }
    return newWord;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))


////


const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
    let results = [];
    // The 'outer' for loop - loops through each element in the array
    for (let j = 0; j < arr.length; j++) {
        number = arr[j];

        // The 'inner' while loop - searches for smallest power of 2 greater than the given number
        i = 1;
        while (i < number) {
            i = i * 2;
        }
        results.push(i);
    }
    return results
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
