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