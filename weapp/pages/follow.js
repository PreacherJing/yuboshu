"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  config: {},
  data: {
    state: 0,
    items: [],
    pageIndex: 1,
    pageSize: 20,
    hasMore: true
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
              if (_this.$wx.getOpenerEventChannel()) {
                _this.eventChannel = _this.$wx.getOpenerEventChannel();
              }

              _context.next = 3;
              return _this.loadData();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onUnload: function onUnload() {
    if (this.eventChannel) {
      this.eventChannel.emit('acceptDataFromOpenedPage', {
        needLoad: this.needLoad
      });
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    var _this2 = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee2() {
      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this2.state = 0;
              _this2.hasMore = true;
              _this2.pageIndex = 1;
              _this2.items = [];
              _context2.next = 6;
              return _this2.loadData();

            case 6:
              wx.stopPullDownRefresh();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  onReachBottom: function onReachBottom() {
    var _this3 = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee3() {
      return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.loadData();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  methods: {
    loadData: function loadData() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (_this4.hasMore) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.next = 4;
                return _api.Follow.getFans(_this4.pageIndex, _this4.pageSize);

              case 4:
                res = _context4.sent;

                if (!res) {
                  _context4.next = 30;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 9;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  _this4.items.push(item);
                }

                _context4.next = 17;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](9);
                _didIteratorError = true;
                _iteratorError = _context4.t0;

              case 17:
                _context4.prev = 17;
                _context4.prev = 18;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 20:
                _context4.prev = 20;

                if (!_didIteratorError) {
                  _context4.next = 23;
                  break;
                }

                throw _iteratorError;

              case 23:
                return _context4.finish(20);

              case 24:
                return _context4.finish(17);

              case 25:
                _this4.state = 2;
                _this4.pageIndex++;
                _this4.hasMore = res.length === _this4.pageSize;
                _context4.next = 31;
                break;

              case 30:
                _this4.state = 1;

              case 31:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[9, 13, 17, 25], [18,, 20, 24]]);
      }))();
    },
    onRetry: function onRetry() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.state = 0;
                _context5.next = 3;
                return _this5.loadData();

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    onFollow: function onFollow(item, index) {
      var _this6 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        var isOk, _isOk;

        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!item.hasFollow) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 3;
                return _api.Follow.takeOff(item.user.id);

              case 3:
                isOk = _context6.sent;

                if (isOk) {
                  _this6.items[index].hasFollow = false;
                }

                _context6.next = 11;
                break;

              case 7:
                _context6.next = 9;
                return _api.Follow.concern(item.user.id);

              case 9:
                _isOk = _context6.sent;

                if (_isOk) {
                  _this6.items[index].hasFollow = true;
                }

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    onAction: function onAction() {
      wx.navigateTo({
        url: '/pages/post-type'
      });
    }
  }
}, {info: {"components":{"loading":{"path":"../components/loading/loading"},"mp-page":{"path":"../components/mp-page"},"user-item":{"path":"../components/user-item"},"no-more":{"path":"../components/no-more"},"empty":{"path":"../components/empty"}},"on":{"17-0":["retry"],"17-2":["action"]}}, handlers: {'17-0': {"retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'17-1': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(item, index)
      })();
    
  }},'17-2': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"../components/loading/loading"},"mp-page":{"path":"../components/mp-page"},"user-item":{"path":"../components/user-item"},"no-more":{"path":"../components/no-more"},"empty":{"path":"../components/empty"}},"on":{"17-0":["retry"],"17-2":["action"]}}, handlers: {'17-0': {"retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'17-1': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(item, index)
      })();
    
  }},'17-2': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }}}, models: {} });