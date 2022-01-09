import { throwIfNullOrUndefined } from './throwHelper';

/** @module */

/**
 * <h3> isEmpty() ⇒ boolean </h3>
 * Check if the set is empty.
 * @return {boolean} True if the set is empty.
 * @example
 * const uniq = Uniq.of(1, 2, 3, 4);
 * console.log(uniq.isEmpty());
 * // => false
 */
function isEmpty() {
  throwIfNullOrUndefined(this, 'this');

  return this.size === 0;
}

export default isEmpty;
