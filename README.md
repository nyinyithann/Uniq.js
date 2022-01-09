# Uniq.js 

Uniq.js is a JavaScript library for nodeJS and browser. Uniq.js extends JavaScript Set. The library is heavily inspired and influenced by F# Set module.

## Documentation

Please go to [Uniq APIs](/api.docs/uniq.api.md) to read more.

## Installation

```javascript
npm install @nyinyithann/uniq.js
```

## Getting started

`Uniq` extends `Set`. All built-in methods of `Set` can be used with `Uniq`. And `Uniq.js` provides additional methods.
```javascript
const somePrimes = new Uniq([2, 3, 5, 7, 11, 13]);
const someEvens = new Uniq([2, 4, 6, 8, 10]);
const evenPrime = somePrimes.intersect(someEvens);
console.log(evenPrime);
// => [Uniq] { 2 }
```

`Uniq` has the following methods.

#### Static Methods

```
of
empty
```

#### Instance Methods

```
isEmpty
exists
filter
map
fold
foldRight
every
partition
toArray
toMap
intersect
isProperSubsetOf
isProperSupersetOf
isSubsetOf
isSupersetOf
union
difference
```

### Author

Nyi Nyi Than - [@nyinyithann](https://www.linkedin.com/in/nyinyithan/)

### Credit

- [F# Collections](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections.html)

- [Exploring ES6](https://exploringjs.com/es6.html) By [Dr. Axel Rauschmayer](https://2ality.com/p/about.html)
- [Understanding ECMAScript 6](https://leanpub.com/understandinges6) By [Nicholas C. Zakas](https://humanwhocodes.com/)
- [Collection Pipeline](https://martinfowler.com/articles/collection-pipeline/)
  by [Martin Fowler](https://martinfowler.com/)
- [javascript.info](https://javascript.info/)

### License

MIT
