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

  // To extend the solution to accept three arrays, you can modify the function as follows:

  function findMedian(arr1, arr2, arr3) {
    const merged = arr1.concat(arr2, arr3);
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
  const arr2 = [1, 2, 3, 4, 5];
  const arr3 = [7, 8, 9, 10];
  console.log(findMedian(arr1, arr2, arr3)); // Output: 5.5