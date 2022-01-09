import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from './throwHelper';

/** @module */

/**
 * <h3> foldRight(folder, state) ⇒ value </h3>
 * Applies the given accumulating function to all the elements of the set.
 * @param {function} folder The accumulating function.
 * @param {*} state The initial state.
 * @return {*} The final state.
 * @exception {TypeError} When state is null or undefined. Or folder is not a function or folder is a generator function.
 * @example
 * const uniq_7 = Uniq.of(1, 2, 3, 4, 5);
 * const foldRightResult = uniq_7.foldRight((elem, state) => elem - state, 0);
 * console.log(foldRightResult);
 * // => 3
 */
function foldRight(folder, state) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(state, 'state');
  throwIfNotFunction(folder, 'folder');
  throwIfGeneratorFunction(folder, 'folder');

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  let s = state;

  const thisArray = [...this.values()];
  for (let i = thisArray.length - 1; i >= 0; i -= 1) {
    s = folder.call(thisArg, thisArray[i], s);
  }
  return s;
}

export default foldRight;
