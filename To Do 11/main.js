function isChessMoveSafe(intendedMove, queenArr) {
    const { x, y } = intendedMove;
    for (let queen of queenArr) {
        const { x: qx, y: qy } = queen;
        if (qx === x || qy === y || Math.abs(qx - x) === Math.abs(qy - y)) {
            return false;
        }
    }
    return true;
}


function nQueens(numQns, xSize, ySize) {
    const solutions = [];

    function solve(row, queens) {
        if (queens.length === numQns) {
            solutions.push([...queens]);
            return;
        }
        if (row >= ySize) {
            return;
        }

        for (let col = 0; col < xSize; col++) {
            const move = { x: col, y: row };
            if (isChessMoveSafe(move, queens)) {
                queens.push(move);
                solve(row + 1, queens);
                queens.pop();
            }
        }
    }

    solve(0, []);
    return solutions;
}

// Helper function for 8-Queens specifically
function eightQueens() {
    return nQueens(8, 8, 8);
}

// Example usage:
const result = eightQueens();
console.log(result);
