function randomArrayLength (number) {
  let myOrderedArray = [];
  let myRandomArray = [];

  for (let i = 0; i < number; i++) {
    myOrderedArray.push(i + 1);
  }
  while (myOrderedArray.length) {
    let myIndex = Math.floor(Math.random() * myOrderedArray.length);

    myRandomArray.push(myOrderedArray.splice(myIndex, 1)[0]);
  }
  return myRandomArray;
}

export default randomArrayLength
