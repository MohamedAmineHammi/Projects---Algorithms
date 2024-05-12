// Task 1: Surviving the Train
function trainSpeedAndDirection() {
    const minhSpeed = 10; // mph
    const brianSpeed = 10; // mph
    const minhTimeRatio = 2 / 3;
    const totalTime = 1; // hour, assuming they spent 1 hour in the tunnel

    const minhDistance = minhSpeed * totalTime * minhTimeRatio;
    const brianDistance = minhSpeed * totalTime * (1 - minhTimeRatio);

    const trainSpeed = (minhDistance + brianDistance) / totalTime;
    const trainDirection = minhDistance > brianDistance ? "north" : "south";

    return `The train speed is ${trainSpeed} mph and it entered the tunnel from the ${trainDirection} end.`;
}

console.log(trainSpeedAndDirection());

// Task 2: Racing the Balls
function doMarblesFinishTogether() {
    // Assuming the marbles start from rest and acceleration due to gravity is constant
    // and there is no friction or air resistance
    return "Yes, the marbles finish at the same time.";
}

console.log(doMarblesFinishTogether());

// Task 3: Crossing the River
function crossRiver() {
    return "Yes, you can get everything across. First, take the hen across, then go back alone, take the fox across, but bring the hen back. Next, leave the hen and take the corn across. Finally, return alone to get the hen.";
}

console.log(crossRiver());

// Task 4: Burning the String
function measure45Seconds() {
    // Burn both strings at the same time, and when the first string is completely burned,
    // start burning the second string. When the second string is half burned, 45 seconds have passed.
    return "Yes, you can measure 45.0 seconds by burning the strings.";
}

console.log(measure45Seconds());

// Task 5: Outfoxing the Fox
function canFionaCatchReggie() {
    return "Yes, Fiona can catch Reggie. Reggie's best strategy to survive is to run along the circumference of the circular pen at a constant speed.";
}

console.log(canFionaCatchReggie());

// Task 6: Swapping the Lockers
function countOpenLockers() {
    // Lockers are toggled open or closed depending on the number of their divisors.
    // Only perfect square numbers have an odd number of divisors, hence only they remain open.
    const totalLockers = 100;
    let openLockers = 0;

    for (let i = 1; i <= totalLockers; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            openLockers++;
        }
    }

    return `There are ${openLockers} lockers open, which are the perfect square numbered lockers.`;
}

console.log(countOpenLockers());

// Task 7: Combining the Numbers
function combineNumbers(numbers) {
    const operators = ['+', '-', '*', '/'];

    for (let op1 of operators) {
        for (let op2 of operators) {
            for (let op3 of operators) {
                // Try all possible combinations of operators
                const expression = `${numbers[0]} ${op1} ${numbers[1]} ${op2} ${numbers[2]} ${op3} ${numbers[3]}`;
                if (eval(expression) === numbers[4]) {
                    return `(${expression}) = ${numbers[4]}`;
                }
            }
        }
    }

    return "No combination of arithmetic operations yields the fifth number.";
}

console.log(combineNumbers([3, 10, 2, 40, 100]));
