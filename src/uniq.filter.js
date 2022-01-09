import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from './throwHelper';
import Uniq from './uniq.core';

/** @module */

/**
 * <h3> filter(predicate) ⇒ Uniq </h3>
 * Returns a new collection containing only the elements of the collection for which the given predicate returns True.
 * @param {function} predicate The function to test set elements.
 * @return {Uniq} The set containing only the elements for which predicate returns true.
 * @exception {TypeError} When predicate is not a function or a generator function.
 * @example
 * const uniq_5 = Uniq.of(1, 2, 3, 4, 5);
 * const filtered = uniq_5.filter(x => x > 2);
 * console.log(filtered);
 * // => [Uniq] { 3, 4, 5 }
 */
function filter(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const uniq = new Uniq();
  for (const v of this) {
    if (predicate.call(thisArg, v)) {
      uniq.add(v);
    }
  }

  return uniq;
}

export default filter;
