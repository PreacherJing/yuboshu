"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _share = _interopRequireDefault(require('../common/share.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  mixins: [_share["default"]],
  data: {
    tabIndex: 0,
    current: 0,
    tabs: ['动态', '照片', '标签'],
    startY: 0,
    top: 400,
    baseTop: 0,
    position: 'position:fixed',
    bottom: 0,
    scrollY: false,
    transition: 'none',
    isSelf: false,
    loadPhotos: false,
    loadTag: false,
    isgz: false,
    user: null,
    reload: false
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var _wx$getMenuButtonBoun, bottom, top, height, userId, _user;

      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _wx$getMenuButtonBoun = wx.getMenuButtonBoundingClientRect(), bottom = _wx$getMenuButtonBoun.bottom, top = _wx$getMenuButtonBoun.top, height = _wx$getMenuButtonBoun.height;
              _this.bottom = bottom + 12;

              _this.$wx.createSelectorQuery().select('.head').boundingClientRect(function (res) {
                var _top = res.top + res.height;

                _this.top = _top;
                _this.baseTop = _top;
                _this.position = 'position:fixed';
              }).exec();

              userId = wx.getStorageSync('userId');
              _user = wx.getStorageSync('user');
              _context.next = 7;
              return _api.User.getDetail(q && q.id || '');

            case 7:
              _this.user = _context.sent;

              if (_this.user && _this.user.id === userId || _user.userType === 4) {
                _this.isSelf = true;
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onShow: function onShow() {
    this.reload = true;
  },
  onReady: function onReady() {},
  methods: {
    goEdit: function goEdit() {
      wx.navigateTo({
        url: '/pages/user-edit'
      });
    },
    goFans: function goFans(userId, type) {
      wx.navigateTo({
        url: "/pages/fans?type=".concat(type, "&userId=").concat(userId)
      });
    },
    onTabChange: function onTabChange(index) {
      this.current = index;
    },
    onChange: function onChange(res) {
      var _res$$wx$detail = res.$wx.detail,
          current = _res$$wx$detail.current,
          source = _res$$wx$detail.source;
      this.tabIndex = current;

      if (current === 1 && !this.loadPhotos) {
        this.loadPhotos = true;
      }

      if (current === 2 && !this.loadTag) {
        this.loadTag = true;
      }
    },
    touchmove: function touchmove(res) {
      var _pageY = res.$wx.changedTouches[0].pageY;

      if (this.startY === 0) {
        this.startY = _pageY;
      }

      var offset = _pageY - this.startY;

      if (offset < 0) {
        if (this.top > this.bottom) {
          this.startY = _pageY;

          var _top = this.top + offset;

          this.top = _top < this.bottom ? this.bottom : _top;
        }
      } else {
        if (this.top < this.baseTop) {
          this.startY = _pageY;

          var _top2 = this.top + offset;

          this.top = _top2 > this.baseTop ? this.baseTop : _top2;
        }
      }
    },
    touchend: function touchend(res) {
      var _this2 = this;

      this.startY = 0;
      this.$wx.createSelectorQuery().select('.content').boundingClientRect(function (res) {
        var _wx$getMenuButtonBoun2 = wx.getMenuButtonBoundingClientRect(),
            top = _wx$getMenuButtonBoun2.top;

        if (res.top > (_this2.baseTop - top) / 2 + top) {
          _this2.top = _this2.baseTop;
          _this2.scrollY = false;
        } else {
          _this2.top = _this2.bottom;
          _this2.scrollY = true;
        }

        _this2.transition = 'all 0.3s';
        setTimeout(function () {
          _this2.transition = 'none';
        }, 300);
      }).exec();
    },
    onReset: function onReset() {
      this.reload = false;
    },
    onFollow: function onFollow() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var _wx$getStorageSync, isBinding, isOk, _isOk;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _wx$getStorageSync = wx.getStorageSync('user'), isBinding = _wx$getStorageSync.isBinding;

                if (!(isBinding === 0)) {
                  _context2.next = 5;
                  break;
                }

                wx.navigateTo({
                  url: '/pages/gender'
                });
                _context2.next = 16;
                break;

              case 5:
                if (!_this3.user.hasFollow) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 8;
                return _api.Follow.takeOff(_this3.user.id);

              case 8:
                isOk = _context2.sent;

                if (isOk) {
                  _this3.user.hasFollow = false;
                }

                _context2.next = 16;
                break;

              case 12:
                _context2.next = 14;
                return _api.Follow.concern(_this3.user.id);

              case 14:
                _isOk = _context2.sent;

                if (_isOk) {
                  _this3.user.hasFollow = true;
                }

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"../components/navigation-bar/navigation-bar"},"tab-bar":{"path":"../components/tab-bar"},"user-tags":{"path":"../components/user-tags"},"user-post":{"path":"../components/user-post"},"user-photos":{"path":"../components/user-photos"}},"on":{"14-6":["change"],"14-8":["reset"]}}, handlers: {'14-0': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.touchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.touchend($event)
      })();
    
  }},'14-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goEdit($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goFans(_vm.user.id, 0)
      })();
    
  }},'14-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goFans(_vm.user.id, 1)
      })();
    
  }},'14-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTabChange($event)
      })();
    
  }},'14-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }},'14-8': {"reset": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReset($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"navigation-bar":{"path":"../components/navigation-bar/navigation-bar"},"tab-bar":{"path":"../components/tab-bar"},"user-tags":{"path":"../components/user-tags"},"user-post":{"path":"../components/user-post"},"user-photos":{"path":"../components/user-photos"}},"on":{"14-6":["change"],"14-8":["reset"]}}, handlers: {'14-0': {"touchmove": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.touchmove($event)
      })();
    
  }, "touchend": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.touchend($event)
      })();
    
  }},'14-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goEdit($event)
      })();
    
  }},'14-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'14-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goFans(_vm.user.id, 0)
      })();
    
  }},'14-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goFans(_vm.user.id, 1)
      })();
    
  }},'14-6': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTabChange($event)
      })();
    
  }},'14-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }},'14-8': {"reset": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReset($event)
      })();
    
  }}}, models: {} });