/* eslint-disable require-jsdoc */

/** @module */

/**
 * <h3> Uniq </h3>
 * Uniq extends Set and has all the methods of Set.
 * @example
 * const set = new Set([1, 1, 2, 2, 3, 3, 4, 4, 4]);
 * console.log(set);
 * // => { 1, 2, 3, 4}
 * console.log(Object.prototype.toString.call(set));
 * // => [object Set]
 * console.log(set instanceof Set)
 * // => true
 */
class Uniq extends Set {
  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return 'Set';
  }

  static get [Symbol.species]() {
    return Uniq;
  }

}

/* eslint-disable */
function isNull(value) {
  return value == null;
}
function isNotNull(value) {
  return !isNull(value);
}
function isFunction(value) {
  return typeof value === 'function';
}
function isGeneratorFunction(value) {
  return isNotNull(value) && value[Symbol.toStringTag] === 'GeneratorFunction';
}

/* eslint-disable */
function throwIfNullOrUndefined(value, name = "value") {
  if (value == null || typeof value === "undefined") {
    throw new TypeError(`${name} is null or not defined.`);
  }
}
function throwIfNotFunction(value, name = "value") {
  if (!isFunction(value)) {
    throw new TypeError(`${name} is not a function.`);
  }
}
function throwIfGeneratorFunction(value, name = "value") {
  if (isGeneratorFunction(value)) {
    throw new TypeError(`${name} is a generator function. It should be a normal function.`);
  }
}

/** @module */

/**
 * <h1> Uniq APIs </h1>
 * <hr/>
 * <h3> difference(other) ⇒ Uniq </h3>
 * Returns a new set with the elements of the second set removed from the first.
 * @param {Uniq | Set} other The set whose elements will be removed.
 * @return {Uniq} The set with the elements of other set removed from the source set.
 * @exception {TypeError} When other is null or undefined.
 * @example
 * const uniq_1 = new Uniq([1, 2, 3, 4, 5]);
 * const uniq_2 = new Uniq([1, 2]);
 * const difference = uniq_1.difference(uniq_2);
 * console.log(difference);
 * // => [Uniq] { 3, 4, 5 }
 */

function difference(other) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(other, 'other');
  const uniq = new Uniq();

  for (const a of this) {
    if (!other.has(a)) {
      uniq.add(a);
    }
  }

  return uniq;
}

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

/** @module */

/**
 * <h3> intersect(...others) ⇒ boolean </h3>
 * Computes the intersection of sets.
 * @param {Uniq | Set} others One or more of other sets.
 * @return {Uniq} The intersection of the sets.
 * @exception {TypeError} When others has one or more sources which are not of type Set or Uniq.
 * @example
 * const uniq_8 = Uniq.of(1, 2, 3, 4, 5, 6, 7);
 * const otherSet_1 = Uniq.of(1, 2, 3, 4);
 * const otherSet_2 = new Set([3, 4]);
 * const intersectResult = uniq_8.intersect(otherSet_1, otherSet_2);
 * console.log(intersectResult);
 * // => [Uniq] { 3, 4 }
 */

function intersect(...others) {
  throwIfNullOrUndefined(this, 'this');

  if (others.some(x => !(x instanceof Set || x instanceof Uniq))) {
    throw new TypeError('arguments must contain instance of type Set or Uniq.');
  }

  const uniq = new Uniq();

  if (others.length === 0) {
    return uniq;
  }

  for (const a of this) {
    if (others.every(x => x.has(a))) {
      uniq.add(a);
    }
  }

  return uniq;
}

/** @module */

/**
 * <h3> isEmpty() ⇒ boolean </h3>
 * Check if the set is empty.
 * @return {boolean} True if the set is empty.
 * @example
 * const uniq = Uniq.of(1, 2, 3, 4);
 * console.log(uniq.isEmpty());
 * // => false
 */

function isEmpty() {
  throwIfNullOrUndefined(this, 'this');
  return this.size === 0;
}

/** @module */

/**
 * <h3> isProperSubsetOf(second) ⇒ boolean </h3>
 * Evaluates to "true" if all elements of the source set are in the second, and at least one element of the second is not in the source set.
 * @param {Uniq | Set} second The second set to test against.
 * @return {boolean} True if the source set is a proper subset of the second.
 * @exception {TypeError} When second is null or undefined.
 * @example
 * const uniq_9 = Uniq.of(1, 2, 3);
 * const uniq_10 = Uniq.of(1, 2, 3, 4);
 * const isProperSubSet = uniq_9.isProperSubsetOf(uniq_10);
 * console.log(`uniq_9 is a proper subset of uniq_10: ${isProperSubSet}`);
 * // => uniq_9 is a proper subset of uniq_10: true
 */

function isProperSubsetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');
  return this.every(a => second.has(a)) && second.exists(b => !this.has(b));
}

/** @module */

/**
 * <h3> isProperSupersetOf(second) ⇒ boolean </h3>
 * Evaluates to "true" if all elements of the second set are in the source set, and at least one element of the source set is not in the second set.
 * @param {Uniq | Set} second The second set to test against.
 * @return {boolean} True if the source set is a proper superset of the second.
 * @exception {TypeError} When second is null or undefined.
 * @example
 * const uniq_11 = Uniq.of(1, 2, 3, 4);
 * const uniq_12 = Uniq.of(1, 2, 3);
 * const isProperSuperset = uniq_11.isProperSupersetOf(uniq_12);
 * console.log(`uniq_11 is a proper superset of uniq_12: ${isProperSuperset}`);
 * // => uniq_11 is a proper superset of uniq_12: true
 */

function isProperSupersetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');
  return second.every(a => this.has(a)) && this.exists(b => !second.has(b));
}

/** @module */

/**
 * <h3> isSubsetOf(second) ⇒ boolean </h3>
 * Evaluates to "true" if all elements of the source set are in the second.
 * @param {function} second The set to test against.
 * @return {boolean} True if the source set is a subset of the second.
 * @exception {TypeError} When second is null or undefined.
 * @example
 * const uniq_13 = Uniq.of(1, 2, 3);
 * const uniq_14 = Uniq.of(1, 2, 3, 4);
 * const isSubset = uniq_13.isSubsetOf(uniq_14);
 * console.log(`uniq_13 is a subset of uniq_14: ${isSubset}`);
 * // => uniq_13 is a subset of uniq_14: true
 */

function isSubsetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');
  return this.every(a => second.has(a));
}

/** @module */

/**
 * <h3> isSupersetOf(second) ⇒ boolean </h3>
 * Evaluates to "true" if all elements of the second set are in the source set.
 * @param {Uniq | Set} second The set to test against.
 * @return {boolean} True if the source set is a superset of the second.
 * @exception {TypeError} When second is null or undefined.
 * @example
 * const uniq_15 = Uniq.of(1,2,3);
 * const uniq_16 = Uniq.of(1,2,3);
 * const isSuperset = uniq_15.isSupersetOf(uniq_16);
 * console.log(`uniq_15 is a superset of uniq_16: ${isSuperset}`);
 * // => uniq_15 is a superset of uniq_16: true
 */

function isSupersetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');
  return second.every(a => this.has(a));
}

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

/** @module */

/**
 * <h3> toArray() ⇒ Array </h3>
 * Returns an array containing all the elements of the set.
 * @return {Array} The result array.
 * @example
 * const uniq = Uniq.of(1, 2, 3);
 * const array = uniq.toArray();
 * console.log(array);
 * // => [ 1, 2, 3 ]
 */

function toArray() {
  throwIfNullOrUndefined(this, 'this');
  return [...this.values()];
}

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

/** @module */

/**
 * <h3> union(...others) ⇒ Uniq </h3>
 * Computes the union of sets.
 * @param {Uniq | Set} others One or more of other sets.
 * @return {Uniq} The union of sets.
 * @exception {TypeError} When others has one or more sources which are not of type Set or Uniq.
 * @example
 * const uniq_18 = Uniq.of(1, 2, 3, 4, 5);
 * const uniq_19 = Uniq.of(11, 12, 13, 14, 15);
 * const union = uniq_18.union(uniq_19);
 * console.log(union);
 * // => [Uniq] { 1, 2, 3, 4, 5, 11, 12, 13, 14, 15 }
 */

function union(...others) {
  throwIfNullOrUndefined(this, 'this');

  if (others.some(x => !(x instanceof Set || x instanceof Uniq))) {
    throw new TypeError('arguments must contain instance of type Set or Uniq.');
  }

  if (others.length === 0) {
    return this;
  }

  const uniq = new Uniq(this);

  for (let i = 0; i < others.length; i += 1) {
    for (const v of others[i]) {
      uniq.add(v);
    }
  }

  return uniq;
}

Uniq.empty = empty;
Uniq.of = of;
Uniq.prototype.isEmpty = isEmpty;
Uniq.prototype.exists = exists;
Uniq.prototype.filter = filter;
Uniq.prototype.map = map;
Uniq.prototype.fold = fold;
Uniq.prototype.foldRight = foldRight;
Uniq.prototype.every = every;
Uniq.prototype.partition = partition;
Uniq.prototype.toArray = toArray;
Uniq.prototype.toMap = toMap;
Uniq.prototype.intersect = intersect;
Uniq.prototype.isProperSubsetOf = isProperSubsetOf;
Uniq.prototype.isProperSupersetOf = isProperSupersetOf;
Uniq.prototype.isSubsetOf = isSubsetOf;
Uniq.prototype.isSupersetOf = isSupersetOf;
Uniq.prototype.union = union;
Uniq.prototype.difference = difference;

export { Uniq };
