"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

var _share = _interopRequireDefault(require('../common/share.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  mixins: [_share["default"]],
  data: {
    state: 0,
    items: [],
    pageIndex: 1,
    pageSize: 15,
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
              _context.next = 2;
              return _this.loadTopics();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    loadTopics: function loadTopics() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.hasMore) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return _api.Topic.getTopicList(_this2.pageIndex, _this2.pageSize);

              case 4:
                res = _context2.sent;

                if (!res) {
                  _context2.next = 30;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 9;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  _this2.items.push(item);
                }

                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](9);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 17:
                _context2.prev = 17;
                _context2.prev = 18;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 20:
                _context2.prev = 20;

                if (!_didIteratorError) {
                  _context2.next = 23;
                  break;
                }

                throw _iteratorError;

              case 23:
                return _context2.finish(20);

              case 24:
                return _context2.finish(17);

              case 25:
                _this2.pageIndex++;
                _this2.hasMore = res.length === _this2.pageSize;
                _this2.state = 3;
                _context2.next = 31;
                break;

              case 30:
                _this2.state = 2;

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[9, 13, 17, 25], [18,, 20, 24]]);
      }))();
    },
    onScrolltolower: function onScrolltolower() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.loadTopics();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onRetry: function onRetry() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this4.loadTopics();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onSearch: function onSearch(e) {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        var value, items;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                value = e.$wx.detail.value;

                if (!value) {
                  _context5.next = 9;
                  break;
                }

                _this5.pageIndex = 1;
                _this5.hasMore = true;
                _context5.next = 6;
                return _api.Topic.searchTopic(value, _this5.pageIndex, _this5.pageSize);

              case 6:
                items = _context5.sent;
                _this5.hasMore = false;
                _this5.items = items;

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    onCancel: function onCancel() {
      var _this6 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.items = [];
                _this6.hasMore = true;
                _this6.pageIndex = 1;
                _context6.next = 5;
                return _this6.loadTopics();

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    goTopic: function goTopic(id) {
      wx.navigateTo({
        url: '/pages/topic?id=' + id
      });
    },
    goAdd: function goAdd() {
      wx.navigateTo({
        url: '/pages/topic-add'
      });
    },
    onAction: function onAction() {}
  }
}, {info: {"components":{"loading":{"path":"../components/loading/loading"},"searchbar":{"path":"../components/searchbar/searchbar"},"mp-page":{"path":"../components/mp-page"},"empty":{"path":"../components/empty"},"no-more":{"path":"../components/no-more"}},"on":{"21-0":["scrolltolower","retry"],"21-2":["input","cancel"],"21-6":["action"]}}, handlers: {'21-0': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'21-2': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event)
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'21-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(item.id)
      })();
    
  }},'21-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goAdd($event)
      })();
    
  }},'21-6': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"loading":{"path":"../components/loading/loading"},"searchbar":{"path":"../components/searchbar/searchbar"},"mp-page":{"path":"../components/mp-page"},"empty":{"path":"../components/empty"},"no-more":{"path":"../components/no-more"}},"on":{"21-0":["scrolltolower","retry"],"21-2":["input","cancel"],"21-6":["action"]}}, handlers: {'21-0': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'21-2': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event)
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'21-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(item.id)
      })();
    
  }},'21-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goAdd($event)
      })();
    
  }},'21-6': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }}}, models: {} });