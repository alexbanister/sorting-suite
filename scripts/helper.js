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

function randomLetterArray (amount) {
  let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'i', 'u', 'v', 'w', 'x', 'y', 'z' ];
  let randomArray = [];

  for (var i = 0; i < amount; i++) {
    randomArray.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  return randomArray;
}

function checkRuntime (sortToTest, name, arrayLength, timesToTest) {
  let times = [];
  for (var i = 0; i < timesToTest; i++) {
    let longArray = randomArrayLength(arrayLength);
    let startTime = new Date().getTime();

    sortToTest(longArray);
    let endTime = new Date().getTime();
    times.push(endTime - startTime);
    console.log(name, ':', (endTime - startTime), 'ms');
  }
  console.log('------------------------------');
  let totalTime = times.reduce( (accum, time) => {
    return accum += time;
  }, 0);
  console.log('Average Time: ', totalTime / times.length);
}

export { randomArrayLength, randomLetterArray, checkRuntime }
