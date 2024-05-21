function quickSort(arr) {
    if (arr.length <= 1) { return arr; }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) { left.push(arr[i]); }
        else { right.push(arr[i]); }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

function closestThreeSum8q(arr, target) {
    if (arr === undefined || target === undefined) { return; }
    if (arr.length === undefined || arr.length < 3) { return; }
    let bestSum = Number.MAX_VALUE;
    let bestNums = [];
    arr = quickSort(arr);  // Sorting the array
    for (let idx1 = 0; idx1 < arr.length - 2; idx1++) {
        let idx2 = idx1 + 1;
        let idx3 = arr.length - 1;
        while (idx2 < idx3) {
            let candidateSum = arr[idx1] + arr[idx2] + arr[idx3];
            let absDiff = Math.abs(candidateSum - target);
            if (absDiff < bestSum) {
                bestNums = [arr[idx1], arr[idx2], arr[idx3]];
                bestSum = absDiff;
                if (absDiff === 0) { return bestNums; }
            }
            if (candidateSum < target) { idx2++; }
            else { idx3--; }
        }
    }
    return bestNums;
}

// Example usage:
let arr = [1, 2, 4, 5, 12, 19, 25];
let target = 24;
console.log(closestThreeSum8q(arr, target));  // Output will be the triplet closest to 24
