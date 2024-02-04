function moveLowestToFront(arr) {
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
  
    if (minIndex === 0) {
      return arr;
    }
  
    const result = new Array(arr.length);
    result[0] = arr[minIndex];
  
    for (let i = 0; i < minIndex; i++) {
      result[i + 1] = arr[i];
    }
  
    for (let i = minIndex + 1; i < arr.length; i++) {
      result[i] = arr[i];
    }
  
    return result;
  }

  const arr = [4, 2, 1, 3, 5];
const result = moveLowestToFront(arr);
console.log(result); 
// Output: [1, 4, 2, 3, 5]