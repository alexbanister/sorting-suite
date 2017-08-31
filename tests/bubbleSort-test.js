import { assert } from 'chai';
import { randomArrayLength, randomLetterArray, checkRuntime } from '../scripts/helper'
import bubbleSort from '../scripts/bubbleSort'

describe('Bubble sort', () => {
  it('should return a short sorted array of numbers', function () {
    assert.deepEqual(bubbleSort([ 5, 2 ]), [ 2, 5 ]);
  });

  it('should return a sorted array of numbers', function () {
    assert.deepEqual(bubbleSort([ 2, 5, 9, 1, 8, 3, 6, 4, 7 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
  });

  it('should sort arrays with duplicate numbers', function () {
    assert.deepEqual(bubbleSort([ 1, 5, 7, 9, 1, 5, 3, 3, 7, 9]), [ 1, 1, 3, 3, 5, 5, 7, 7, 9, 9 ])
  });

  it('should sort a long array of numbers', function () {
    let longArray = randomArrayLength(5000);
    let longArraySorted = longArray.sort( (a, b) => {

      return a - b
    });

    assert.deepEqual(bubbleSort(longArray), longArraySorted);
  });

  it('should return a short sorted array of letters', function () {
    assert.deepEqual(bubbleSort([ 'b', 'a' ]), [ 'a', 'b' ]);
  });

  it('should return a sorted array of letters', function () {
    assert.deepEqual(bubbleSort([ 'b', 'e', 'c', 'h', 'a', 'f', 'd', 'i', 'g' ]), [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]);
  });

  it('should sort arrays with duplicate values', function () {
    assert.deepEqual(bubbleSort([ 'b', 'e', 'c', 'd', 'a', 'f', 'd', 'b', 'g' ]), [ 'a', 'b', 'b', 'c', 'd', 'd', 'e', 'f', 'g' ]);
  });

  it('should sort long arrays', function () {
    let longArray = randomLetterArray(5000);
    let longArraySorted = longArray.sort();

    assert.deepEqual(bubbleSort(longArray), longArraySorted);
  });
  // checkRuntime(bubbleSort, 'bubbleSort', 100000, 1);
});
