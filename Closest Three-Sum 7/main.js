function closestThreeSum(nums, target) {
  // First, sort the array to enable the two-pointer technique
  nums.sort((a, b) => a - b);

  let closestSum = Number.POSITIVE_INFINITY;
  let minDiff = Number.POSITIVE_INFINITY;

  // Iterate through each number in the array
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    // Use the two-pointer technique to find the best pair
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      const currentDiff = Math.abs(currentSum - target);

      // Update the closest sum and minimum difference if necessary
      if (currentDiff < minDiff) {
        closestSum = currentSum;
        minDiff = currentDiff;
      }

      // Adjust the pointers based on how the current sum compares to the target
      if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      } else {
        // If the current sum is exactly equal to the target, we can return it immediately
        return currentSum;
      }
    }
  }

  return closestSum;
}

// Example usage
const nums = [1.2, -1.3, 3.5, 2.1, -4.6, 5.8, 0.7, 1.9];
const target = 7;
console.log(closestThreeSum(nums, target)); // Output will be the sum closest to 7
