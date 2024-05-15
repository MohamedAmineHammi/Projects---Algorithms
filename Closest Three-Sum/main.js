function closestThreeSum(arr, target) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    let closestSum = Infinity;
    let result = [];
    
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        
        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];
            const currentDiff = Math.abs(target - currentSum);
            
            if (currentDiff < Math.abs(target - closestSum)) {
                closestSum = currentSum;
                result = [arr[i], arr[left], arr[right]];
            }
            
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return result; // Exact match found
            }
        }
    }
    
    return result;
}

// Test cases
console.log(closestThreeSum([1, 8, 5, 10, 2, 4, 3], 6)); // Expected output: [1, 2, 3]
console.log(closestThreeSum([1, 4, 6, 7], 3)); // Expected output: [1, 4, 6]
