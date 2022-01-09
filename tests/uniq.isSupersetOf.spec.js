import {Uniq} from "../src/index";

describe("isSupersetOf", () => {
  test("should throw TypeError for invalid arguments", () => {
    const isSupersetOf = Uniq.prototype.isSupersetOf;
    expect(() => isSupersetOf.call(null, new Uniq())).toThrow(TypeError);
    expect(() => isSupersetOf.call(new Uniq(), null)).toThrow(TypeError);
  });

  test("should return correct result", () => {
    const s1 = Uniq.of(1, 3, 5, 4);
    const s2 = Uniq.of(1, 5);
    expect(s1.isSupersetOf(s2)).toBe(true);
    expect(Uniq.of().isSupersetOf(Uniq.of())).toBe(true);
    expect(Uniq.prototype.isSupersetOf.call(s1, s2)).toBe(true);

    expect(Uniq.of(1, 2, 3).isSupersetOf(Uniq.of(1, 2, 3))).toBe(true);
    expect(Uniq.of(1, 2, 3).isSupersetOf(Uniq.of(1, 2, 3, 4))).toBe(false);
  });
});
