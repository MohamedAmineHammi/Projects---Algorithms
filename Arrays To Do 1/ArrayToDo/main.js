// Push Front

function pushFront(arr, value) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
  return arr;
}

console.log(pushFront([5, 7, 2, 3], 8)); // Output: [8, 5, 7, 2, 3]
console.log(pushFront([99], 7)); // Output: [7, 99]

// Pop Front

function popFront(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  var removedValue = arr[0];

  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  console.log(arr);
  return removedValue;
}

console.log(popFront([0, 5, 10, 15])); // Output: 0
console.log(popFront([4, 5, 7, 9])); // Output: 4

// Insert At

function insertAt(arr, index, value) {
  for (var i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
}

console.log(insertAt([100, 200, 5], 2, 311)); // Output: [100, 200, 311, 5]
console.log(insertAt([9, 33, 7], 1, 42)); // Output: [9, 42, 33, 7]

// BONUS: Remove At

function removeAt(arr, index) {
  if (index < 0 || index >= arr.length) {
    return undefined;
  }

  var removedValue = arr[index];

  for (var i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  console.log(arr);
  return removedValue;
}

console.log(removeAt([1000, 3, 204, 77], 1)); // Output: 3
console.log(removeAt([8, 20, 55, 44, 98], 3)); // Output: 44

// BONUS: Swap Pairs

function swapPairs(arr) {
  for (var i = 0; i < arr.length - 1; i += 2) {
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

console.log(swapPairs([1, 2, 3, 4])); // Output: [2, 1, 4, 3]
console.log(swapPairs(["Brendan", true, 42])); // Output: [true, "Brendan", 42]

// BONUS: Remove Duplicates

function removeDupes(arr) {
  var result = [];
  var prevValue = null;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prevValue) {
      result.push(arr[i]);
    }
    prevValue = arr[i];
  }

  return result;
}

console.log(removeDupes([-2, -2, 3.14, 5, 5, 10])); // Output: [-2, 3.14, 5, 10]
console.log(removeDupes([9, 19, 19, 19, 19, 19, 29])); // Output: [9, 19, 29]
