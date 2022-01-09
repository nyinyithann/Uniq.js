import {Uniq} from "../src/index";

describe("Uniq.of()", () => {
  test("should return a uniq", () => {
    const uniq = Uniq.of(1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5);
    expect(uniq).toStrictEqual(new Uniq([1, 2, 3, 4, 5]));
    expect(uniq.size).toBe(5);
    expect(uniq.isEmpty()).not.toBe(true);
  });
});
