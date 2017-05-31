'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conjunctiveToDisjunctive;

var _lodash = require('lodash.flatmap');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function conjunctiveToDisjunctive(objects) {
  return objects.reduce(function (considerationsSoFar, newConsiderations) {
    return (0, _lodash2.default)(considerationsSoFar, function (consideration1) {
      return newConsiderations.map(function (consideration2) {
        return Object.assign({}, consideration1, consideration2);
      });
    });
  }, [{}]);
}

module.exports = exports['default'];