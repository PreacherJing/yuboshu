"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    des: String,
    btnTxt: String
  },
  methods: {
    onTap: function onTap() {
      var _wx$getStorageSync = wx.getStorageSync('user'),
          isBinding = _wx$getStorageSync.isBinding;

      if (isBinding === 0) {
        wx.navigateTo({
          url: '/pages/gender'
        });
      } else {
        this.$emit('action');
      }
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'70-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTap($event)
      })();
    
  }}}, models: {} });