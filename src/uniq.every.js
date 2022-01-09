import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from './throwHelper';

/** @module */

/**
 * <h3> every(predicate) ⇒ boolean </h3>
 * Tests if all elements of the collection satisfy the given predicate
 * @param {function} predicate The function to test set elements.
 * @return {boolean} True if all elements of set satisfy predicate.
 * @exception {TypeError} When predicate is not a function or a generator function.
 * @example
 * const uniq_3 = Uniq.of(1, 3, 5);
 * const allOdds = uniq_3.every(x => x % 2 !== 0);
 * console.log(allOdds);
 * // => true
 */
function every(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  for (const v of this) {
    if (!predicate.call(thisArg, v)) {
      return false;
    }
  }

  return true;
}

export default every;
