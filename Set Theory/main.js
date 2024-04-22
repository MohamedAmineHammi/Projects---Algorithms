// Union Unsorted Arrays (in-place)
function unionInPlace(arr1, arr2) {
    arr1.push(...arr2);
  }

  // Union Unsorted Arrays (no duplicates)
function unionNoDuplicates(arr1, arr2) {
    const set = new Set([...arr1, ...arr2]);
    return Array.from(set);
  }

  // Subset Sorted Arrays
function subsetSorted(arr1, arr2) {
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        j++;
      }
      i++;
    }
  
    return j === arr2.length;
  }

  // Subset Unsorted Arrays
function subsetUnsorted(arr1, arr2) {
    const set = new Set(arr1);
  
    for (let i = 0; i < arr2.length; i++) {
      if (!set.has(arr2[i])) {
        return false;
      }
    }
  
    return true;
  }

  // Square Root function
function squareRoot(num) {
    if (num < 0) {
      throw new Error("Cannot calculate square root of a negative number");
    }
  
    if (num === 0 || num === 1) {
      return num;
    }
  
    let start = 1;
    let end = Math.floor(num / 2);
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let square = mid * mid;
  
      if (square === num) {
        return mid;
      } else if (square < num) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return end;
  }