function insertionSort (toSort) {
  for (let j = 0; j < toSort.length; j++) {

    for (let i = j - 1; i >= 0; i--) {
      if (toSort[i] > toSort[i + 1]) {
        [ toSort[i], toSort[i + 1] ] = [ toSort[i + 1], toSort[i] ];
      } else {
        break;
      }
    }
  }
  return toSort;
}

export default insertionSort
