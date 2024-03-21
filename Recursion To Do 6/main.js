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

  //All Valid N Pairs of Parens:
  function generateParentheses(n) {
    const result = [];
  
    function backtrack(str, open, close) {
      if (str.length === n * 2) {
        result.push(str);
        return;
      }
  
      if (open < n) {
        backtrack(str + '(', open + 1, close);
      }
  
      if (close < open) {
        backtrack(str + ')', open, close + 1);
      }
    }
  
    backtrack('', 0, 0);
    return result;
  }
  
  console.log(generateParentheses(2));

  //Towers of Hanoi:
  function towersOfHanoi(numDisks, source, auxiliary, destination) {
    if (numDisks === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return;
    }
  
    towersOfHanoi(numDisks - 1, source, destination, auxiliary);
    console.log(`Move disk ${numDisks} from ${source} to ${destination}`);
    towersOfHanoi(numDisks - 1, auxiliary, source, destination);
  }
  
  towersOfHanoi(6, 'A', 'B', 'C');