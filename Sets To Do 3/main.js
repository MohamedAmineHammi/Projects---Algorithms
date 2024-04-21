// Union Sorted Arrays
function unionSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
        j++;
      }
    }
  
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  
  console.log(unionSortedArrays([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]));  // Output: [1, 2, 2, 2, 6, 6, 7]
  
  
  // Union Sorted Arrays (dedupe)
  function unionSortedArraysDedupe(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        if (result[result.length - 1] !== arr1[i]) {
          result.push(arr1[i]);
        }
        i++;
      } else if (arr1[i] > arr2[j]) {
        if (result[result.length - 1] !== arr2[j]) {
          result.push(arr2[j]);
        }
        j++;
      } else {
        if (result[result.length - 1] !== arr1[i]) {
          result.push(arr1[i]);
        }
        i++;
        j++;
      }
    }
  
    while (i < arr1.length) {
      if (result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    }
  
    while (j < arr2.length) {
      if (result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    }
  
    return result;
  }
  
  console.log(unionSortedArraysDedupe([1, 2, 2, 2, 7], [2, 6, 6, 7]));  // Output: [1, 2, 6, 7]
  
  
  // Intersection Unsorted Arrays (in-place)
  function intersectionUnsortedArraysInPlace(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr1[i] === arr2[j]) {
          arr1[i] = null;
          arr2[j] = null;
          break;
        }
      }
    }
  
    let index = 0;
    for (let i = 0; i < n; i++) {
      if (arr1[i] !== null) {
        arr1[index] = arr1[i];
        index++;
      }
    }
    arr1.length = index;
  
    return arr1;
  }
  
  const arr1 = [2, 7, 2, 1, 2];
  const arr2 = [6, 7, 2, 7, 6, 2];
  intersectionUnsortedArraysInPlace(arr1, arr2);
  console.log(arr1);  // Output: [7, 2, 2]
  
  
  // Intersection Unsorted Arrays
  function intersectionUnsortedArrays(arr1, arr2) {
    const countMap = new Map();
    const result = [];
  
    for (let num of arr1) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    for (let num of arr2) {
      if (countMap.get(num) > 0) {
        result.push(num);
        countMap.set(num, countMap.get(num) - 1);
      }
    }
  
    return result;
  }
  
  console.log(intersectionUnsortedArrays([6, 7, 2, 7, 6, 2], [2, 7, 2, 1, 2]));  // Output: [7, 2, 2]