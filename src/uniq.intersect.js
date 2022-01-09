import { throwIfNullOrUndefined } from './throwHelper';
import Uniq from './uniq.core';

/** @module */

/**
 * <h3> intersect(...others) ⇒ boolean </h3>
 * Computes the intersection of sets.
 * @param {Uniq | Set} others One or more of other sets.
 * @return {Uniq} The intersection of the sets.
 * @exception {TypeError} When others has one or more sources which are not of type Set or Uniq.
 * @example
 * const uniq_8 = Uniq.of(1, 2, 3, 4, 5, 6, 7);
 * const otherSet_1 = Uniq.of(1, 2, 3, 4);
 * const otherSet_2 = new Set([3, 4]);
 * const intersectResult = uniq_8.intersect(otherSet_1, otherSet_2);
 * console.log(intersectResult);
 * // => [Uniq] { 3, 4 }
 */
function intersect(...others) {
  throwIfNullOrUndefined(this, 'this');

  if (others.some((x) => !(x instanceof Set || x instanceof Uniq))) {
    throw new TypeError('arguments must contain instance of type Set or Uniq.');
  }

  const uniq = new Uniq();

  if (others.length === 0) {
    return uniq;
  }

  for (const a of this) {
    if (others.every((x) => x.has(a))) {
      uniq.add(a);
    }
  }

  return uniq;
}

export default intersect;
