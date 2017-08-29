import { assert } from 'chai';
import randomArrayLength from '../scripts/index'
import insertionSort from '../scripts/insertionSort'

describe('Insertion sort', () => {
  it('should be a function', function () {
    assert.isFunction(insertionSort);
  });

  it('should return a sorted array', function () {
    let longArray = randomArrayLength(1000);
    let longArraySorted = longArray.sort( (a, b) => {
      return a - b
    });

    assert.deepEqual(insertionSort([ 2, 5, 9, 1, 8, 3, 6, 4, 7 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

    assert.deepEqual(insertionSort(longArray), longArraySorted);
  });
  for (var i = 0; i < 5; i++) {
    let startTime = new Date().getTime();

    insertionSort(randomArrayLength(15000));
    let endTime = new Date().getTime();

    console.log('insertionSort:', (endTime - startTime), 'ms');
  }
  console.log('------------------------------');
});
