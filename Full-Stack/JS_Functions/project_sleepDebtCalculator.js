const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    }
    else if (day === 'tuesday') {
        return 8;
    }
    else if (day === 'wednesday') {
        return 8;
    }
    else if (day === 'thursday') {
        return 8;
    }
    else if (day === 'friday') {
        return 8;
    }
    else if (day === 'saturday') {
        return 8;
    }
    else if (day === 'sunday') {
        return 8;
    }
    else {
        return 0;
    }
}

const getActualSleepHours = () => {
    let sleepHours = 0;
    sleepHours += getSleepHours('monday');
    sleepHours += getSleepHours('tuesday');
    sleepHours += getSleepHours('wednesday');
    sleepHours += getSleepHours('thursday');
    sleepHours += getSleepHours('friday');
    sleepHours += getSleepHours('saturday');
    sleepHours += getSleepHours('sunday');
    return sleepHours;
}

const getIdealSleepHours = () => {
    let idealHours = 7.5;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours)
            + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log('more sleep - great job!')
    }
    else {
        console.log('SLEEP MORE!')
    }
}
calculateSleepDebt();
