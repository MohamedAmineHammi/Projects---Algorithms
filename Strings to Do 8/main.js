// String to Word Array
function stringToWordArray(str) {
    // Remove punctuation and convert to lowercase
    const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase();
    // Split the string into an array of words
    const words = cleanedStr.split(/\s+/);
    return words;
  }

  // Reverse Word Order
function reverseWordOrder(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    // Reverse the array of words and join them back into a string
    const reversedStr = words.reverse().join(' ');
    return reversedStr;
  }

  // Longest Word
function longestWord(str) {
    // Remove punctuation and convert to lowercase
    const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase();
    // Split the string into an array of words
    const words = cleanedStr.split(/\s+/);
    // Find the longest word in the array
    const longest = words.reduce((longestWord, currentWord) => {
      return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, "");
    return longest;
  }