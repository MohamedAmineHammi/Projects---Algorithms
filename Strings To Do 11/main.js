// 1. Check Permutation:
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(checkPermutation("mister", "stimer")); // true
console.log(checkPermutation("mister", "sister")); // false

// 2. All Permutations:
function allPermutations(str) {
    const result = [];
  
    function permute(current, remaining) {
      if (remaining.length === 0) {
        result.push(current);
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        permute(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }
  
    permute('', str);
    return result;
  }
  
  // Example usage:
  console.log(allPermutations('team')); // ['team', 'tame', 'taem', 'tmae', 'tema', 'team', ...]

  //3. Is Pangram:
  function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseStr = str.toLowerCase();
  
    for (let char of alphabet) {
      if (!lowercaseStr.includes(char)) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPangram("How quickly daft jumping zebras vex!")); // true
  console.log(isPangram("abcdef ghijkl mno pqrs tuv wxy, not so fast!")); // false

  //4. Is Perfect Pangram:
  function isPerfectPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseStr = str.toLowerCase().replace(/[^a-z]/g, '');
  
    const charCount = {};
  
    for (let char of lowercaseStr) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let char of alphabet) {
      if (charCount[char] !== 1) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPerfectPangram("Playing jazz vibe chords quickly excites my wife.")); // false
  console.log(isPerfectPangram("Mr. Jock, TV quiz PhD, bags few lynx.")); // true

  // 5. Best Time to Buy and Sell Stock:
  // 1. Single buy/sell
function bestSingleBuySell(prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
  
    for (let price of prices) {
      minPrice = Math.min(minPrice, price);
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  
    return maxProfit;
  }
  
  // Example usage:
  console.log(bestSingleBuySell([6, 4, 6, 5, 9, 7, 6, 12, 2, 6, 11, 2, 4])); // 9
  
  // 2. Multiple buy/sell
  function bestMultipleBuySell(prices) {
    let maxProfit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        maxProfit += prices[i] - prices[i - 1];
      }
    }
  
    return maxProfit;
  }
  
  // Example usage:
  console.log(bestMultipleBuySell([6, 4, 6, 5, 9, 7, 6, 12, 2, 6, 11, 2, 4])); // 23
  
  // 3. At most two transactions
  function bestKTransactions(prices, k) {
    if (k >= prices.length / 2) {
      return bestMultipleBuySell(prices);
    }
  
    const dp = new Array(k + 1).fill(0).map(() => new Array(prices.length).fill(0));
  
    for (let i = 1; i <= k; i++) {
      let maxDiff = -prices[0];
  
      for (let j = 1; j < prices.length; j++) {
        dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiffHere's the JavaScript code for the requested functions:
  
  **1. Check Permutation:**
  
  ```javascript
  function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
  console.log(checkPermutation("mister", "stimer")); // true
  console.log(checkPermutation("mister", "sister")); // false

  // 2. All Permutations:
  function allPermutations(str) {
    const result = [];
  
    function permute(current, remaining) {
      if (remaining.length === 0) {
        result.push(current);
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        permute(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }
  
    permute('', str);
    return result;
  }
  
  // Example usage:
  console.log(allPermutations('team')); // ['team', 'tame', 'taem', 'tmae', 'tema', 'team', ...]

  // 3. Is Pangram:
  function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseStr = str.toLowerCase();
  
    for (let char of alphabet) {
      if (!lowercaseStr.includes(char)) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPangram("How quickly daft jumping zebras vex!")); // true
  console.log(isPangram("abcdef ghijkl mno pqrs tuv wxy, not so fast!")); // false

  // 4. Is Perfect Pangram:
  function isPerfectPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseStr = str.toLowerCase().replace(/[^a-z]/g, '');
  
    const charCount = {};
  
    for (let char of lowercaseStr) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let char of alphabet) {
      if (charCount[char] !== 1) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPerfectPangram("Playing jazz vibe chords quickly excites my wife.")); // false
  console.log(isPerfectPangram("Mr. Jock, TV quiz PhD, bags few lynx.")); // true

  // 5. Best Time to Buy and Sell Stock:
  // 1. Single buy/sell
function bestSingleBuySell(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}

// Example usage:
console.log(bestSingleBuySell([6, 4, 6, 5, 9, 7, 6, 12, 2, 6, 11, 2, 4])); // 9

// 2. Multiple buy/sell
function bestMultipleBuySell(prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}

// Example usage:
console.log(bestMultipleBuySell([6, 4, 6, 5, 9, 7, 6, 12, 2, 6, 11, 2, 4])); // 23

// 3. At most two transactions
function bestKTransactions(prices, k) {
  if (k >= prices.length / 2) {
    return bestMultipleBuySell(prices);
  }

  const dp = new Array(k + 1).fill(0).map(() => new Array(prices.length).fill(0));

  for (let i = 1; i <= k; i++) {
    let maxDiff = -prices[0];

    for (let j = 1; j < prices.length; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff