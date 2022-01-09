import { Uniq } from '../src/index';

describe('toArray() | toMap()', () => {
  test('throw exception if this is null or undefined', () => {
    const toArray = Uniq.prototype.toArray;
    const toMap = Uniq.prototype.toMap;

    expect(() => toArray.call(null)).toThrow(TypeError);
    expect(() => toMap.call(null)).toThrow(TypeError);
  });

  test('should return correct result', () => {
    const toArray = Uniq.prototype.toArray;
    const toMap = Uniq.prototype.toMap;

    const uniq = Uniq.of(1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 5);

    expect(toArray.call(uniq)).toStrictEqual([1, 2, 4, 3, 5]);
    expect(toMap.call(uniq)).toStrictEqual(
      new Map([
        [1, 1],
        [2, 2],
        [4, 4],
        [3, 3],
        [5, 5],
      ])
    );
  });
});
