import {Uniq} from '../src/index';
describe('uniq core', () => {
  test('should work like a set', () => {
    expect(Object.prototype.toString.call(new Uniq())).toStrictEqual(
      '[object Set]'
    );
    expect(new Uniq() instanceof Set).toBe(true);
    expect(new Uniq() instanceof Uniq).toBe(true);
    expect(new Uniq().toString()).toStrictEqual('[object Set]');

    const u = new Uniq([1, 1, 2, 2, 3, 4, 5]);
    expect(u).toStrictEqual(new Uniq([1, 2, 3, 4, 5]));
    expect(u.size).toBe(5);
    u.add(6).add(7).add(8);
    expect(u.size).toBe(8);

    u.forEach((x) => {
      if (x % 2 === 0) {
        u.delete(x);
      }
    });
    expect(u).toStrictEqual(new Uniq([1, 3, 5, 7]));

    expect([...u.entries()]).toStrictEqual([
      [1, 1],
      [3, 3],
      [5, 5],
      [7, 7],
    ]);
    expect(u.has(1)).toBe(true);
    expect([...u.values()]).toStrictEqual([1, 3, 5, 7]);

    const u2 = Uniq.empty();
    u2.add(1).add(2);
    expect(u2.size).toBe(2);
  });
});
