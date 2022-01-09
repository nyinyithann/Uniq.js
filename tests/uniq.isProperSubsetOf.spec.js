import {Uniq} from "../src/index";

describe("isProperSubset", () => {
  test("should throw TypeError for invalid arguments", () => {
    const isProperSubsetOf = Uniq.prototype.isProperSubsetOf;
    expect(() => isProperSubsetOf.call(null, new Uniq())).toThrow(TypeError);
    expect(() => isProperSubsetOf.call(new Uniq(), null)).toThrow(TypeError);
  });

  test("should return correct result", () => {
    const s1 = Uniq.of(1, 5);
    const s2 = Uniq.of(1, 3, 5, 4);
    expect(s1.isProperSubsetOf(s2)).toBe(true);
    expect(Uniq.of().isProperSubsetOf(Uniq.of())).toBe(false);
    expect(Uniq.prototype.isProperSubsetOf.call(s1, s2)).toBe(true);

    expect(Uniq.of(1, 2, 3).isProperSubsetOf(Uniq.of(1, 2, 3))).toBe(false);
  });
});
