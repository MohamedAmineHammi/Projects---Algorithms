function isCreditCardValid(digitArr) {
  // Step 1: Set aside the last digit
  const lastDigit = digitArr[digitArr.length - 1];
  const digits = digitArr.slice(0, -1);

  // Step 2: Multiply digits in odd positions by 2
  const doubledDigits = digits.map((digit, index) =>
    index % 2 === 0 ? digit * 2 : digit
  );

  // Step 3: Subtract 9 from results larger than 9
  const subtractedDigits = doubledDigits.map((digit) =>
    digit > 9 ? digit - 9 : digit
  );

  // Step 4: Add all numbers together
  const digitSum = subtractedDigits.reduce((acc, digit) => acc + digit, 0);

  // Step 5: Add the last digit back in
  const totalSum = digitSum + lastDigit;

  // Check if the sum is a multiple of 10
  return totalSum % 10 === 0;
}

const digitArr = [5, 2, 2, 8, 2];
const isValid = isCreditCardValid(digitArr);
console.log(isValid);

// Output: true
