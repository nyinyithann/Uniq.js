import {Uniq} from "../src/index";

describe("fold()", () => {
  test("should throw TypeError for invalid arguments", () => {
    const fold = Uniq.prototype.fold;
    expect(() => fold.call(null)).toThrow(TypeError);
    expect(() => new Uniq().fold(null, 0)).toThrow(TypeError);
    expect(() => new Uniq().fold(function* () {}, 0)).toThrow(TypeError);
    expect(() => new Uniq().fold((acc, v) => acc + v, null)).toThrow(TypeError);
  });

  test("should return correct result", () => {
    const uniq = Uniq.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(uniq.fold((s, v) => s + v, 0)).toBe(55);
    expect(Uniq.empty().fold((s, v) => s + v, 100)).toBe(100);

    const fold = Uniq.prototype.fold;
    expect(fold.call(uniq, (s, v) => s + v, 0)).toBe(55);
    expect(fold.apply(uniq, [(s, v) => s + v, 0])).toBe(55);
    expect(fold.bind(uniq)((s, v) => s + v, 0)).toBe(55);
  });
});
