import { throwIfNullOrUndefined } from './throwHelper';
import Uniq from './uniq.core';

/** @module */

/**
 * <h3> union(...others) ⇒ Uniq </h3>
 * Computes the union of sets.
 * @param {Uniq | Set} others One or more of other sets.
 * @return {Uniq} The union of sets.
 * @exception {TypeError} When others has one or more sources which are not of type Set or Uniq.
 * @example
 * const uniq_18 = Uniq.of(1, 2, 3, 4, 5);
 * const uniq_19 = Uniq.of(11, 12, 13, 14, 15);
 * const union = uniq_18.union(uniq_19);
 * console.log(union);
 * // => [Uniq] { 1, 2, 3, 4, 5, 11, 12, 13, 14, 15 }
 */
function union(...others) {
  throwIfNullOrUndefined(this, 'this');

  if (others.some((x) => !(x instanceof Set || x instanceof Uniq))) {
    throw new TypeError('arguments must contain instance of type Set or Uniq.');
  }

  if (others.length === 0) {
    return this;
  }

  const uniq = new Uniq(this);
  for (let i = 0; i < others.length; i += 1) {
    for (const v of others[i]) {
      uniq.add(v);
    }
  }

  return uniq;
}

export default union;
