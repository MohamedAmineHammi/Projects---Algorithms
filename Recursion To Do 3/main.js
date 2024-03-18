// Recursive Binary Search:
function rBinarySearch(arr, value, start = 0, end = arr.length - 1) {
    if (start > end) {
      return false;
    }
    
    const mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === value) {
      return true;
    } else if (arr[mid] > value) {
      return rBinarySearch(arr, value, start, mid - 1);
    } else {
      return rBinarySearch(arr, value, mid + 1, end);
    }
  }
  
  console.log(rBinarySearch([1, 3, 5, 6], 4));   // false
  console.log(rBinarySearch([4, 5, 6, 8, 12], 5));   // true

  //Greatest Common Factor (GCF):
  function rGCF(num1, num2) {
    if (num1 === num2) {
      return num1;
    } else if (num1 > num2) {
      return rGCF(num1 - num2, num2);
    } else {
      return rGCF(num1, num2 - num1);
    }
  }
  
  console.log(rGCF(123456, 987654));   // 6