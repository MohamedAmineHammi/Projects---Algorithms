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