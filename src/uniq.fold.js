import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from './throwHelper';

/** @module */

/**
 * <h3> fold(folder, state) ⇒ value </h3>
 * Applies the given accumulating function to all the elements of the set.
 * @param {function} folder The accumulating function.
 * @param {*} state The initial state.
 * @return {*} The final state.
 * @exception {TypeError} When state is null or undefined. Or folder is not a function or folder is a generator function.
 * @example
 * const uniq_6 = Uniq.of(1, 2, 3, 4, 5);
 * const foldResult = uniq_6.fold((state, elem) => state - elem, 0);
 * console.log(foldResult);
 * // => -15
 */
function fold(folder, state) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(state, 'state');
  throwIfNotFunction(folder, 'folder');
  throwIfGeneratorFunction(folder, 'folder');

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  let s = state;

  for (const v of this) {
    s = folder.call(thisArg, s, v);
  }
  return s;
}

export default fold;
