import { assert } from 'chai';
import { randomArrayLength, checkRuntime } from '../scripts/helper'
import { mergeSort, mergeSortedArrays } from '../scripts/mergeSort'

describe('Merge sort', () => {
  it('should be a function', function () {
    assert.isFunction(mergeSort);
  });

  it('should merge two sorted arrays', function () {
    assert.deepEqual(mergeSortedArrays([ 1, 2, 3, 4, ], [ 5, 6, 7, 8, 9 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
  });

  it('should return a sorted array', function () {
    let longArray = randomArrayLength(1000);
    let longArraySorted = longArray.sort( (a, b) => {
      return a - b
    });

    assert.deepEqual(mergeSort([ 2, 5, 9, 1, 8, 3, 6, 4, 7 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

    assert.deepEqual(mergeSort(longArray), longArraySorted);
  });
  checkRuntime(mergeSort, 'mergeSort', 15000, 5);
});
