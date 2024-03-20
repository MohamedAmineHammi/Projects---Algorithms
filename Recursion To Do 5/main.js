// Rising Squares
function risingSquare(n) {
    if (n === 0) {
      return "";
    } else if (n % 2 === 1) {
      return risingSquare(n - 1) + (n * n) + ", ";
    } else {
      return (n * n) + ", " + risingSquare(n - 1);
    }
  }
  
  console.log(risingSquare(5)); // Output: 1, 9, 25, 16, 4
  console.log(risingSquare(8)); // Output: 1, 9, 25, 49, 64, 36, 16, 4