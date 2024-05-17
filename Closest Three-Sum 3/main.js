function closestThreeSum(arr, target) {
    if (!Array.isArray(arr) || arr.length < 3) {
        return;
    }

    arr.sort((a, b) => a - b);
    let bestSum = Number.MAX_VALUE;
    let bestNums = [];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            let diff = Math.abs(sum - target);

            if (diff < Math.abs(bestSum - target)) {
                bestSum = sum;
                bestNums = [arr[i], arr[left], arr[right]];

                if (diff === 0) {
                    return bestNums;
                }
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return bestNums;
}
