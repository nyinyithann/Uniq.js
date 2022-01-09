import {Uniq} from "../src/index";

describe("filter()", () => {
  test("throw exceptions for invalid args", () => {
    expect(() => Uniq.prototype.filter.call(null)).toThrow(TypeError);
    expect(() => Uniq.prototype.filter.call(new Uniq(), {})).toThrow(TypeError);
    expect(() =>
      Uniq.prototype.filter.call(new Uniq(), function* () {})
    ).toThrow(TypeError);
  });

  test("should return correct result", () => {
    const uniq = Uniq.of(1, 2, 3, 4, 5, 6, 7);
    expect(uniq.filter((x) => x % 2 === 0)).toStrictEqual(Uniq.of(2, 4, 6));
    expect(Uniq.empty().filter((x) => x > 1)).toStrictEqual(Uniq.of());

    const context = {
      n: 4,
      predicate(v) {
        return v > this.n;
      },
    };
    const filter = Uniq.prototype.filter;
    expect(filter.call(uniq, context.predicate, context)).toStrictEqual(
      Uniq.of(5, 6, 7)
    );
    expect(filter.apply(uniq, [context.predicate, context])).toStrictEqual(
      Uniq.of(5, 6, 7)
    );
    expect(filter.bind(uniq)(context.predicate, context)).toStrictEqual(
      Uniq.of(5, 6, 7)
    );
  });
});
