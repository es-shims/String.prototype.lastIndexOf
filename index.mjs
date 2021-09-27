import callBind from 'call-bind';
import RequireObjectCoercible from 'es-abstract/2020/RequireObjectCoercible.js';

import getPolyfill from 'string.prototype.lastindexof/polyfill';

const bound = callBind(getPolyfill());

export default function lastIndexOf(string, searchString) {
	RequireObjectCoercible(string);
	return bound(string, searchString, arguments.length > 2 ? arguments[2] : Infinity);
}

export { default as getPolyfill } from 'string.prototype.lastindexof/polyfill';
export { default as implementation } from 'string.prototype.lastindexof/implementation';
export { default as shim } from 'string.prototype.lastindexof/shim';
