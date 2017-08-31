function quickSort (toSort) {
  if (toSort.length <= 1) {
    return toSort;
  }
  var leftArray = [];
  let rightArray = [];

  for (let i = 1; i < toSort.length; i++) {
    if (toSort[i] < toSort[0]) {
      leftArray.push(toSort[i]);
    } else {
      rightArray.push(toSort[i]);
    }
  }
  return [...quickSort(leftArray), toSort[0], ...quickSort(rightArray)];
}

export default quickSort
