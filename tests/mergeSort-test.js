import { assert } from 'chai';
import { randomArrayLength, randomLetterArray, checkRuntime } from '../scripts/helper'
import { mergeSort, mergeSortedArrays } from '../scripts/mergeSort'

describe('Merge sort', () => {
  it('should merge two sorted arrays of numbers', function () {
    assert.deepEqual(mergeSortedArrays([ 1, 2, 3, 4, ], [ 5, 6, 7, 8, 9 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
  });

  it('should return a short sorted array of numbers', function () {
    assert.deepEqual(mergeSort([ 5, 2 ]), [ 2, 5 ]);
  });

  it('should return a sorted array of numbers', function () {
    assert.deepEqual(mergeSort([ 2, 5, 9, 1, 8, 3, 6, 4, 7 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
  });

  it('should sort arrays with duplicate numbers', function () {
    assert.deepEqual(mergeSort([ 1, 5, 7, 9, 1, 5, 3, 3, 7, 9]), [ 1, 1, 3, 3, 5, 5, 7, 7, 9, 9 ])
  });

  it('should sort a long arrays of numbers', function () {
    let longArray = randomArrayLength(5000);
    let longArraySorted = longArray.sort( (a, b) => {

      return a - b
    });

    assert.deepEqual(mergeSort(longArray), longArraySorted);
  });

  it('should return a short sorted array of letters', function () {
    assert.deepEqual(mergeSort([ 'b', 'a' ]), [ 'a', 'b' ]);
  });

  it('should merge two sorted arrays of letters', function () {
    let array1 = [ 'b', 'e', 'c', 'h', 'a' ].sort();
    let array2 = [ 'f', 'd', 'i', 'g' ].sort();
    let sorted = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ];
    assert.deepEqual(mergeSortedArrays(array1, array2), sorted);
  });

  it('should return a sorted array of letters', function () {
    assert.deepEqual(mergeSort([ 'b', 'e', 'c', 'h', 'a', 'f', 'd', 'i', 'g' ]), [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]);
  });

  it('should sort arrays with duplicate values', function () {
    assert.deepEqual(mergeSort([ 'b', 'e', 'c', 'd', 'a', 'f', 'd', 'b', 'g' ]), [ 'a', 'b', 'b', 'c', 'd', 'd', 'e', 'f', 'g' ]);
  });

  it('should sort long arrays', function () {
    let longArray = randomLetterArray(5000);
    let longArraySorted = longArray.sort();

    assert.deepEqual(mergeSort(longArray), longArraySorted);
  });

  // checkRuntime(mergeSort, 'mergeSort', 100000, 5);
});
