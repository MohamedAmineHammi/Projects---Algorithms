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
