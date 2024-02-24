// Dedupe
function dedupeString(str) {
    var result = "";
    for (var i = str.length - 1; i >= 0; i--) {
      if (result.indexOf(str[i]) === -1) {
        result = str[i] + result;
      }
    }
    return result;
  }
  
  var inputString = "Snaps! crackles! pops!";
  var dedupedString = dedupeString(inputString);
  console.log(dedupedString); // Output: Snrackle ops!

  // Index of First Unique Letter:
  function indexOfFirstUniqueLetter(str) {
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (charCount[char] === undefined) {
        charCount[char] = 1;
      } else {
        charCount[char]++;
      }
    }
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (charCount[char] === 1) {
        return i;
      }
    }
    return -1; // No unique letter found
  }
  
  var inputString = "empathetic monarch meets primo stinker";
  var index = indexOfFirstUniqueLetter(inputString);
  console.log(index); // Output: 35

  // Unique Letters:
  function uniqueLetters(str) {
    var charCount = {};
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (charCount[char] === undefined) {
        charCount[char] = 1;
        result += char;
      } else {
        charCount[char]++;
      }
    }
    return result;
  }
  
  var inputString = "Snap! Crackle! Poop!";
  var uniqueChars = uniqueLetters(inputString);
  console.log(uniqueChars); // Output: SnCrcklePp