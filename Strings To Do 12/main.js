// Are Strings Loosely Interleaved:
function areStringsLooselyInterleaved(str1, str2, str3) {
    if (str1.length + str2.length !== str3.length) {
      return false;
    }
  
    const merged = str1 + str2;
    const sortedMerged = merged.split('').sort().join('');
    const sortedStr3 = str3.split('').sort().join('');
  
    return sortedMerged === sortedStr3;
  }
  
  // Example usage:
  console.log(areStringsLooselyInterleaved("dne", "ail", "daniel")); // true
  console.log(areStringsLooselyInterleaved("dne", "ail", "dalein")); // false
  console.log(areStringsLooselyInterleaved("dne", "ail", "ddaanneeiill")); // false

  // All Loosely Interleaved Strings:
  function allLooselyInterleavedStrings(str1, str2) {
    const result = [];
  
    function backtrack(s1, s2, current) {
      if (s1.length === 0 && s2.length === 0) {
        result.push(current);
        return;
      }
  
      if (s1.length > 0) {
        backtrack(s1.slice(1), s2, current + s1[0]);
      }
  
      if (s2.length > 0) {
        backtrack(s1, s2.slice(1), current + s2[0]);
      }
    }
  
    backtrack(str1, str2, '');
  
    return [...new Set(result)];
  }
  
  // Example usage:
  console.log(allLooselyInterleavedStrings("ab", "yz")); // ["abyz","aybz","ayzb","yabz","yazb","yzab"]

  //Make String Palindrome (Remove One):
  function makeStringPalindromeRemoveOne(str) {
    function isPalindrome(s, left, right) {
      while (left < right) {
        if (s[left] !== s[right]) {
          return false;
        }
        left++;
        right--;
      }
      return true;
    }
  
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        if (isPalindrome(str, left + 1, right)) {
          return left;
        }
        if (isPalindrome(str, left, right - 1)) {
          return right;
        }
        return -1;
      }
      left++;
      right--;
    }
  
    return -1;
  }
  
  // Example usage:
  console.log(makeStringPalindromeRemoveOne("bene")); // 0
  console.log(makeStringPalindromeRemoveOne("dude")); // 3
  console.log(makeStringPalindromeRemoveOne("bub")); // -1

  // Make String Palindrome (Add One):
  function makeStringPalindromeAddOne(str) {
    if (str.length === 0) {
      return '';
    }
  
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        if (str[left] === str[right - 1]) {
          return str[left];
        }
        if (str[left + 1] === str[right]) {
          return str[right];
        }
        return '';
      }
      left++;
      right--;
    }
  
    return '';
  }
  
  // Example usage:
  console.log(makeStringPalindromeAddOne("tutu")); // "u" or "t"
  console.log(makeStringPalindromeAddOne("dude")); // "e"
  console.log(makeStringPalindromeAddOne("dad")); // ""