// Rising Squares
function risingSquare(n) {
    if (n === 0) {
      return "";
    } else if (n % 2 === 1) {
      return risingSquare(n - 1) + (n * n) + ", ";
    } else {
      return (n * n) + ", " + risingSquare(n - 1);
    }
  }
  
  console.log(risingSquare(5)); // Output: 1, 9, 25, 16, 4
  console.log(risingSquare(8)); // Output: 1, 9, 25, 49, 64, 36, 16, 4

  //Binary String Expansion:
  function binStrExpand(str) {
    if (str.length === 0) {
      return [""];
    } else {
      const firstChar = str[0];
      const restStr = str.slice(1);
      if (firstChar === "?") {
        const expandedWithZero = binStrExpand(restStr).map((s) => "0" + s);
        const expandedWithOne = binStrExpand(restStr).map((s) => "1" + s);
        return expandedWithZero.concat(expandedWithOne);
      } else {
        return binStrExpand(restStr).map((s) => firstChar + s);
      }
    }
  }
  
  console.log(binStrExpand("1?0?")); // Output: ["1000", "1001", "1100", "1101"]

  //String Anagrams:
  function stringAnagrams(str) {
    if (str.length <= 1) {
      return [str];
    } else {
      const anagrams = [];
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const subAnagrams = stringAnagrams(remainingChars);
        for (let j = 0; j < subAnagrams.length; j++) {
          anagrams.push(char + subAnagrams[j]);
        }
      }
      return anagrams;
    }
  }
  
  console.log(stringAnagrams("lim")); // Output: ["lim", "lmi", "ilm", "iml", "mli", "mil"]