// 1- Shuffle:
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // 2- Remove Range:
  function removeRange(arr, start, end) {
    arr.splice(start, end - start + 1);
    return arr;
  }

  // 3- Intermediate Sums:
  function addIntermediateSums(arr) {
    for (let i = 9; i < arr.length; i += 10) {
      let sum = arr.slice(i - 9, i + 1).reduce((acc, curr) => acc + curr, 0);
      arr.splice(i + 1, 0, sum);
    }
    return arr;
  }

  // 4- Double Trouble:
  function doubleTrouble(arr) {
    for (let i = 0; i < arr.length; i += 2) {
      arr.splice(i + 1, 0, arr[i]);
    }
    return arr;
  }

  // 5- Zip It:
  function zip(arr1, arr2) {
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