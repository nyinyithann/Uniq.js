import {Uniq} from "../src/index";

describe("isSubsetOf", () => {
  test("should throw TypeError for invalid arguments", () => {
    const isSubsetOf = Uniq.prototype.isSubsetOf;
    expect(() => isSubsetOf.call(null, new Uniq())).toThrow(TypeError);
    expect(() => isSubsetOf.call(new Uniq(), null)).toThrow(TypeError);
  });

  test("should return correct result", () => {
    const s1 = Uniq.of(1, 5);
    const s2 = Uniq.of(1, 3, 5, 4);
    expect(s1.isSubsetOf(s2)).toBe(true);
    expect(Uniq.of().isSubsetOf(Uniq.of())).toBe(true);
    expect(Uniq.prototype.isSubsetOf.call(s1, s2)).toBe(true);

    expect(Uniq.of(1, 2, 3).isSubsetOf(Uniq.of(1, 2, 3))).toBe(true);
  });
});
