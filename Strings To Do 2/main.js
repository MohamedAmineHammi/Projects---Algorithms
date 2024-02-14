// 1-Reverse a String:
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  console.log(reverseString("creature")); // Output: "erutaerc"

  // 2- Remove Even-Length Strings:
  function removeEvenLengthStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length % 2 === 0) {
        arr.splice(i, 1);
        i--; // Decrement i to account for the removed element
      }
    }
    return arr;
  }
  
  let strings = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."];
  console.log(removeEvenLengthStrings(strings)); // Output: ["Nope!", "Its", "Chris", "."]

  // 3- Integer to Roman Numerals:
  function integerToRoman(num) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let roman = "";
    for (let symbol in romanNumerals) {
      while (num >= romanNumerals[symbol]) {
        roman += symbol;
        num -= romanNumerals[symbol];
      }
    }
    return roman;
  }
  
  console.log(integerToRoman(349)); // Output: "CCCIL"
  console.log(integerToRoman(444)); // Output: "CDXLIV"

  // 4- Roman Numerals to Integer:
  function romanToInteger(roman) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let num = 0;
    for (let i = 0; i < roman.length; i++) {
      if (romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {
        num += romanNumerals[roman[i + 1]] - romanNumerals[roman[i]];
        i++;
      } else {
        num += romanNumerals[roman[i]];
      }
    }
    return num;
  }
  
  console.log(romanToInteger("III")); // Output: 3
  console.log(romanToInteger("DCIX")); // Output: 609
  console.log(romanToInteger("MXDII")); // Output: 1492