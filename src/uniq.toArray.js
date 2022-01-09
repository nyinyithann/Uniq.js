import { throwIfNullOrUndefined } from './throwHelper';

/** @module */

/**
 * <h3> toArray() ⇒ Array </h3>
 * Returns an array containing all the elements of the set.
 * @return {Array} The result array.
 * @example
 * const uniq = Uniq.of(1, 2, 3);
 * const array = uniq.toArray();
 * console.log(array);
 * // => [ 1, 2, 3 ]
 */
function toArray() {
  throwIfNullOrUndefined(this, 'this');

  return [...this.values()];
}

export default toArray;
