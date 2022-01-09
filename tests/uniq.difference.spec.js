import { Uniq } from '../src/index';

describe('difference()', () => {
  test('should throw TypeError for invalid arguments', () => {
    const diff = Uniq.prototype.difference;
    expect(() => diff.call(null, new Uniq())).toThrow(TypeError);
    expect(() => diff.call(new Uniq(), null)).toThrow(TypeError);
  });

  test('should return correct result', () => {
    const s1 = Uniq.of('a', 'b', 'c', 'd');
    const s2 = Uniq.of('b', 'd', 'e');
    expect(s1.difference(s2)).toStrictEqual(Uniq.of('a', 'c'));
    expect(Uniq.of().difference(Uniq.of())).toStrictEqual(Uniq.empty());

    expect(Uniq.prototype.difference.call(s2, s1)).toStrictEqual(Uniq.of('e'));
  });
});
