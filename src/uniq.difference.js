import { throwIfNullOrUndefined } from './throwHelper';
import Uniq from './uniq.core';

/** @module */

/**
 * <h1> Uniq APIs </h1>
 * <hr/>
 * <h3> difference(other) ⇒ Uniq </h3>
 * Returns a new set with the elements of the second set removed from the first.
 * @param {Uniq | Set} other The set whose elements will be removed.
 * @return {Uniq} The set with the elements of other set removed from the source set.
 * @exception {TypeError} When other is null or undefined.
 * @example
 * const uniq_1 = new Uniq([1, 2, 3, 4, 5]);
 * const uniq_2 = new Uniq([1, 2]);
 * const difference = uniq_1.difference(uniq_2);
 * console.log(difference);
 * // => [Uniq] { 3, 4, 5 }
 */
function difference(other) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(other, 'other');

  const uniq = new Uniq();
  for (const a of this) {
    if (!other.has(a)) {
      uniq.add(a);
    }
  }
  return uniq;
}

export default difference;
