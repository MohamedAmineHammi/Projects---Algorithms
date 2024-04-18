function findMedian(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    const length = arr.length;
    const midIndex = Math.floor(length / 2);
  
    // Check if the array length is odd
    if (length % 2 === 1) {
      return arr[midIndex];
    } else {
      // For even length, return the average of the middle two elements
      return (arr[midIndex - 1] + arr[midIndex]) / 2;
    }
  }