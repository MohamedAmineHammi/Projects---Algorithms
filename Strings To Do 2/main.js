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