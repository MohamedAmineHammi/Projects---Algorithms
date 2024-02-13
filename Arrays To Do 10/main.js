// 1-Last Digit of A to the B:
function lastDigitAtoB(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result = (result * a) % 10;
    }
    return result;
  }
  
  // Example usage
  console.log(lastDigitAtoB(3, 4)); // Output: 1
  console.log(lastDigitAtoB(12, 5)); // Output: 2
  console.log(lastDigitAtoB(237, 124)); // Output: 1

  // 2-Matrix Search
  function matrixSearch(larger, smaller) {
    const smallerRows = smaller.length;
    const smallerCols = smaller[0].length;
  
    for (let i = 0; i <= larger.length - smallerRows; i++) {
      for (let j = 0; j <= larger[i].length - smallerCols; j++) {
        let found = true;
        for (let k = 0; k < smallerRows; k++) {
          for (let l = 0; l < smallerCols; l++) {
            if (larger[i + k][j + l] !== smaller[k][l]) {
              found = false;
              break;
            }
          }
          if (!found) {
            break;
          }
        }
        if (found) {
          return [i, j];
        }
      }
    }
  
    return [-1, -1];
  }
  
  // Example usage
  const larger = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  const smaller = [
    [6, 7],
    [10, 11]
  ];
  
  console.log(matrixSearch(larger, smaller)); // Output: [1, 1]