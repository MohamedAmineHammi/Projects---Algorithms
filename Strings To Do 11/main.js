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