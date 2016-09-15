var cache = {},
	prefixes = ['webkit', 'Moz', 'ms'],
	reactPrefixes = ['Webkit', 'Moz', 'ms'],
	div;

module.exports = function preficks(property, isReact) {
	div = div || document.createElement('div');
	var cacheKey = property + (isReact ? 'React' : '');
	var prefixed = cache[cacheKey];
	if (!cache[cacheKey] && !(property in div.style)) {
		var suffix = property[0].toUpperCase() + property.substring(1);
		for (var i = prefixes.length; i--;) {
			var test = prefixes[i] + suffix;
			if (test in div.style) {
				prefixed = isReact ? reactPrefixes[i] + suffix : test;
				break;
			}
		}
	}
	return (cache[cacheKey] = prefixed || property);
}
