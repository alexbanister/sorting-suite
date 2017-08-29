import { assert } from 'chai';
import randomArrayLength from '../scripts/index'
import quickSort from '../scripts/quickSort'

describe('Insertion sort', () => {
  it('should be a function', function () {
    assert.isFunction(quickSort);
  });

  it('should return a sorted array', function () {
    let longArray = randomArrayLength(1000);
    let longArraySorted = longArray.sort( (a, b) => {
      return a - b
    });

    assert.deepEqual(quickSort([ 2, 5, 9, 1, 8, 3, 6, 4, 7 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

    assert.deepEqual(quickSort(longArray), longArraySorted);
  });
});
