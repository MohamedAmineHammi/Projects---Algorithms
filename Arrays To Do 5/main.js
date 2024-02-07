// 1- Average (Warmup)
function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0; // Return 0 for an empty array
    }
  
    let totalSum = 0;
    for (let num of arr) {
      totalSum += num;
    }
  
    const average = totalSum / arr.length;
    return average;
  }

  // 2- Balance Point:
  function hasBalancePoint(arr) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      totalSum -= arr[i];
  
      if (leftSum === totalSum) {
        return true;
      }
  
      leftSum += arr[i];
    }
  
    return false;
  }

  // 3- Balance Index:
  function findBalanceIndex(arr) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      totalSum -= arr[i];
  
      if (leftSum === totalSum) {
        return i;
      }
  
      leftSum += arr[i];
    }
  
    return -1;
  }