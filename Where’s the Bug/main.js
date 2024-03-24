// corrected Code

function rFib(num) {
    if (num <= 1) {
        return num;
    }
    return rFib(num - 1) + rFib(num - 2);
}

function rListLength(node) {
    if (!node) {
        return 0;
    } else {
        return 1 + rListLength(node.next);
    }
}

function rSigma(num) {
    if (num === 0) {
        return 0;
    }
    return num + rSigma(num - 1);
}

function rFactorial(num) {
    if (num === 0) {
        return 1;
    }
    return rFactorial(num - 1) * num;
}

