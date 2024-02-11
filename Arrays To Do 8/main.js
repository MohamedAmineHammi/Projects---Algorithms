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