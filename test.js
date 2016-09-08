var expect = require('chai').expect;
var stub = require('sinon').stub;
var preficks = require('./index');

var props = {
	MS: 'msTransform',
	MOZ: 'mozAppearance',
	WEBKIT: 'webkitBoxReflect',
	SUPPORTED: 'display'
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

	it('should check for and return webkit prefix', function() {
		expect(preficks('boxReflect')).to.equal(props.WEBKIT);
	});
});
