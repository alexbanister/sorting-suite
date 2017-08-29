function mergeSort (toSort) {
  if (toSort.length === 1) {
    return toSort;
  }
  let leftArray = mergeSort(toSort.slice(0, Math.floor(toSort.length / 2)));
  let rightArray = mergeSort(toSort.slice(Math.floor(toSort.length / 2)), toSort.length);

  return mergeSortedArrays (leftArray, rightArray);
}

function mergeSortedArrays (leftArray, rightArray) {
  let merged = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] > rightArray[0]) {
      merged.push(rightArray.shift());
    } else {
      merged.push(leftArray.shift());
    }
  }
  if (leftArray.length > 0) {
    merged = merged.concat(leftArray);
  } else if (rightArray.length > 0) {
    merged = merged.concat(rightArray);
  }
  return merged;
}

export { mergeSort, mergeSortedArrays }
