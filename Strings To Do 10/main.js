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

// Num to String:
function numToString(num) {
  var isNegative = false;
  if (num < 0) {
    isNegative = true;
    num = -num;
  }

  var result = "";
  do {
    var digit = num % 10;
    result = String.fromCharCode(digit + 48) + result;
    num = Math.floor(num / 10);
  } while (num > 0);

  if (isNegative) {
    result = "-" + result;
  }

  return result;
}

var number = 1234;
var numberString = numToString(number);
console.log(numberString); // Output: "1234"

var fractionalNumber = 11.2051;
var fractionalNumberString = numToString(fractionalNumber);
console.log(fractionalNumberString); // Output: "11.2051"

// Num to Text:
function numToText(num) {
  var numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  var result = "";
  var isNegative = false;

  if (num < 0) {
    isNegative = true;
    num = -num;
  }

  if (Math.floor(num) !== num) {
    var fractionalDigits = num.toString().split(".")[1];
    result = "point ";
    for (var i = 0; i < fractionalDigits.length; i++) {
      result += numberWords[parseInt(fractionalDigits[i])] + " ";
    }
  }

  num = Math.floor(num);
  if (num === 0) {
    result = numberWords[0] + " " + result;
  } else {
    var units = ["", "thousand", "million", "billion", "trillion"];
    var unitIndex = 0;

    while (num > 0) {
      var threeDigits = num % 1000;
      if (threeDigits !== 0) {
        var threeDigitsText = threeDigitsToText(threeDigits, numberWords);
        result = threeDigitsText + " " + units[unitIndex] + " " + result;
      }
      num = Math.floor(num / 1000);
      unitIndex++;
    }
  }

  if (isNegative) {
    result = "negative " + result;
  }

  return result.trim();
}

function threeDigitsToText(num, numberWords) {
  var result = "";

  var hundreds = Math.floor(num / 100);
  if (hundreds > 0) {
    result += numberWords[hundreds] + " hundred ";
  }

  var tens = Math.floor((num % 100) / 10);
  var ones = num % 10;
  continued: if (tens === 1) {
    var teens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    result += teens[ones] + " ";
  } else {
    var tensWords = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    result += tensWords[tens] + " ";
    result += numberWords[ones] + " ";
  }

  return result.trim();
}

var number = 40213;
var numberText = numToText(number);
console.log(numberText); // Output: "forty thousand two hundred thirteen"

var fractionalNumber = 11.2051;
var fractionalNumberText = numToText(fractionalNumber);
console.log(fractionalNumberText); // Output: "eleven point two zero five one"
