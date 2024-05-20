function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return quickSort(left).concat(middle, quickSort(right));
}

function closestThreeSum(arr, target) {
    if (arr === undefined || target === undefined) return;
    if (arr.length === undefined || arr.length < 3) return;

    let bestSum = Number.MAX_VALUE;
    let bestNums = [];
    arr = quickSort(arr);

    for (let idx1 = 0; idx1 < arr.length - 2; idx1++) {
        for (let idx2 = idx1 + 1; idx2 < arr.length - 1; idx2++) {
            let low = idx2 + 1;
            let high = arr.length - 1;

            while (low <= high) {
                let idx3 = Math.floor((low + high) / 2);
                let candidateSum = arr[idx1] + arr[idx2] + arr[idx3];
                let absDiff = Math.abs(candidateSum - target);

                if (absDiff < Math.abs(bestSum - target)) {
                    bestSum = candidateSum;
                    bestNums = [arr[idx1], arr[idx2], arr[idx3]];
                    if (absDiff === 0) return bestNums;
                }

                if (candidateSum < target) {
                    low = idx3 + 1;
                } else {
                    high = idx3 - 1;
                }
            }
        }
    }

    return bestNums;
}

// Example usage:
const arr = [1, 2, 4, 5, 6, 8, 10];
const target = 15;
console.log(closestThreeSum(arr, target)); // Outputs the closest three numbers to the target
