// 1-Is Word Alphabetical:
function isWordAlphabetical(word) {
    const sortedWord = word.toLowerCase().split("").sort().join("");
    return word.toLowerCase() === sortedWord;
  }
  
  // Example usage
  console.log(isWordAlphabetical("facetiously")); // Output: true
  console.log(isWordAlphabetical("arseniously")); // Output: false