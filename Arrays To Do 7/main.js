// 1-Flatten
function flattenArray(arr) {
  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else if (item !== undefined && item !== null) {
      result.push(item);
    }
    return result;
  }, []);
}

function flattenArrayInplace(arr) {
  let i = 0;
  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      arr.splice(i, 1, ...flattenArrayInplace(arr[i]));
    } else if (arr[i] === undefined || arr[i] === null) {
      arr.splice(i, 1);
      continue;
    }
    i++;
  }
  return arr;
}

function flattenArrayInplaceStable(arr) {
  const indicesToRemove = [];
  let i = 0;
  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      arr.splice(i, 1, ...flattenArrayInplaceStable(arr[i]));
    } else if (arr[i] === undefined || arr[i] === null) {
      indicesToRemove.push(i);
    }
    i++;
  }
  for (let j = indicesToRemove.length - 1; j >= 0; j--) {
    arr.splice(indicesToRemove[j], 1);
  }
  return arr;
}

// 2- Remove Duplicates:
function removeDuplicates(arr) {
  const uniqueSet = new Set();
  const result = [];
  for (let item of arr) {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      result.push(item);
    }
  }
  return result;
}

function removeDuplicatesInplace(arr) {
  let writeIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, writeIndex).indexOf(arr[i]) === -1) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
  }
  arr.splice(writeIndex);
  return arr;
}

function removeDuplicatesInplaceStable(arr) {
  const lastIndexMap = {};
  let writeIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (lastIndexMap[arr[i]] === undefined) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
    lastIndexMap[arr[i]] = i;
  }
  arr.splice(writeIndex);
  return arr;
}

// 3- Mode:
function findMode(arr) {
  const counts = {};
  let mode = null;
  let maxCount = 0;
  for (let item of arr) {
    counts[item] = (counts[item] || 0) + 1;
    if (counts[item] > maxCount) {
      mode = item;
      maxCount = counts[item];
    }
  }
  return mode;
}

function findModeMemoryConstrained(arr) {
  let mode = null;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    if (count > maxCount) {
      mode = arr[i];
      maxCount = count;
    }
  }
  return mode;
}

// 4- Buffer Copy:
function arrBufferCopy(
  sourceArr,
  destArr,
  sourceStartIdx,
  destStartIdx,
  numVals
) {
  for (let i = 0; i < numVals; i++) {
    const sourceIdx = (sourceStartIdx + i) % sourceArr.length;
    const destIdx = (destStartIdx + i) % destArr.length;
    destArr[destIdx] = sourceArr[sourceIdx];
  }
}

function arrBufferCopyInplace(
  sourceArr,
  destArr,
  sourceStartIdx,
  destStartIdx,
  numVals
) {
  const buffer = [];
  for (let i = 0; i < numVals; i++) {
    const sourceIdx = (sourceStartIdx + i) % sourceArr.length;
    const destIdx = (destStartIdx + i) % destArr.length;
    if (
      destIdx < sourceStartIdx ||
      destIdx >= (sourceStartIdx + numVals) % sourceArr.length
    ) {
      buffer.push(destArr[destIdx]);
    }
    destArr[destIdx] = sourceArr[sourceIdx];
  }
  for (let i = 0; i < buffer.length; i++) {
    const sourceIdx = (sourceStartIdx + numVals + i) % sourceArr.length;
    const destIdx = (destStartIdx + numVals + i) % destArr.length;
    destArr[destIdx] = buffer[i];
  }
}
