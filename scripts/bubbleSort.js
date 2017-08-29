function bubbleSort(toSort){
  for(let j = 0; j < toSort.length; j++){
    let sorted = false
    for(let i = 0; i < (toSort.length - j); i++){
      if(toSort[i] > toSort[i+1]){
        [ toSort[i], toSort[i+1] ] = [ toSort[i+1], toSort[i] ]
        sorted = true;
      }
    }
    if(!sorted){
      return toSort;
    }
  }
  return toSort;
}
