var expect = require('chai').expect;
var stub = require('sinon').stub;
var preficks = require('./index');

var props = {
	MS: 'msTransform',
	MOZ: 'MozAppearance',
	WEBKIT: 'webkitBoxReflect',
	SUPPORTED: 'display'
};

var reactProps = {
	MOZ: 'MozAppearance',
	WEBKIT: 'WebkitBoxReflect'
};

var mock = Object.keys(props).reduce(function(acc, prop) {
	acc[props[prop]] = true;
	return acc;
}, {});

GLOBAL.document = {
	createElement: function() {
		return {
			style: mock
		};
	}
};

describe('preficks()', function() {
	it('should return unprefixed if supported', function() {
		expect(preficks(props.SUPPORTED)).to.equal(props.SUPPORTED);
	});

	it('should check for and return ms prefix', function() {
		expect(preficks('transform')).to.equal(props.MS);
	});

	it('should check for and return moz prefix', function() {
		expect(preficks('appearance')).to.equal(props.MOZ);
	});

	it('should return capital Moz if second param set to true', function() {
		expect(preficks('appearance', true)).to.equal(reactProps.MOZ);
	});

	it('should check for and return webkit prefix', function() {
		expect(preficks('boxReflect')).to.equal(props.WEBKIT);
	});

	it('should return capital Webkit if second param set to true', function() {
		expect(preficks('boxReflect', true)).to.equal(reactProps.WEBKIT);
	});
});
