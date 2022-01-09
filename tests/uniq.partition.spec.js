import {Uniq} from "../src/index";

describe("partition", () => {
  test("should throw TypeError for invalid arguments", () => {
    const partition = Uniq.prototype.partition;
    expect(() => partition.call(null)).toThrow(TypeError);
    expect(() => new Uniq().partition(null)).toThrow(TypeError);
    expect(() => new Uniq().partition(function* () {})).toThrow(TypeError);
  });

  test("should return correct result", () => {
    const uniq = Uniq.of(1, 2, 3, 4, 5, 6, 7);

    const predicate = (x) => x % 2 === 0;
    const expected = [Uniq.of(2, 4, 6), Uniq.of(1, 3, 5, 7)];
    expect(uniq.partition(predicate)).toStrictEqual(expected);

    const partition = Uniq.prototype.partition;
    const context = {
      n: 2,
      predicate(x) {
        return x % this.n === 0;
      },
    };

    expect(partition.call(uniq, context.predicate, context)).toStrictEqual(
      expected
    );
    expect(partition.apply(uniq, [context.predicate, context])).toStrictEqual(
      expected
    );
    expect(partition.bind(uniq)(context.predicate, context)).toStrictEqual(
      expected
    );
  });
});
