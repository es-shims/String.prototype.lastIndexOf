# String.prototype.lastIndexOf <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES-spec-compliant `String.prototype.lastIndexOf`shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-string.prototype.lastindexof).

## Getting started

```sh
npm install --save string.prototype.lastindexof
```

## Usage/Examples

```js
var assert = require('assert');

assert('abcabc'.lastIndexOf('abc') === 3);
assert('abcabc'.lastIndexOf('abc', 0) === 0);
assert('abcabc'.lastIndexOf('abc', 1) === 0);
assert('abcabc'.lastIndexOf('abc', 2) === 0);
assert('abcabc'.lastIndexOf('abc', 3) === 3);
assert('abcabc'.lastIndexOf('abc', 4) === 3);
assert('abcabc'.lastIndexOf('abc', 5) === 3);
assert('abcabc'.lastIndexOf('abc', 6) === 3);

assert('abc'.lastIndexOf('x') === -1);
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/string.prototype.lastindexof
[npm-version-svg]: https://versionbadg.es/es-shims/String.prototype.lastIndexOf.svg
[deps-svg]: https://david-dm.org/es-shims/String.prototype.lastIndexOf.svg
[deps-url]: https://david-dm.org/es-shims/String.prototype.lastIndexOf
[dev-deps-svg]: https://david-dm.org/es-shims/String.prototype.lastIndexOf/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/String.prototype.lastIndexOf#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/string.prototype.lastindexof.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/string.prototype.lastindexof.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/string.prototype.lastindexof.svg
[downloads-url]: https://npm-stat.com/charts.html?package=string.prototype.lastindexof
[codecov-image]: https://codecov.io/gh/es-shims/String.prototype.lastIndexOf/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/String.prototype.lastIndexOf/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/String.prototype.lastIndexOf
[actions-url]: https://github.com/es-shims/String.prototype.lastIndexOf/actions
