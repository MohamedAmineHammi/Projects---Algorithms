function isChessMoveSafe(intendedMove, queenArr) {
    var [xCoord, yCoord] = intendedMove;
    for (var i = 0; i < queenArr.length; i++) {
        var [qX, qY] = queenArr[i];
        if (qX === xCoord || qY === yCoord || Math.abs(qX - xCoord) === Math.abs(qY - yCoord)) {
            return false;
        }
    }
    return true;
}

function queens(nQueensLeft, boardSize, results, queensSoFar) {
    if (results === undefined) { results = []; }
    if (queensSoFar === undefined) { queensSoFar = []; }

    if (nQueensLeft === 0) {
        results.push(queensSoFar);
        return results;
    }

    var currentRow = boardSize - nQueensLeft;
    for (var col = 0; col < boardSize; col++) {
        var newQueen = [currentRow, col];
        if (isChessMoveSafe(newQueen, queensSoFar)) {
            queens(nQueensLeft - 1, boardSize, results, queensSoFar.concat([newQueen]));
        }
    }

    return results;
}

// Usage example:
var boardSize = 8;
var solutions = queens(boardSize, boardSize);
console.log("Number of solutions:", solutions.length);
console.log("Solutions:", solutions);
