"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    showInput: false,
    showReplyInput: false,
    showDialog: false,
    pageIndex: 1,
    pageSize: 12,
    placeholder: '回复TA',
    itemPlane: null,
    items: [],
    isLoadData: false,
    hasMore: true,
    plane: null
  },
  onLoad: function onLoad() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api.Plane.get();

            case 2:
              _this.plane = _context.sent;
              _context.next = 5;
              return _this.loadData();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!_this2.hasMore || _this2.isLoadData)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.isLoadData = true;
                _context2.next = 5;
                return _api.Plane.list(_this2.pageIndex, _this2.pageSize);

              case 5:
                res = _context2.sent;

                if (res && res.length) {
                  _this2.items.push(res.slice(0, 6));

                  _this2.items.push(res.slice(6));

                  _this2.pageIndex++;
                  _this2.hasMore = res.length === _this2.pageSize;
                }

                _this2.isLoadData = false;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onShow: function onShow() {
      var _wx$getStorageSync = wx.getStorageSync('user'),
          isBinding = _wx$getStorageSync.isBinding;

      if (isBinding === 0) {
        wx.navigateTo({
          url: '/pages/gender'
        });
      } else {
        this.showInput = true;
      }
    },
    onHide: function onHide() {
      this.showInput = false;
    },
    onReplyHide: function onReplyHide() {
      this.showReplyInput = false;
    },
    onItem: function onItem(plane, i, j) {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.placeholder = "\u56DE\u590D".concat(plane.user.nick, ":");

                if (plane.hasSeen) {
                  _context3.next = 5;
                  break;
                }

                _this3.items[i][j].hasSeen = true;
                _context3.next = 5;
                return _api.Plane.seen(plane.id);

              case 5:
                _this3.itemPlane = plane;
                _this3.showDialog = true;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onScrolltolower: function onScrolltolower() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this4.loadData();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onRecall: function onRecall() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                wx.showLoading({
                  title: '撤回中...',
                  mask: true
                });

                _this5.onHide();

                if (!_this5.plane) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 5;
                return _api.Plane.remove(_this5.plane.id);

              case 5:
                if (!_context5.sent) {
                  _context5.next = 7;
                  break;
                }

                _this5.plane = null;

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    onThrow: function onThrow(content) {
      var _this6 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(!content || content.length < 10)) {
                  _context6.next = 3;
                  break;
                }

                _api.Plane.showToast('内容不能少于10个字符');

                return _context6.abrupt("return");

              case 3:
                _this6.onHide();

                wx.showLoading({
                  title: '发布中...',
                  mask: true
                });

                if (!_this6.plane) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 8;
                return _api.Plane.edit(_this6.plane.id, content);

              case 8:
                if (!_context6.sent) {
                  _context6.next = 10;
                  break;
                }

                _this6.plane.content = content;

              case 10:
                _context6.next = 16;
                break;

              case 12:
                _context6.next = 14;
                return _api.Plane.add(content);

              case 14:
                res = _context6.sent;

                if (res) {
                  _this6.plane = res;
                }

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }
}, {info: {"components":{"dialog":{"path":"../components/dialog/dialog"},"comment-input":{"path":"../components/comment-input"},"plane-add":{"path":"../components/comment-input"},"user-item":{"path":"../components/user-item"}},"on":{"32-3":["close"],"32-6":["hide","throw","recall"],"32-9":["hide"]}}, handlers: {'32-0': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }},'32-1': {"tap": function proxy (plane, index, j) {
    
    var _vm=this;
      return (function () {
        _vm.onItem(plane, index, j)
      })();
    
  }},'32-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShow($event)
      })();
    
  }},'32-3': {"close": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showDialog=_vm.flase
      })();
    
  }},'32-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showReplyInput=true
      })();
    
  }},'32-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showDialog=false
      })();
    
  }},'32-6': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }, "throw": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThrow($event)
      })();
    
  }, "recall": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRecall($event)
      })();
    
  }},'32-9': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReplyHide($event)
      })();
    
  }}}, models: {} });