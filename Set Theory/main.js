// Union Unsorted Arrays (in-place)
function unionInPlace(arr1, arr2) {
    arr1.push(...arr2);
  }

  // Union Unsorted Arrays (no duplicates)
function unionNoDuplicates(arr1, arr2) {
    const set = new Set([...arr1, ...arr2]);
    return Array.from(set);
  }