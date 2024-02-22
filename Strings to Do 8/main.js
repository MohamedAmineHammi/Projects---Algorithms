// String to Word Array
function stringToWordArray(str) {
    // Remove punctuation and convert to lowercase
    const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase();
    // Split the string into an array of words
    const words = cleanedStr.split(/\s+/);
    return words;
  }