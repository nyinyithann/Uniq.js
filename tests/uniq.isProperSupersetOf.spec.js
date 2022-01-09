import {Uniq} from "../src/index";

describe("isProperSupersetOf", () => {
  test("should throw TypeError for invalid arguments", () => {
    const isProperSupersetOf = Uniq.prototype.isProperSupersetOf;
    expect(() => isProperSupersetOf.call(null, new Uniq())).toThrow(TypeError);
    expect(() => isProperSupersetOf.call(new Uniq(), null)).toThrow(TypeError);
  });

  test("should return correct result", () => {
    const s1 = Uniq.of(1, 3, 5, 4);
    const s2 = Uniq.of(1, 5);
    expect(s1.isProperSupersetOf(s2)).toBe(true);
    expect(Uniq.of().isProperSupersetOf(Uniq.of())).toBe(false);
    expect(Uniq.prototype.isProperSupersetOf.call(s1, s2)).toBe(true);

    expect(Uniq.of(1, 2, 3).isProperSupersetOf(Uniq.of(1, 2, 3))).toBe(false);
  });
});
