/* eslint-disable require-jsdoc */
/** @module */

/**
 * <h3> Uniq </h3>
 * Uniq extends Set and has all the methods of Set.
 * @example
 * const set = new Set([1, 1, 2, 2, 3, 3, 4, 4, 4]);
 * console.log(set);
 * // => { 1, 2, 3, 4}
 * console.log(Object.prototype.toString.call(set));
 * // => [object Set]
 * console.log(set instanceof Set)
 * // => true
 */
class Uniq extends Set {
  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return 'Set';
  }

  static get [Symbol.species]() {
    return Uniq;
  }
}

export default Uniq;
