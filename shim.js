'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimStringPrototypeLastIndexOf() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ lastIndexOf: polyfill },
		{ lastIndexOf: function () { return String.prototype.lastIndexOf !== polyfill; } }
	);
	return polyfill;
};
