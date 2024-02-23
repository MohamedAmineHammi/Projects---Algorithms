// Rotate String
function rotateString(str, num) {
    const rotated = str.slice(-num) + str.slice(0, -num);
    return rotated;
  }

  // Censor
function censorString(str, naughtyWords) {
    for (let word of naughtyWords) {
      const regex = new RegExp(word, 'gi');
      str = str.replace(regex, 'x'.repeat(word.length));
    }
    return str;
  }