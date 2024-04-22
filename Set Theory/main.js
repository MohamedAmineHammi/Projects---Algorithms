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