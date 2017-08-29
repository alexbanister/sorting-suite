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

function checkRuntime (sortToTest, name, arrayLength, timesToTest) {
  for (var i = 0; i < timesToTest; i++) {
    let longArray = randomArrayLength(arrayLength);
    let startTime = new Date().getTime();

    sortToTest(longArray);
    let endTime = new Date().getTime();

    console.log(name, ':', (endTime - startTime), 'ms');
  }
  console.log('------------------------------');
}

export { randomArrayLength, checkRuntime }
