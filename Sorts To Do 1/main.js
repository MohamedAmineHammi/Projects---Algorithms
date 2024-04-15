//Array: Insertion Sort
function insertionSort(arr) {
    const length = arr.length;
    
    for (let i = 1; i < length; i++) {
      const key = arr[i];
      let j = i - 1;
      
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      arr[j + 1] = key;
    }
  }
  
  const array = [5, 3, 8, 2, 1];
  insertionSort(array);
  console.log(array);

  //Array: Combine
  function combineArrs(arr1, arr2) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let k = arr1.length + arr2.length - 1;
  
    while (j >= 0) {
      if (i >= 0 && arr1[i] > arr2[j]) {
        arr1[k] = arr1[i];
        i--;
      } else {
        arr1[k] = arr2[j];
        j--;
      }
      k--;
    }
  }
  
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6];
  combineArrs(arr1, arr2);
  console.log(arr1);