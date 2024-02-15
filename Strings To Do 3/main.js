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