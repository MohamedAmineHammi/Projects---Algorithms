// Interleave Arrays
function interleaveArrays(arr1, arr2) {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < arr1.length) {
        result.push(arr1[i]);
      }
      if (i < arr2.length) {
        result.push(arr2[i]);
      }
    }
  
    return result;
  }
  
  const array1 = [77, 22, 11, 22];
  const array2 = [2, 6, 7, 2, 6, 2];
  const interleavedArray = interleaveArrays(array1, array2);
  console.log(interleavedArray);

  //Merge Sorted Arrays
  function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
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
  
  const sortedArray1 = [1, 2, 2, 2, 7];
  const sortedArray2 = [2, 2, 6, 6, 7];
  const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
  console.log(mergedArray);