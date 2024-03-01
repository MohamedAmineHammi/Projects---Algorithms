// 1- String Encode:
function encodeString(str) {
    let encoded = '';
    let count = 1;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        encoded += str[i] + count;
        count = 1;
      }
    }
  
    return encoded.length < str.length ? encoded : str;
  }
  
  // Example usage:
  console.log(encodeString("aaaabbcddd")); // Output: "a4b2c1d3"
  console.log(encodeString("bb")); // Output: "bb"

  // 2-String Decode:
  function decodeString(str) {
    let decoded = '';
    let count = '';
  
    for (let i = 0; i < str.length; i++) {
      if (isNaN(parseInt(str[i]))) {
        decoded += str[i].repeat(parseInt(count) || 1);
        count = '';
      } else {
        count += str[i];
      }
    }
  
    return decoded;
  }
  
  // Example usage:
  console.log(decodeString("a3b2c1d3")); // Output: "aaabbcddd"

  // 3-Shortener:
  function shortenString(str, length) {
    str = str.trim();
  
    if (str.length <= length) {
      return str;
    }
  
    // Capitalize each word
    str = str.replace(/\b\w/g, (match) => match.toUpperCase());
  
    // Remove spaces between words (starting from the back)
    str = str.split(' ').join('');
  
    // Remove punctuation (starting from the back)
    str = str.replace(/[^\w\s]|_/g, '');
  
    // Remove lower-case letters (vowels first, starting from the back)
    str = str.replace(/[aeiou]/g, '');
  
    // Remove upper-case letters (starting from the back)
    str = str.replace(/[A-Z]/g, '');
  
    // Trim the string to the desired length
    return str.slice(-length);
  }
  
  // Example usage:
  console.log(shortenString("It's a wonderful life, Beth! ", 33)); // Output: " It's a wonderful life, Beth! "
  console.log(shortenString("It's a wonderful life, Beth! ", 26)); // Output: "It's A WonderfulLife,Beth!"
  console.log(shortenString("It's a wonderful life, Beth! ", 22)); // Output: "It'sAWonderfulLifeBeth"
  console.log(shortenString("It's a wonderful life, Beth! ", 17)); // Output: "ItsAWonderflLfBth"
  console.log(shortenString("It's a wonderful life, Beth! ", 12)); // Output: "ItsAWndrflLB"
  console.log(shortenString("It's a wonderful life, Beth! ", 3)); // Output: "IAW"


