import { throwIfNullOrUndefined } from './throwHelper';

/** @module */

/**
 * <h3> isSupersetOf(second) ⇒ boolean </h3>
 * Evaluates to "true" if all elements of the second set are in the source set.
 * @param {Uniq | Set} second The set to test against.
 * @return {boolean} True if the source set is a superset of the second.
 * @exception {TypeError} When second is null or undefined.
 * @example
 * const uniq_15 = Uniq.of(1,2,3);
 * const uniq_16 = Uniq.of(1,2,3);
 * const isSuperset = uniq_15.isSupersetOf(uniq_16);
 * console.log(`uniq_15 is a superset of uniq_16: ${isSuperset}`);
 * // => uniq_15 is a superset of uniq_16: true
 */
function isSupersetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');

  return second.every((a) => this.has(a));
}

export default isSupersetOf;
