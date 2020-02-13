"use strict";

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _share = _interopRequireDefault(require('../common/share.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [_share["default"]],
  data: {
    userId: null,
    isqq: false
  },
  onLoad: function onLoad(q) {
    var id = q.id;
    this.uerId = id;
    this.isqq = _api.User.isQQ();
  },
  methods: {
    goSend: function goSend(type) {
      var _wx$getStorageSync = wx.getStorageSync('user'),
          isBinding = _wx$getStorageSync.isBinding;

      if (isBinding === 0) {
        wx.navigateTo({
          url: '/pages/gender'
        });
      } else {
        wx.navigateTo({
          url: "/pages/post-send?type=".concat(type, "&id=").concat(this.uerId)
        });
      }
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'10-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goSend(0)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'10-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goSend(0)
      })();
    
  }}}, models: {} });