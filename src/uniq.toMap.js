import { throwIfNullOrUndefined } from './throwHelper';

/** @module */

/**
 * <h3> toMap() ⇒ Map </h3>
 * Returns a Map containing all the elements of the set.
 * @return {Map} The result Map.
 * @example
 * const uniq_21 = Uniq.of(1, 2, 3, 4, 5);
 * const map = uniq_21.toMap();
 * console.log(map);
 * // => Map(5) { 1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5 }
 */
function toMap() {
  throwIfNullOrUndefined(this, 'this');
  return new Map(this.entries());
}

export default toMap;
