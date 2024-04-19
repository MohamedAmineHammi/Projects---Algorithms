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