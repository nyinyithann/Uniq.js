import Uniq from './uniq.core';

/** @module */

/**
 * <h3> Uniq.of() ⇒ Uniq </h3>
 * Creates a new set from a variable number arguments.
 * @return {Uniq} A newly created uniq.
 * @example
 * const uniq = Uniq.of(1, 1, 2, 2, 3, 4, 4, 5);
 * console.log(uniq);
 * // => [Uniq] { 1, 2, 3, 4, 5 };
 */
function of() {
  const uniq = new Uniq();

  for (let i = 0; i < arguments.length; i += 1) {
    uniq.add(arguments[i]);
  }

  return uniq;
}

export default of;
