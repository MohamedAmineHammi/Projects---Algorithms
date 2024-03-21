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

  //IP Addresses:
  function restoreIpAddresses(s) {
    const result = [];
  
    function backtrack(remaining, ipAddress, parts) {
      if (parts === 4 && remaining.length === 0) {
        result.push(ipAddress);
        return;
      }
  
      if (parts === 4 || remaining.length === 0) {
        return;
      }
  
      for (let i = 1; i <= 3; i++) {
        if (i > remaining.length) {
          break;
        }
  
        const part = remaining.substring(0, i);
        if (isValidPart(part)) {
          const newIpAddress = ipAddress + part + (parts === 3 ? '' : '.');
          backtrack(remaining.substring(i), newIpAddress, parts + 1);
        }
      }
    }
  
    function isValidPart(part) {
      if (part.length > 1 && part[0] === '0') {
        return false;
      }
  
      const num = parseInt(part);
      return num >= 0 && num <= 255;
    }
  
    backtrack(s, '', 0);
    return result;
  }
  
  console.log(restoreIpAddresses('255255255'));

  //Uneven Digits:
  function uneven(num) {
    if (num === 0) {
      return 0;
    }
  
    const digit = num % 10;
    const remaining = Math.floor(num / 10);
  
    if (digit % 2 === 0) {
      return uneven(remaining);
    }
  
    return uneven(remaining) * 10 + digit;
  }
  
  console.log(uneven(-1845));

  //Generate All Possible Coin Change:
  function generateAllCoinChange(cents) {
    const result = [];
  
    function backtrack(change, coins, combination) {
      if (change === 0) {
        result.push(combination);
        return;
      }
  
      if (change < 0 || coins.length === 0) {
        return;
      }
  
      const coin = coins[0];
      const remainingCoins = coins.slice(1);
  
      const maxCount = Math.floor(change / coin);
      for (let i = 0; i <= maxCount; i++) {
        const newCombination = { ...combination, [coin]: i };
        backtrack(change - i * coin, remainingCoins, newCombination);
      }
    }
  
    backtrack(cents, [25, 10, 5, 1], {});
    return result;
  }
  
  console.log(generateAllCoinChange(5));