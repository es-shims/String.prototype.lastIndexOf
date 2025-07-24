'use strict';

var clamp = require('es-abstract/2025/clamp');
var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var StringLastIndexOf = require('es-abstract/2025/StringLastIndexOf');
var ToIntegerOrInfinity = require('es-abstract/2025/ToIntegerOrInfinity');
var ToNumber = require('es-abstract/2025/ToNumber');
var ToString = require('es-abstract/2025/ToString');

var $isNaN = require('es-abstract/helpers/isNaN');

module.exports = function lastIndexOf(searchString) {
	var O = RequireObjectCoercible(this); // step 1
	var S = ToString(O); // step 2
	var searchStr = ToString(searchString); // step 3
	var numPos = arguments.length > 1 ? ToNumber(arguments[1]) : NaN; // step 4
	var pos = $isNaN(numPos) ? Infinity : ToIntegerOrInfinity(numPos);

	var len = S.length; // step 7
	var searchLen = searchStr.length; // step 8
	if (len < searchLen) {
		return -1; // step 9
	}
	var start = clamp(pos, 0, len - searchLen); // step 19

	var result = StringLastIndexOf(S, searchStr, start); // step 11

	return result === 'NOT-FOUND' ? -1 : result;
};
