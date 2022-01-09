import { throwIfNullOrUndefined } from './throwHelper';

/** @module */

/**
 * <h3> isProperSubsetOf(second) ⇒ boolean </h3>
 * Evaluates to "true" if all elements of the source set are in the second, and at least one element of the second is not in the source set.
 * @param {Uniq | Set} second The second set to test against.
 * @return {boolean} True if the source set is a proper subset of the second.
 * @exception {TypeError} When second is null or undefined.
 * @example
 * const uniq_9 = Uniq.of(1, 2, 3);
 * const uniq_10 = Uniq.of(1, 2, 3, 4);
 * const isProperSubSet = uniq_9.isProperSubsetOf(uniq_10);
 * console.log(`uniq_9 is a proper subset of uniq_10: ${isProperSubSet}`);
 * // => uniq_9 is a proper subset of uniq_10: true
 */
function isProperSubsetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');

  return this.every((a) => second.has(a)) && second.exists((b) => !this.has(b));
}

export default isProperSubsetOf;
