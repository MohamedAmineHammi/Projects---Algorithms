//Quick Sort
function partitionArray(arr, start, end) {
    const pivot = arr[end];
    let i = start - 1;
    
    for (let j = start; j <= end - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
  }
  
  function quickSortArr(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
      const pivotIndex = partitionArray(arr, start, end);
      
      quickSortArr(arr, start, pivotIndex - 1);
      quickSortArr(arr, pivotIndex + 1, end);
    }
  }
  
  const array = [5, 1, 8, 4, 9, 2, 5, 3];
  quickSortArr(array);
  console.log(array); // Output: [1, 2, 3, 4, 5, 5, 8, 9]

  //Merge Sort
  function combineArrs(leftArr, rightArr) {
    const combinedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        combinedArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        combinedArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
    
    return combinedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
  }
  
  function mergeSortArr(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
    
    const sortedLeftArr = mergeSortArr(leftArr);
    const sortedRightArr = mergeSortArr(rightArr);
    
    return combineArrs(sortedLeftArr, sortedRightArr);
  }
  
  const array = [5, 1, 8, 4, 9, 2, 5, 3];
  const sortedArray = mergeSortArr(array);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 5, 8, 9]