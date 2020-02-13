"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    btntext: String,
    type: String,
    des: String,
    loading: Boolean,
    disabled: Boolean
  },
  methods: {
    onTap: function onTap() {
      this.$emit('click');
    },
    getuserinfo: function getuserinfo(e) {
      this.$emit('getuser', e.$wx.detail.userInfo);
    },
    desTap: function desTap() {
      this.$emit('destap');
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'85-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuserinfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }},'85-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.desTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuserinfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }},'85-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.desTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuserinfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }},'85-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.desTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuserinfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }},'85-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.desTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuserinfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }},'85-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.desTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'85-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getuserinfo($event)
      })();
    
  }},'85-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }},'85-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.desTap($event)
      })();
    
  }}}, models: {} });