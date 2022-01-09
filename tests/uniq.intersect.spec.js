import {Uniq} from "../src/index";

describe("intersect()", () => {
  test("should throw TypeError for invalid arguments", () => {
    const intersect = Uniq.prototype.intersect;
    expect(() => intersect.call(null, new Uniq())).toThrow(TypeError);
    expect(() => intersect.call(new Uniq(), [], [], { n: 10 })).toThrow(
      TypeError
    );
    expect(() => intersect.call(new Uniq(), { n: 10 })).toThrow(TypeError);
  });

  test("should return correct result", () => {
    const s1 = Uniq.of("a", "b", "c", "d");
    const s2 = Uniq.of("b", "d", "e");
    const s3 = Uniq.of("b", "c", "e");

    expect(s1.intersect()).toStrictEqual(Uniq.empty());
    expect(Uniq.of().intersect(Uniq.of())).toStrictEqual(Uniq.empty());

    expect(s1.intersect(s2)).toStrictEqual(Uniq.of("b", "d"));
    expect(Uniq.prototype.intersect.call(s2, s1)).toStrictEqual(
      Uniq.of("b", "d")
    );

    expect(s1.intersect(s2, s3)).toStrictEqual(Uniq.of("b"));
  });
});
