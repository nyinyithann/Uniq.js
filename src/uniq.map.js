import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from './throwHelper';
import Uniq from './uniq.core';

/** @module */

/**
 * <h3> map(mapping) ⇒ Uniq </h3>
 * Returns a new collection containing the results of applying the given function to each element of the input set.
 * @param {function} mapping The function to transform elements of the input set.
 * @return {Uniq} A set containing the transformed elements.
 * @exception {TypeError} When mapping is not a function or a generator function.
 * @example
 * const uniq_17 = Uniq.of(1, 2, 3, 4, 5);
 * const mappedResult = uniq_17.map(x => x + x);
 * console.log(mappedResult);
 * // => [Uniq] { 2, 4, 6, 8, 10 }
 */
function map(mapping) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(mapping, 'mapping');
  throwIfGeneratorFunction(mapping, 'mapping');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const uniq = new Uniq();
  for (const v of this) {
    uniq.add(mapping.call(thisArg, v));
  }

  return uniq;
}

export default map;
