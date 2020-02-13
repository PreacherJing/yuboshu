"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    title: ['TA关注的', '关注TA的'],
    items: [],
    state: 0,
    pageIndex: 1,
    pageSize: 20,
    hasMore: true,
    userId: null,
    fromType: '0' // 0:TA关注的 1:关注TA的

  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.fromType = q.type;
              _this.userId = q.userId;
              wx.setNavigationBarTitle({
                title: _this.title[_this.fromType]
              });
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
                res = null;

                if (!(_this4.fromType === '0')) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 6;
                return _api.Follow.getUserFollows(_this4.userId, _this4.pageIndex, _this4.pageSize);

              case 6:
                res = _context4.sent;
                _context4.next = 13;
                break;

              case 9:
                if (!(_this4.fromType === '1')) {
                  _context4.next = 13;
                  break;
                }

                _context4.next = 12;
                return _api.Follow.gerUserFans(_this4.userId, _this4.pageIndex, _this4.pageSize);

              case 12:
                res = _context4.sent;

              case 13:
                if (!res) {
                  _context4.next = 39;
                  break;
                }

                if (!(res.length > 0)) {
                  _context4.next = 35;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context4.prev = 18;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  _this4.items.push(item);
                }

                _context4.next = 26;
                break;

              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](18);
                _didIteratorError = true;
                _iteratorError = _context4.t0;

              case 26:
                _context4.prev = 26;
                _context4.prev = 27;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 29:
                _context4.prev = 29;

                if (!_didIteratorError) {
                  _context4.next = 32;
                  break;
                }

                throw _iteratorError;

              case 32:
                return _context4.finish(29);

              case 33:
                return _context4.finish(26);

              case 34:
                _this4.pageIndex++;

              case 35:
                _this4.hasMore = res.length === _this4.pageSize;
                _this4.state = 2;
                _context4.next = 40;
                break;

              case 39:
                _this4.state = 1;

              case 40:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[18, 22, 26, 34], [27,, 29, 33]]);
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
    }
  }
}, {info: {"components":{"loading":{"path":"../components/loading/loading"},"mp-page":{"path":"../components/mp-page"},"user-item":{"path":"../components/user-item"},"no-more":{"path":"../components/no-more"},"empty":{"path":"../components/empty"}},"on":{"16-0":["retry"]}}, handlers: {'16-0': {"retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }}}, models: {} });