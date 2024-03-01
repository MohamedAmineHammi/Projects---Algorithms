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
