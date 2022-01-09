  <h3> Uniq </h3>
Uniq extends Set and has all the methods of Set.

<h1> Uniq APIs </h1>
<hr/>
<h3> difference(other) ⇒ Uniq </h3>
Returns a new set with the elements of the second set removed from the first.

**Returns**: <code>Uniq</code> - The set with the elements of other set removed from the source set.  
**Throws**:

- <code>TypeError</code> When other is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| other | <code>Uniq</code> \| <code>Set</code> | The set whose elements will be removed. |

**Example**  
```js
const uniq_1 = new Uniq([1, 2, 3, 4, 5]);
const uniq_2 = new Uniq([1, 2]);
const difference = uniq_1.difference(uniq_2);
console.log(difference);
// => [Uniq] { 3, 4, 5 }
```
<h3> Uniq.empty() ⇒ Uniq </h3>
Creates a new set.

**Returns**: <code>Uniq</code> - The new set.  
**Example**  
```js
const uniq = Uniq.empty();
```
<h3> every(predicate) ⇒ boolean </h3>
Tests if all elements of the collection satisfy the given predicate

**Returns**: <code>boolean</code> - True if all elements of set satisfy predicate.  
**Throws**:

- <code>TypeError</code> When predicate is not a function or a generator function.


| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>function</code> | The function to test set elements. |

**Example**  
```js
const uniq_3 = Uniq.of(1, 3, 5);
const allOdds = uniq_3.every(x => x % 2 !== 0);
console.log(allOdds);
// => true
```
<h3> exists(predicate) ⇒ boolean </h3>
Tests if any element of the collection satisfies the given predicate.

**Returns**: <code>boolean</code> - True if any element of set satisfies predicate.  

| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>function</code> | The function to test set elements. |

**Example**  
```js
const uniq_4 = Uniq.of(1, 2, 3, 4, 5);
const hasEvenNum = uniq_4.exists(x => x % 2 === 0);
console.log(hasEvenNum);
// => true
```
<h3> filter(predicate) ⇒ Uniq </h3>
Returns a new collection containing only the elements of the collection for which the given predicate returns True.

**Returns**: <code>Uniq</code> - The set containing only the elements for which predicate returns true.  
**Throws**:

- <code>TypeError</code> When predicate is not a function or a generator function.


| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>function</code> | The function to test set elements. |

**Example**  
```js
const uniq_5 = Uniq.of(1, 2, 3, 4, 5);
const filtered = uniq_5.filter(x => x > 2);
console.log(filtered);
// => [Uniq] { 3, 4, 5 }
```
<h3> fold(folder, state) ⇒ value </h3>
Applies the given accumulating function to all the elements of the set.

**Returns**: <code>\*</code> - The final state.  
**Throws**:

- <code>TypeError</code> When state is null or undefined. Or folder is not a function or folder is a generator function.


| Param | Type | Description |
| --- | --- | --- |
| folder | <code>function</code> | The accumulating function. |
| state | <code>\*</code> | The initial state. |

**Example**  
```js
const uniq_6 = Uniq.of(1, 2, 3, 4, 5);
const foldResult = uniq_6.fold((state, elem) => state - elem, 0);
console.log(foldResult);
// => -15
```
<h3> foldRight(folder, state) ⇒ value </h3>
Applies the given accumulating function to all the elements of the set.

**Returns**: <code>\*</code> - The final state.  
**Throws**:

- <code>TypeError</code> When state is null or undefined. Or folder is not a function or folder is a generator function.


| Param | Type | Description |
| --- | --- | --- |
| folder | <code>function</code> | The accumulating function. |
| state | <code>\*</code> | The initial state. |

**Example**  
```js
const uniq_7 = Uniq.of(1, 2, 3, 4, 5);
const foldRightResult = uniq_7.foldRight((elem, state) => elem - state, 0);
console.log(foldRightResult);
// => 3
```
<h3> intersect(...others) ⇒ boolean </h3>
Computes the intersection of sets.

**Returns**: <code>Uniq</code> - The intersection of the sets.  
**Throws**:

- <code>TypeError</code> When others has one or more sources which are not of type Set or Uniq.


| Param | Type | Description |
| --- | --- | --- |
| ...others | <code>Uniq</code> \| <code>Set</code> | One or more of other sets. |

**Example**  
```js
const uniq_8 = Uniq.of(1, 2, 3, 4, 5, 6, 7);
const otherSet_1 = Uniq.of(1, 2, 3, 4);
const otherSet_2 = new Set([3, 4]);
const intersectResult = uniq_8.intersect(otherSet_1, otherSet_2);
console.log(intersectResult);
// => [Uniq] { 3, 4 }
```
<h3> isEmpty() ⇒ boolean </h3>
Check if the set is empty.

**Returns**: <code>boolean</code> - True if the set is empty.  
**Example**  
```js
const uniq = Uniq.of(1, 2, 3, 4);
console.log(uniq.isEmpty());
// => false
```
<h3> isProperSubsetOf(second) ⇒ boolean </h3>
Evaluates to "true" if all elements of the source set are in the second, and at least one element of the second is not in the source set.

**Returns**: <code>boolean</code> - True if the source set is a proper subset of the second.  
**Throws**:

- <code>TypeError</code> When second is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| second | <code>Uniq</code> \| <code>Set</code> | The second set to test against. |

**Example**  
```js
const uniq_9 = Uniq.of(1, 2, 3);
const uniq_10 = Uniq.of(1, 2, 3, 4);
const isProperSubSet = uniq_9.isProperSubsetOf(uniq_10);
console.log(`uniq_9 is a proper subset of uniq_10: ${isProperSubSet}`);
// => uniq_9 is a proper subset of uniq_10: true
```
<h3> isProperSupersetOf(second) ⇒ boolean </h3>
Evaluates to "true" if all elements of the second set are in the source set, and at least one element of the source set is not in the second set.

**Returns**: <code>boolean</code> - True if the source set is a proper superset of the second.  
**Throws**:

- <code>TypeError</code> When second is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| second | <code>Uniq</code> \| <code>Set</code> | The second set to test against. |

**Example**  
```js
const uniq_11 = Uniq.of(1, 2, 3, 4);
const uniq_12 = Uniq.of(1, 2, 3);
const isProperSuperset = uniq_11.isProperSupersetOf(uniq_12);
console.log(`uniq_11 is a proper superset of uniq_12: ${isProperSuperset}`);
// => uniq_11 is a proper superset of uniq_12: true
```
<h3> isSubsetOf(second) ⇒ boolean </h3>
Evaluates to "true" if all elements of the source set are in the second.

**Returns**: <code>boolean</code> - True if the source set is a subset of the second.  
**Throws**:

- <code>TypeError</code> When second is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| second | <code>function</code> | The set to test against. |

**Example**  
```js
const uniq_13 = Uniq.of(1, 2, 3);
const uniq_14 = Uniq.of(1, 2, 3, 4);
const isSubset = uniq_13.isSubsetOf(uniq_14);
console.log(`uniq_13 is a subset of uniq_14: ${isSubset}`);
// => uniq_13 is a subset of uniq_14: true
```
<h3> isSupersetOf(second) ⇒ boolean </h3>
Evaluates to "true" if all elements of the second set are in the source set.

**Returns**: <code>boolean</code> - True if the source set is a superset of the second.  
**Throws**:

- <code>TypeError</code> When second is null or undefined.


| Param | Type | Description |
| --- | --- | --- |
| second | <code>Uniq</code> \| <code>Set</code> | The set to test against. |

**Example**  
```js
const uniq_15 = Uniq.of(1,2,3);
const uniq_16 = Uniq.of(1,2,3);
const isSuperset = uniq_15.isSupersetOf(uniq_16);
console.log(`uniq_15 is a superset of uniq_16: ${isSuperset}`);
// => uniq_15 is a superset of uniq_16: true
```
<h3> map(mapping) ⇒ Uniq </h3>
Returns a new collection containing the results of applying the given function to each element of the input set.

**Returns**: <code>Uniq</code> - A set containing the transformed elements.  
**Throws**:

- <code>TypeError</code> When mapping is not a function or a generator function.


| Param | Type | Description |
| --- | --- | --- |
| mapping | <code>function</code> | The function to transform elements of the input set. |

**Example**  
```js
const uniq_17 = Uniq.of(1, 2, 3, 4, 5);
const mappedResult = uniq_17.map(x => x + x);
console.log(mappedResult);
// => [Uniq] { 2, 4, 6, 8, 10 }
```
<h3> Uniq.of() ⇒ Uniq </h3>
Creates a new set from a variable number arguments.

**Returns**: <code>Uniq</code> - A newly created uniq.  
**Example**  
```js
const uniq = Uniq.of(1, 1, 2, 2, 3, 4, 4, 5);
console.log(uniq);
// => [Uniq] { 1, 2, 3, 4, 5 };
```
<h3> partition(predicate) ⇒ Uniq </h3>
Splits the set into two sets containing the elements for which the given predicate returns true and false respectively.

**Returns**: <code>Array</code> - An array containing two split sets.  
**Throws**:

- <code>TypeError</code> When predicate is not a function or a generator function.


| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>function</code> | The function to test set elements. |

<h3> toArray() ⇒ Array </h3>
Returns an array containing all the elements of the set.

**Returns**: <code>Array</code> - The result array.  
**Example**  
```js
const uniq = Uniq.of(1, 2, 3);
const array = uniq.toArray();
console.log(array);
// => [ 1, 2, 3 ]
```
<h3> toMap() ⇒ Map </h3>
Returns a Map containing all the elements of the set.

**Returns**: <code>Map</code> - The result Map.  
**Example**  
```js
const uniq_21 = Uniq.of(1, 2, 3, 4, 5);
const map = uniq_21.toMap();
console.log(map);
// => Map(5) { 1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5 }
```
<h3> union(...others) ⇒ Uniq </h3>
Computes the union of sets.

**Returns**: <code>Uniq</code> - The union of sets.  
**Throws**:

- <code>TypeError</code> When others has one or more sources which are not of type Set or Uniq.


| Param | Type | Description |
| --- | --- | --- |
| ...others | <code>Uniq</code> \| <code>Set</code> | One or more of other sets. |

**Example**  
```js
const uniq_18 = Uniq.of(1, 2, 3, 4, 5);
const uniq_19 = Uniq.of(11, 12, 13, 14, 15);
const union = uniq_18.union(uniq_19);
console.log(union);
// => [Uniq] { 1, 2, 3, 4, 5, 11, 12, 13, 14, 15 }
```
