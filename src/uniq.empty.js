import Uniq from './uniq.core';

/** @module */

/**
 * <h3> Uniq.empty() ⇒ Uniq </h3>
 * Creates a new set.
 * @return {Uniq} The new set.
 * @example
 * const uniq = Uniq.empty();
 */
function empty() {
  return new Uniq();
}

export default empty;
