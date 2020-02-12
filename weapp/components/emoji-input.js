"use strict";

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    height: Number,
    hide: Boolean
  },
  data: {
    emojis: _api.weibo_emojis,
    isInit: false,
    dir: "".concat(wx.env.USER_DATA_PATH, "/emojis")
  },
  // watch: {
  //   async hide(val) {
  //     if (!val && !this.isInit) {
  //       await accessSync(this.dir)
  //         .then(err => {
  //           if (err) {
  //             return mkdirSync(this.dir);
  //           }
  //         })
  //         .then(err => {
  //           if (!err) {
  //             for (const icon in this.emojis) {
  //               const filePath = `${this.dir}/${this.emojis[icon].icon}`;
  //               accessSync(filePath).then(async err => {
  //                 if (err) {
  //                   await wx.downloadFile({
  //                     url: this.emojis[icon].url,
  //                     filePath: filePath
  //                   });
  //                 }
  //               });
  //             }
  //           }
  //         });
  //         this.isInit = true
  //     }
  //   }
  // },
  methods: {
    onTap: function onTap(val) {
      this.$emit('emoji', val);
    },
    onDel: function onDel() {
      this.$emit('del');
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'79-0': {"tap": function proxy (img) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(img.value)
      })();
    
  }},'79-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }}}, models: {} });