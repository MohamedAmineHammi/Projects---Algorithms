function closestThreeSum(arr, target) {
    if (!Array.isArray(arr) || typeof target !== 'number' || arr.length < 3) {
        return;
    }

    arr.sort((a, b) => a - b);  // Sort the array first
    let closestSum = arr[0] + arr[1] + arr[2];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let currentSum = arr[i] + arr[left] + arr[right];
            
            // If this is closer to the target than the previous closest, update closestSum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If the currentSum is exactly equal to the target, return it immediately
                return currentSum;
            }
        }
    }

    return closestSum;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, -1, -2, -3];
const target = 10;
console.log(closestThreeSum(arr, target));  // Output will be the closest sum to 10
