// Exercice 1: 
function sumArrays(array1, array2) {
    var sumArray1 = 0;
    var sumArray2 = 0;
    for (var i=0; i<array1.length; i++) {
        sumArray1 += array1[i]
    }

    for (var i=0; i<array2.length; i++) {
        sumArray2 += array2[i]
    }

    return sumArray1 + sumArray2
}

const array1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]
const array2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]

// console.log(sumArrays(array1, array2))

// Exercice2: 
function evenNumbers(number) {
    var myArray = []

    for (var i=1; i*2 <= number; i+= 1) {
        myArray.push(i*2)
    }

    return myArray;
}

// console.log(evenNumbers(22))

// Exercice3: 
function reverse(array) {
    var myString = "";
    for (var i=array.length-1; i>=0; i--) {
        // console.log(array[i])
        myString += array[i] + " "
        
    }
    console.log(myString)
}

const test3 = [43, "what", 3, true, "cannot", false, "be", 3, true]
// reverse(test)

// Exercice4:
function addEachElt(array1, array2) {
    for (var i=0; i<array2.length; i++) {
        array2[i] += array1[i]
    }

    console.log(array2)
}

const arr_1 = [4, 6, 7]
const arr_2 = [8, 1, 9]

// addEachElt(arr_1, arr_2)

// Exercice5: 
function convertSecondToZ(word) {
    var myArray = word.split("")
    for (var i=0; i<myArray.length; i++) {
        if ((i % 2) != 0) {
            myArray[i] = 'Z'
        }
    }
    console.log(myArray);
}

const test5 = "javascript"
// convertSecondToZ(test5);

// Exercice 6: 
function containsY(word) {
    var myArray = word.split("")
    for (var i=0; i<myArray.length; i++) {
        if (myArray[i] == 'y') {
            return "Yes"
        }
    }
    return "No"
}
const test6 = "don't know why"
// console.log(containsY(test6))

// Exercice 7:
function factorial(n) {
    var result = 1

    for (var i=n; i>0; i--) {
        result *= i
    }

    console.log(result)
}

const test7 = 4
// factorial(test7)

// Exercice 8:
const prompt = require('prompt-sync')();

const correctPin = "1234"; // Replace with your desired PIN

function guessPin() {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const userGuess = prompt(`Attempt ${attempt}: Enter your four-digit PIN: `);

    if (userGuess === correctPin) {
      console.log("That was correct!");
      return;
    } else {
      console.log("Sorry, that was wrong.");
    }
  }

  console.log("You've reached the maximum number of attempts. Goodbye!");
}

// Run the function
guessPin();
