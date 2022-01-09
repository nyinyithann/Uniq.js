import { throwIfNullOrUndefined } from './throwHelper';

/** @module */

/**
 * <h3> isProperSupersetOf(second) ⇒ boolean </h3>
 * Evaluates to "true" if all elements of the second set are in the source set, and at least one element of the source set is not in the second set.
 * @param {Uniq | Set} second The second set to test against.
 * @return {boolean} True if the source set is a proper superset of the second.
 * @exception {TypeError} When second is null or undefined.
 * @example
 * const uniq_11 = Uniq.of(1, 2, 3, 4);
 * const uniq_12 = Uniq.of(1, 2, 3);
 * const isProperSuperset = uniq_11.isProperSupersetOf(uniq_12);
 * console.log(`uniq_11 is a proper superset of uniq_12: ${isProperSuperset}`);
 * // => uniq_11 is a proper superset of uniq_12: true
 */
function isProperSupersetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');

  return second.every((a) => this.has(a)) && this.exists((b) => !second.has(b));
}

export default isProperSupersetOf;
