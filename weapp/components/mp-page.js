"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  props: {
    state: {
      type: Number,
      "default": 0
    },
    showMoreLoading: {
      type: Boolean,
      "default": true
    },
    count: {
      type: Number,
      "default": 0
    },
    baseHeight: {
      type: String,
      "default": '100vh'
    },
    autoHeight: {
      type: Boolean,
      "default": false
    },
    offset: {
      type: Number,
      "default": _api.User.getHeadHeight()
    },
    bottomOffset: {
      type: Number,
      "default": 0
    },
    enableTips: {
      type: Boolean,
      "default": true
    },
    marginOffset: {
      type: Number,
      "default": 10
    },
    enableRefresh: {
      type: Boolean,
      "default": false
    },
    scrollY: {
      type: Boolean,
      "default": true
    }
  },
  data: {
    margin: 0,
    beginY: 0,
    top: -100,
    showLoading: false,
    isLoading: false,
    transition: 'none'
  },
  methods: {
    onRetry: function onRetry() {
      this.$emit('retry');
    },
    onTouchmove: function onTouchmove(e) {
      if (!this.isLoading && this.enableRefresh) {
        var y = e.changedTouches[0].clientY;

        if (this.beginY === 0) {
          this.beginY = y;
          this.scrollY = false;
        }

        this.margin += (y - this.beginY) / 3;

        if (this.margin > this.marginOffset && !this.showLoading) {
          this.showLoading = true;
        }

        this.beginY = y;
      }
    },
    hideRefresh: function hideRefresh() {
      var _this = this;

      this.top = 10;
      this.isLoading = false;
      this.margin = 0;
      this.scrollY = true;
      setTimeout(function () {
        _this.showLoading = false;
      }, 200);
      setTimeout(function () {
        _this.top = -100;
      }, 2000);
    },
    onTouchend: function onTouchend() {
      var _this2 = this;

      if (!this.isLoading && this.enableRefresh) {
        this.transition = 'all 0.3s';
        this.beginY = 0;

        if (this.margin > 50) {
          this.isLoading = true;
          this.margin = 30;
          this.$emit('refresh');
        } else {
          this.scrollY = true;
          this.margin = 0;
          setTimeout(function () {
            _this2.isLoading = false;
            _this2.showLoading = false;
          }, 200);
        }
      }
    },
    onScroll: function onScroll(e) {
      this.$emit('scroll', e.$wx.detail);
    },
    onScrolltolower: function onScrolltolower() {
      this.$emit('scrolltolower');
    }
  }
}, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"loading/loading"}},"on":{}}, handlers: {'68-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'68-1': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTouchend($event)
      })();
    
  }, "scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }}}, models: {} });