'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (
		String.prototype.lastIndexOf
		&& String.prototype.lastIndexOf.length === 1 // IE 8 bug
		&& 'abcあい'.lastIndexOf('あい', 2) === -1 // IE 9-11, Edge <= 18
	) {
		return String.prototype.lastIndexOf;
	}
	return implementation;
};
