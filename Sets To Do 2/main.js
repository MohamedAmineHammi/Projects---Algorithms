// Intersect Sorted Arrays
function intersectSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return result;
  }
  
  const arr1 = [1, 2, 2, 2, 7];
  const arr2 = [2, 2, 6, 6, 7];
  const intersection = intersectSortedArrays(arr1, arr2);
  console.log(intersection); // Output: [2, 2, 7]
  
  
  // Intersect Sorted Arrays (dedupe)
  function intersectSortedArraysDedupe(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        if (result.length === 0 || arr1[i] !== result[result.length - 1]) {
          result.push(arr1[i]);
        }
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return result;
  }
  
  const arr1Dedupe = [1, 2, 2, 2, 7];
  const arr2Dedupe = [2, 2, 6, 6, 7];
  const intersectionDedupe = intersectSortedArraysDedupe(arr1Dedupe, arr2Dedupe);
  console.log(intersectionDedupe); // Output: [2, 7]