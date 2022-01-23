
let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = false;
let runnersAge = 18;

if (earlyRunner && runnersAge > 18) {
    raceNumber += 1000;
}

if (runnersAge > 18 && earlyRunner) {
    console.log(`Runner ${raceNumber} Race start time: 9.30am.`);
} else if (runnersAge > 18 && !earlyRunner) {
    console.log(`Runner ${raceNumber} Race start time: 11.00am.`);
} else if (runnersAge < 18) {
    console.log(`Runner ${raceNumber} Race start time: 12.30pm.`);
} else {
    console.log('Please see the registration desk');
}
