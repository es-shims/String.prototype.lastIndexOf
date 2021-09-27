'use strict';

var RequireObjectCoercible = require('es-abstract/2020/RequireObjectCoercible');
var ToInteger = require('es-abstract/2020/ToInteger');
var ToNumber = require('es-abstract/2020/ToNumber');
var ToString = require('es-abstract/2020/ToString');

var $isNaN = require('es-abstract/helpers/isNaN');

var GetIntrinsic = require('get-intrinsic');

var min = GetIntrinsic('%Math.min%');
var max = GetIntrinsic('%Math.max%');

var callBound = require('call-bind/callBound');

var $slice = callBound('String.prototype.slice');

module.exports = function lastIndexOf(searchString) {
	var O = RequireObjectCoercible(this); // step 1
	var S = ToString(O); // step 2
	var searchStr = ToString(searchString); // step 3
	var numPos = ToNumber(arguments.length > 1 ? arguments[1] : NaN); // step 4
	var pos = $isNaN(numPos) ? Infinity : ToInteger(numPos);

	var len = S.length; // step 7
	var start = min(max(0, pos), len); // step 8
	var searchLen = searchStr.length; // step 9

	// 10. Let k be the largest possible non-negative integer not larger than start such that k + searchLen ≤ len, and for all non-negative integers j such that j < searchLen, the code unit at index k + j within S is the same as the code unit at index j within searchStr; but if there is no such integer, let k be -1.
	for (var i = start; i >= 0; i -= 1) {
		if ($slice(S, i, i + searchLen) === searchString) {
			return i;
		}
	}
	return -1;
};
