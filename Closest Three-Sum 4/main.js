function closestThreeSum5s(arr, target) {
    if (arr === undefined || target === undefined) { return; }
    if (arr.length === undefined || arr.length < 3) { return; }

    // Sort the array first
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
            }
            
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // If the sum is exactly equal to the target, we found the closest sum
                return bestNums;
            }
        }
    }
    
    return bestNums;
}
