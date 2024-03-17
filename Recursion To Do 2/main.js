// Recursive Fibonacci
function rFib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
  
    return rFib(num - 1) + rFib(num - 2);
  }
  
  console.log(rFib(2));    // Output: 1
  console.log(rFib(3));    // Output: 2
  console.log(rFib(4));    // Output: 3
  console.log(rFib(5));    // Output: 5
  console.log(rFib(3.65)); // Output: 2
  console.log(rFib(-2));   // Output: 0

  // Recursive "Tribonacci"
function rTrib(num) {
    if (num === 0 || num === 1) return 0;
    if (num === 2) return 1;
  
    return rTrib(num - 1) + rTrib(num - 2) + rTrib(num - 3);
  }
  
  console.log(rTrib(3)); // Output: 1
  console.log(rTrib(4)); // Output: 2
  console.log(rTrib(5)); // Output: 4
  console.log(rTrib(6)); // Output: 7

  // Zibonacci
function Zib(num) {
    if (num === 0 || num === 1) return 1;
    if (num === 2) return 2;
  
    if (num % 2 === 0) {
      const n = num / 2;
      return Zib(n) + Zib(n + 1) + 1;
    } else {
      const n = (num - 1) / 2;
      return Zib(n) + Zib(n - 1) + 1;
    }
  }
  
  console.log(Zib(10));  // Output: 21
  console.log(Zib(100)); // Output: 24382819596721629

  // Finding the largest index for a given Zibonacci result
function bestZibNum(result) {
    let index = 0;
    let currentResult = 1;
    let previousResult = 0;
  
    while (currentResult <= result) {
      if (currentResult === result) return index;
      
      const temp = currentResult;
      currentResult = currentResult + previousResult + 1;
      previousResult = temp;
      index++;
    }
  
    return null;
  }
  
  console.log(bestZibNum(3186)); // Output: 2467
  console.log(bestZibNum(3183)); // Output: null