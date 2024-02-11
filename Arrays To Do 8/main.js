// Smarter Sum
function iSigma(num) {
    if (num <= 0) return 0;
    return (num * (num + 1)) / 2;
  }

  // Faster Factorial
function Factorial(num) {
    if (num <= 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  // Fancy Fibonacci
function iFib(num) {
    if (num <= 0) return 0;
    
    let prev = 0;
    let current = 1;
    
    for (let i = 2; i <= num; i++) {
      const temp = prev + current;
      prev = current;
      current = temp;
    }
    
    return current;
  }

  // Tricky Tribonacci
function iTrib(num) {
    if (num <= 0) return 0;
    if (num <= 2) return 1;
    
    let prev1 = 0;
    let prev2 = 0;
    let current = 1;
    
    for (let i = 3; i <= num; i++) {
      const temp = prev1 + prev2 + current;
      prev1 = prev2;
      prev2 = current;
      current = temp;
    }
    
    return current;
  }

  // Testing the functions
console.log(iSigma(4)); // Output: 10
console.log(Factorial(3)); // Output: 6
console.log(iFib(4)); // Output: 2
console.log(iTrib(6)); // Output: 4
