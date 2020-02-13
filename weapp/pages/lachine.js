"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    src: null
  },
  onLoad: function onLoad() {
    var token = wx.getStorageSync('token') || '';
    this.src = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1710dd7f9b1bbe4f&redirect_uri=".concat(encodeURIComponent('https://www.wutuobangxinyougou.com/lachine.html?token=' + token), "&response_type=code&scope=snsapi_base&state=0#wechat_redirect");
  }
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} });