import {Uniq} from "../src/index";

describe("map()", () => {
  test("throw exceptions for invalid args", () => {
    expect(() => Uniq.prototype.map.call(null)).toThrow(TypeError);
    expect(() => Uniq.prototype.map.call(new Uniq(), {})).toThrow(TypeError);
    expect(() => Uniq.prototype.map.call(new Uniq(), function* () {})).toThrow(
      TypeError
    );
  });

  test("should return correct result", () => {
    const uniq = Uniq.of(1, 2, 3, 4, 5, 6, 7);
    expect(uniq.map((x) => x + 1)).toStrictEqual(Uniq.of(2, 3, 4, 5, 6, 7, 8));
    expect(Uniq.empty().map((x) => x + 1)).toStrictEqual(Uniq.of());

    const context = {
      n: 2,
      predicate(v) {
        return v * this.n;
      },
    };
    const map = Uniq.prototype.map;
    expect(map.call(uniq, context.predicate, context)).toStrictEqual(
      Uniq.of(2, 4, 6, 8, 10, 12, 14)
    );
    expect(map.apply(uniq, [context.predicate, context])).toStrictEqual(
      Uniq.of(2, 4, 6, 8, 10, 12, 14)
    );
    expect(map.bind(uniq)(context.predicate, context)).toStrictEqual(
      Uniq.of(2, 4, 6, 8, 10, 12, 14)
    );
  });
});
