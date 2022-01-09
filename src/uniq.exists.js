import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from './throwHelper';

/** @module */

/**
 * <h3> exists(predicate) ⇒ boolean </h3>
 * Tests if any element of the collection satisfies the given predicate.
 * @param {function} predicate The function to test set elements.
 * @return {boolean} True if any element of set satisfies predicate.
 * @example
 * const uniq_4 = Uniq.of(1, 2, 3, 4, 5);
 * const hasEvenNum = uniq_4.exists(x => x % 2 === 0);
 * console.log(hasEvenNum);
 * // => true
 */
function exists(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  if (this.size === 0) {
    return false;
  }

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  for (const v of this) {
    if (predicate.call(thisArg, v)) {
      return true;
    }
  }

  return false;
}

export default exists;
