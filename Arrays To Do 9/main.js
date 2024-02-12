// 1- Median of Sorted Arrays
function findMedian(arr1, arr2) {
    const merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    const midIndex = Math.floor(merged.length / 2);
    
    if (merged.length % 2 === 0) {
      return (merged[midIndex - 1] + merged[midIndex]) / 2;
    } else {
      return merged[midIndex];
    }
  }
  
  // Example usage:
  const arr1 = [1, 5, 9];
  const arr2 = [1, 2, 3, 4, 5, 6];
  console.log(findMedian(arr1, arr2)); // Output: 4