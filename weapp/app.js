"use strict";

var _core = _interopRequireDefault(require('vendor.js')(0));

var _usePromisify = _interopRequireDefault(require('vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_usePromisify["default"]);

_core["default"].app({
  globalData: {
    userInfo: null
  }
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {} });