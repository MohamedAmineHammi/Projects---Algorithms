// 1- Parens Valid
function parensValid(str) {
    const stack = [];
    for (let char of str) {
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  }
  
  console.log(parensValid("Y(3(p)p(3)r)s")); // true
  console.log(parensValid("N(0(p)3")); // false
  console.log(parensValid("N(0)t )0(k")); // false

  // 2- Braces Valid
  function bracesValid(str) {
    const stack = [];
    const openBraces = ['(', '{', '['];
    const closeBraces = [')', '}', ']'];
    for (let char of str) {
      if (openBraces.includes(char)) {
        stack.push(char);
      } else if (closeBraces.includes(char)) {
        const openBrace = openBraces[closeBraces.indexOf(char)];
        if (stack.length === 0 || stack[stack.length - 1] !== openBrace) {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  }
  
  console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!")); // true
  console.log(bracesValid("D(i{a}l[ t]o)n{e")); // false
  console.log(bracesValid("A(1)s[O (n]0{t) 0}k")); // false

  // 3-Is Palindrome
  function isStrictPalindrome(str) {
    str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  
  console.log(isStrictPalindrome("a x a")); // true
  console.log(isStrictPalindrome("racecar")); // true
  console.log(isStrictPalindrome("Dud")); // false
  console.log(isStrictPalindrome("oho!")); // false
  
  function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  
  console.log(isPalindrome("a x a")); // true
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("Dud")); // true
  console.log(isPalindrome("oho!")); // true

  // 4- Longest Palindrome:

  function longestPalindrome(str) {
    let longest = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const substr = str.slice(i, j);
        if (isPalindrome(substr) && substr.length > longest.length) {
          longest = substr;
        }
      }
    }
    return longest;
  }
  
  console.log(longestPalindrome("what up, daddy-o?")); // "dad"
  console.log(longestPalindrome("uh... not much")); // "u"
  console.log(longestPalindrome("Yikes! my favorite racecar erupted!")); // "e racecar e"
  
  function longestPalindrome(str) {
    str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let longest = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const substr = str.slice(i, j);
        if (isPalindrome(substr) && substr.length > longest.length) {
          longest = substr;
        }
      }
    }
    return longest;
  }
  
  console.log(longestPalindrome("Hot puree eruption!")); // "tpureeerupt"