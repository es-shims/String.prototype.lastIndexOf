'use strict';

module.exports = function (lastIndexOf, t) {
	var chunk = 'abc';
	var s = chunk + chunk;
	t.equal(lastIndexOf(s, chunk), chunk.length, 'undefined pos gives expected result');
	for (var i = 0; i <= s.length + 1; i += 1) {
		t.equal(
			lastIndexOf(s, chunk, i),
			i > 2 ? 3 : 0,
			'index ' + i + ' gives expected index'
		);
	}

	t.equal(lastIndexOf(s, s + chunk), -1, 'not-present substring yields -1');

	t.equal(lastIndexOf('', ''), 0, 'empty string inside empty string yields 0');
	t.equal(lastIndexOf('', 'a'), -1, 'non-empty string inside empty string yields -1');
	t.equal(lastIndexOf(chunk, ''), chunk.length, 'empty string inside non-empty string yields substring length');

	t.test('unicode', function (st) {
		// avoids an IE IE 9-11, Edge <= 18 bug
		st.equal(lastIndexOf('abcあい', 'あい'), 3, 'works with no pos');
		st.equal(lastIndexOf('abcあい', 'あい', 0), -1, 'works with pos 0');
		st.equal(lastIndexOf('abcあい', 'あい', 1), -1, 'works with pos 1');
		st.equal(lastIndexOf('abcあい', 'あい', 2), -1, 'works with pos 2');
		st.equal(lastIndexOf('abcあい', 'あい', 3), 3, 'works with pos 3');

		st.end();
	});
};
