function quickSort (toSort) {
  if (toSort.length <= 1) {
    return toSort;
  }
  let sortedArray = [];
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < toSort.length; i++) {
    if (toSort[i] < toSort[0]) {
      leftArray.push(toSort[i]);
    } else {
      rightArray.push(toSort[i]);
    }
  }
  return sortedArray.concat( quickSort(leftArray), toSort[0], quickSort(rightArray) );
}

export default quickSort
