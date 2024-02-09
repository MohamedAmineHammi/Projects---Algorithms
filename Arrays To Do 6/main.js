// 1- Array: Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }

  // 2- Min of Sorted-Rotated
  function findMin(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] > arr[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return arr[left];
  }

  // 3- String: Binary Search
  function stringBinarySearch(str, target) {
    let left = 0;
    let right = str.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const char = str[mid];
  
      if (char === target) {
        return true;
      } else if (char < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }