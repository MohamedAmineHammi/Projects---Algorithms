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