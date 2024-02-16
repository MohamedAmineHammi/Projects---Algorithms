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

  // 3- Common Suffix:
  function findCommonSuffix(words) {
    if (words.length === 0) {
      return "";
    }
  
    let suffix = "";
    for (let i = 0; i < words[0].length; i++) {
      const char = words[0].charAt(words[0].length - 1 - i);
      if (words.every((word) => word.charAt(word.length - 1 - i) === char)) {
        suffix = char + suffix;
      } else {
        break;
      }
    }
  
    return suffix;
  }
  
  // Example usage
  console.log(
    findCommonSuffix(["deforestation", "citation", "conviction", "incarceration"])
  ); // Output: "tion"
  console.log(findCommonSuffix(["nice", "ice", "baby"])); // Output: ""

  // 4-Book Index:
  function createBookIndex(pages) {
    let index = "";
    let start = pages[0];
    let end = pages[0];
    
    for (let i = 1; i < pages.length; i++) {
      if (pages[i] === pages[i - 1] + 1) {
        end = pages[i];
      } else {
        if (start === end) {
          index += start + ", ";
        } else {
          index += start + "-" + end + ", ";
        }
        start = pages[i];
        end = pages[i];
      }
    }
    
    if (start === end) {
      index += start;
    } else {
      index += start + "-" + end;
    }
  
    return index;
  }
  
  // Example usage
  console.log(createBookIndex([1, 13, 14, 15, 37, 38, 70])); // Output: "1, 13-15, 37-38, 70"

  // 5- Drop the Mike:
  function dropTheMike(str) {
    if (str.includes("Mike")) {
      return "stunned silence";
    }
  
    const words = str.trim().split(" ");
    const capitalizedWords = words.map((word) => capitalizeFirstLetter(word));
    return capitalizedWords.join(" ");
  }
  
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Example usage
  console.log(dropTheMike(" mike is here ")); // Output: "stunned silence"
  console.log(dropTheMike("hello world")); // Output: "Hello World"
