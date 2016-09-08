var cache = {},
	prefixes = ['webkit', 'moz', 'ms'],
	div;

module.exports = function preficks(property) {
	div = div || document.createElement('div');
	var prefixed = cache[property];
	if (!cache[property] && !(property in div.style)) {
		var suffix = property[0].toUpperCase() + property.substring(1);
		for (var i = prefixes.length; i--;) {
			var test = prefixes[i] + suffix;
			if (test in div.style) {
				prefixed = test;
				break;
			}
		}
	}
	return (cache[property] = prefixed || property);
}
