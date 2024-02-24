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