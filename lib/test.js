'use strict';

require('goodeggs-test-helpers');

var _chai = require('goodeggs-test-helpers/chai');

var _mocha = require('mocha');

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env goodeggs/test */
(0, _mocha.describe)('conjunctiveToDisjunctive', function () {
  (0, _mocha.it)('turns CNF into DNF', function () {
    var result = (0, _2.default)([[{ val: 1 }, { val: 2 }], [{ foo: 'a', bar: 'b' }], [{ quux: 'baz' }, { quux: 'bax' }]]);

    (0, _chai.expect)(result).to.deep.contain({
      val: 1, foo: 'a', bar: 'b', quux: 'baz'
    });
    (0, _chai.expect)(result).to.deep.contain({
      val: 1, foo: 'a', bar: 'b', quux: 'bax'
    });
    (0, _chai.expect)(result).to.deep.contain({
      val: 2, foo: 'a', bar: 'b', quux: 'baz'
    });
    (0, _chai.expect)(result).to.deep.contain({
      val: 2, foo: 'a', bar: 'b', quux: 'bax'
    });
  });
});