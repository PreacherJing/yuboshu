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
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api.Plane.get();

            case 2:
              this.plane = _context.sent;
              _context.next = 5;
              return this.loadData();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function onLoad() {
      return _onLoad.apply(this, arguments);
    }

    return onLoad;
  }(),
  methods: {
    loadData: function () {
      var _loadData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!this.hasMore || this.isLoadData)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                this.isLoadData = true;
                _context2.next = 5;
                return _api.Plane.list(this.pageIndex, this.pageSize);

              case 5:
                res = _context2.sent;

                if (res && res.length) {
                  this.items.push(res.slice(0, 6));
                  this.items.push(res.slice(6));
                  this.pageIndex++;
                  this.hasMore = res.length === this.pageSize;
                }

                this.isLoadData = false;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }(),
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
    onItem: function () {
      var _onItem = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(plane, i, j) {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.placeholder = "\u56DE\u590D".concat(plane.user.nick, ":");

                if (plane.hasSeen) {
                  _context3.next = 5;
                  break;
                }

                this.items[i][j].hasSeen = true;
                _context3.next = 5;
                return _api.Plane.seen(plane.id);

              case 5:
                this.itemPlane = plane;
                this.showDialog = true;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onItem(_x, _x2, _x3) {
        return _onItem.apply(this, arguments);
      }

      return onItem;
    }(),
    onScrolltolower: function () {
      var _onScrolltolower = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.loadData();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onScrolltolower() {
        return _onScrolltolower.apply(this, arguments);
      }

      return onScrolltolower;
    }(),
    onRecall: function () {
      var _onRecall = _asyncToGenerator(
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
                this.onHide();

                if (!this.plane) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 5;
                return _api.Plane.remove(this.plane.id);

              case 5:
                if (!_context5.sent) {
                  _context5.next = 7;
                  break;
                }

                this.plane = null;

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onRecall() {
        return _onRecall.apply(this, arguments);
      }

      return onRecall;
    }(),
    onThrow: function () {
      var _onThrow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6(content) {
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
                this.onHide();
                wx.showLoading({
                  title: '发布中...',
                  mask: true
                });

                if (!this.plane) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 8;
                return _api.Plane.edit(this.plane.id, content);

              case 8:
                if (!_context6.sent) {
                  _context6.next = 10;
                  break;
                }

                this.plane.content = content;

              case 10:
                _context6.next = 16;
                break;

              case 12:
                _context6.next = 14;
                return _api.Plane.add(content);

              case 14:
                res = _context6.sent;

                if (res) {
                  this.plane = res;
                }

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onThrow(_x4) {
        return _onThrow.apply(this, arguments);
      }

      return onThrow;
    }()
  }
}, {info: {"components":{"dialog":{"path":"../components/dialog/dialog"},"comment-input":{"path":"../components/comment-input"},"plane-add":{"path":"../components/comment-input"},"user-item":{"path":"../components/user-item"}},"on":{"32-20":["close"],"32-23":["hide","throw","recall"],"32-26":["hide"]}}, handlers: {'32-17': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }},'32-18': {"tap": function proxy (plane, index, j) {
    
    var _vm=this;
      return (function () {
        _vm.onItem(plane, index, j)
      })();
    
  }},'32-19': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShow($event)
      })();
    
  }},'32-20': {"close": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showDialog=_vm.flase
      })();
    
  }},'32-21': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showReplyInput=true
      })();
    
  }},'32-22': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.showDialog=false
      })();
    
  }},'32-23': {"hide": function proxy () {
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
    
  }},'32-26': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReplyHide($event)
      })();
    
  }}}, models: {} });