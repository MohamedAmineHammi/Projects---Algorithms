// Rotate String
function rotateString(str, num) {
    const rotated = str.slice(-num) + str.slice(0, -num);
    return rotated;
  }