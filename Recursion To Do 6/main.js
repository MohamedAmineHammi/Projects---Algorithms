// Sum of Squares:

function sumOfSquares(num) {
    function findSquares(n, currentSum, currentCombination) {
      if (currentSum === num) {
        console.log(currentCombination.join(' + '));
        return;
      }
      if (currentSum > num || n === 0) {
        return;
      }
      for (let i = Math.floor(Math.sqrt(num)); i >= 1; i--) {
        if (i <= n) {
          currentCombination.push(i);
          findSquares(i, currentSum + i * i, currentCombination);
          currentCombination.pop();
        }
      }
    }
  
    findSquares(num, 0, []);
  }
  
  sumOfSquares(10);
  sumOfSquares(30);