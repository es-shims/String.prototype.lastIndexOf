'use strict';

var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2020/RequireObjectCoercible');
var callBind = require('call-bind');

var implementation = require('./implementation');

var getPolyfill = require('./polyfill');
var bound = callBind(getPolyfill());

var shim = require('./shim');

var boundShim = function lastIndexOf(string, searchString) {
	RequireObjectCoercible(string);
	return bound(string, searchString, arguments.length > 2 ? arguments[2] : Infinity);
};
define(boundShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundShim;
