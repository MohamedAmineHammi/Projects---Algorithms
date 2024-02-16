// 1-Is Word Alphabetical:
function isWordAlphabetical(word) {
    const sortedWord = word.toLowerCase().split("").sort().join("");
    return word.toLowerCase() === sortedWord;
  }
  
  // Example usage
  console.log(isWordAlphabetical("facetiously")); // Output: true
  console.log(isWordAlphabetical("arseniously")); // Output: false

  // 2- D Gets Jiggy:
  function coolGreeting(name) {
    const newWord = name.slice(1);
    const capitalized = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    return capitalized + " to the " + name.charAt(0) + "!";
  }
  
  // Example usage
  console.log(coolGreeting("Dylan")); // Output: "Ylan to the D!"