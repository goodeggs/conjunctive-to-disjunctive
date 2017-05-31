/* eslint-env goodeggs/test */
// @flow
import 'goodeggs-test-helpers';

import {expect} from 'goodeggs-test-helpers/chai';
import {describe, it} from 'mocha';

import conjunctiveToDisjunctive from '.';

describe('conjunctiveToDisjunctive', function () {
  it('turns CNF into DNF', function () {
    const result = conjunctiveToDisjunctive([
      [{val: 1}, {val: 2}],
      [{foo: 'a', bar: 'b'}],
      [{quux: 'baz'}, {quux: 'bax'}],
    ]);

    expect(result).to.deep.contain({
      val: 1, foo: 'a', bar: 'b', quux: 'baz',
    });
    expect(result).to.deep.contain({
      val: 1, foo: 'a', bar: 'b', quux: 'bax',
    });
    expect(result).to.deep.contain({
      val: 2, foo: 'a', bar: 'b', quux: 'baz',
    });
    expect(result).to.deep.contain({
      val: 2, foo: 'a', bar: 'b', quux: 'bax',
    });
  });
});
