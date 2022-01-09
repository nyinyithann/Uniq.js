import {Uniq} from "../src/index";

describe("foldRight()", () => {
  test("should throw TypeError for invalid arguments", () => {
    const foldRight = Uniq.prototype.foldRight;
    expect(() => foldRight.call(null)).toThrow(TypeError);
    expect(() => new Uniq().foldRight(null, 0)).toThrow(TypeError);
    expect(() => new Uniq().foldRight(function* () {}, 0)).toThrow(TypeError);
    expect(() => new Uniq().foldRight((acc, v) => acc + v, null)).toThrow(
      TypeError
    );
  });

  test("should return correct result", () => {
    const uniq = Uniq.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(uniq.foldRight((v, s) => v + s, 0)).toBe(55);
    expect(Uniq.empty().foldRight((v, s) => v + s, 100)).toBe(100);

    const foldRight = Uniq.prototype.foldRight;
    expect(foldRight.call(uniq, (v, s) => v + s, 0)).toBe(55);
    expect(foldRight.apply(uniq, [(v, s) => v + s, 0])).toBe(55);
    expect(foldRight.bind(uniq)((v, s) => v + s, 0)).toBe(55);
  });
});
