import {Uniq} from "../src/index";

describe("exists()", () => {
  test("throw exceptions for invalid args", () => {
    expect(() => Uniq.prototype.exists.call(null)).toThrow(TypeError);
    expect(() => Uniq.prototype.exists.call(new Uniq(), {})).toThrow(TypeError);
    expect(() =>
      Uniq.prototype.exists.call(new Uniq(), function* () {})
    ).toThrow(TypeError);
  });

  test("should check if a value exists", () => {
    const uniq = Uniq.of(1, 2, 3, 4, 5, 6, 7);
    expect(uniq.exists((x) => x > 2)).toBe(true);
    expect(uniq.exists((x) => x > 22)).not.toBe(true);
    expect(Uniq.empty().exists((x) => x > 2)).toBe(false);

    const context = {
      n: 1,
      predicate(v) {
        return v > this.n;
      },
    };
    const exists = Uniq.prototype.exists;
    expect(exists.call(uniq, context.predicate, context)).toBe(true);
    expect(exists.apply(uniq, [context.predicate, context])).toBe(true);
    expect(exists.bind(uniq)(context.predicate, context)).toBe(true);
  });
});
