import {Uniq} from "../src/index";

describe("every()", () => {
  test("throw exceptions for invalid args", () => {
    expect(() => Uniq.prototype.every.call(null)).toThrow(TypeError);
    expect(() => Uniq.prototype.every.call(new Uniq(), {})).toThrow(TypeError);
    expect(() =>
      Uniq.prototype.every.call(new Uniq(), function* () {})
    ).toThrow(TypeError);
  });

  test("should return correct result", () => {
    const uniq = Uniq.of(1, 2, 3, 4, 5, 6, 7);
    expect(uniq.every((x) => x > 0)).toBe(true);
    expect(uniq.every((x) => x > 2)).not.toBe(true);
    expect(Uniq.empty().every((x) => x > 2)).toBe(true);

    const context = {
      n: 1,
      predicate(v) {
        return v >= this.n;
      },
    };
    const every = Uniq.prototype.every;
    expect(every.call(uniq, context.predicate, context)).toBe(true);
    expect(every.apply(uniq, [context.predicate, context])).toBe(true);
    expect(every.bind(uniq)(context.predicate, context)).toBe(true);
  });
});
