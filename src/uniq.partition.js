import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from './throwHelper';
import Uniq from './uniq.core';

/** @module */

/**
 * <h3> partition(predicate) ⇒ Uniq </h3>
 * Splits the set into two sets containing the elements for which the given predicate returns true and false respectively.
 * @param {function} predicate The function to test set elements.
 * @return {Array} An array containing two split sets.
 * @exception {TypeError} When predicate is not a function or a generator function.
 */
function partition(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const left = new Uniq();
  const right = new Uniq();

  for (const v of this) {
    if (predicate.call(thisArg, v)) {
      left.add(v);
    } else {
      right.add(v);
    }
  }

  return [left, right];
}

export default partition;
