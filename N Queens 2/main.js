function isChessMoveSafe1(position, queensSoFar) {
    for (let [r, c] of queensSoFar) {
        // Check column and diagonal conflicts
        if (c === position[1] || Math.abs(r - position[0]) === Math.abs(c - position[1])) {
            return false;
        }
    }
    return true;
}

function queens2(nQueensLeft, results = [], queensSoFar = [], row = 0) {
    if (nQueensLeft === 0) {
        results.push(queensSoFar);
        return;
    }

    for (let r = row; r < 8; r++) {
        for (let col = 0; col < 8; col++) {
            if (isChessMoveSafe1([r, col], queensSoFar)) {
                queens2(nQueensLeft - 1, results, queensSoFar.concat([[r, col]]), r + 1);
            }
        }
    }
    return results;
}

// Example usage:
const solutions = queens2(5);
console.log(solutions.length); // Number of solutions for 5 queens
console.log(solutions);        // Solutions for 5 queens
