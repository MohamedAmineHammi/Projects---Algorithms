//Recursive List Length:
function getListLength(node) {
    if (node === null) {
      return 0;
    }
    return 1 + getListLength(node.next);
  }

  //Got Any Grapes?!?
  function getMaxGrapes(baggies) {
    const n = baggies.length;
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return baggies[0];
    }
    const dp = new Array(n);
    dp[0] = baggies[0];
    dp[1] = Math.max(baggies[0], baggies[1]);
    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + baggies[i]);
    }
    return dp[n - 1];
  }

  //Collatz-apalooza:
  function collatzIterations(num) {
    if (num === 1) {
      return 0;
    }
    if (num % 2 === 0) {
      return 1 + collatzIterations(num / 2);
    }
    return 1 + collatzIterations(3 * num + 1);
  }

  //Telephone Words:
  function getTelephoneWords(number) {
    const mappings = {
      '0': 'O',
      '1': 'I',
      '2': 'ABC',
      '3': 'DEF',
      '4': 'GHI',
      '5': 'JKL',
      '6': 'MNO',
      '7': 'PQRS',
      '8': 'TUV',
      '9': 'WXYZ'
    };
  
    const result = [];
  
    function backtrack(combination, digits) {
      if (digits.length === 0) {
        result.push(combination);
      } else {
        const currentDigit = digits[0];
        const letters = mappings[currentDigit];
        for (let i = 0; i < letters.length; i++) {
          const letter = letters[i];
          backtrack(combination + letter, digits.slice(1));
        }
      }
    }
  
    backtrack('', number.split(''));
    return result;
  }
  
  const phoneNumber = '818-2612';
  const telephoneWords = getTelephoneWords(phoneNumber.replace(/-/g, ''));
  console.log(telephoneWords.length); // Output: 243
  console.log(telephoneWords); // Output: Array of 243 different strings