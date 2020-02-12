"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  config: {},
  data: {
    state: 0,
    toUserId: null,
    postId: null,
    commentId: null,
    replyId: null,
    toUserNick: null,
    items: [],
    showInput: false,
    pageIndex: 1,
    pageSize: 20,
    hasMore: true
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
              return this.loadData();

            case 2:
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
  onPullDownRefresh: function () {
    var _onPullDownRefresh = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee2() {
      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.state = 0;
              this.hasMore = true;
              this.pageIndex = 1;
              this.items = [];
              _context2.next = 6;
              return this.loadData();

            case 6:
              wx.stopPullDownRefresh();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function onPullDownRefresh() {
      return _onPullDownRefresh.apply(this, arguments);
    }

    return onPullDownRefresh;
  }(),
  onReachBottom: function () {
    var _onReachBottom = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee3() {
      return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.loadData();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function onReachBottom() {
      return _onReachBottom.apply(this, arguments);
    }

    return onReachBottom;
  }(),
  methods: {
    onRetry: function () {
      var _onRetry = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.state = 0;
                this.pageIndex = 1;
                _context4.next = 4;
                return this.loadData();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onRetry() {
        return _onRetry.apply(this, arguments);
      }

      return onRetry;
    }(),
    loadData: function () {
      var _loadData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.hasMore) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _context5.next = 4;
                return _api.Post.rewardLogs(this.pageIndex, this.pageSize);

              case 4:
                res = _context5.sent;

                if (!res) {
                  _context5.next = 30;
                  break;
                }

                this.state = 2;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context5.prev = 10;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;
                  this.items.push(item);
                }

                _context5.next = 18;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](10);
                _didIteratorError = true;
                _iteratorError = _context5.t0;

              case 18:
                _context5.prev = 18;
                _context5.prev = 19;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 21:
                _context5.prev = 21;

                if (!_didIteratorError) {
                  _context5.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context5.finish(21);

              case 25:
                return _context5.finish(18);

              case 26:
                this.pageIndex++;
                this.hasMore = res.length === this.pageSize;
                _context5.next = 31;
                break;

              case 30:
                this.state = 1;

              case 31:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[10, 14, 18, 26], [19,, 21, 25]]);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }(),
    goPost: function goPost(item) {
      wx.navigateTo({
        url: "/pages/post-details?id=".concat(item.id)
      });
    }
  }
}, {info: {"components":{"loading":{"path":"../components/loading/loading"},"user-item":{"path":"../components/user-item"},"no-more":{"path":"../components/no-more"},"empty":{"path":"../components/empty"},"mp-page":{"path":"../components/mp-page"},"comment-input":{"path":"../components/comment-input"}},"on":{"27-0":["retry"],"27-2":["action"]}}, handlers: {'27-0': {"retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'27-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goPost(item.post)
      })();
    
  }},'27-2': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }}}, models: {} });