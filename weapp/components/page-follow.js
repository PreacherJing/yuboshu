"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  data: {
    count: 0,
    state: 0,
    pageIndex: 1,
    pageSize: 5,
    items: [],
    recommentds: [],
    isLoadData: false,
    hasMore: true,
    refreshDate: new Date(),
    loadDate: new Date()
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.state = 0;
                this.pageIndex = 1;
                this.loadDate = new Date();
                this.items = [];
                _context.next = 6;
                return _api.Post.follow(this.loadDate, 1, 1, this.pageSize);

              case 6:
                res = _context.sent;

                if (!res) {
                  _context.next = 21;
                  break;
                }

                if (!(res.length > 0)) {
                  _context.next = 15;
                  break;
                }

                this.items = res;
                this.pageIndex++;
                this.hasMore = res.length === this.pageSize;
                this.state = 3;
                _context.next = 19;
                break;

              case 15:
                _context.next = 17;
                return _api.Post.followRecommend();

              case 17:
                res = _context.sent;

                if (res) {
                  this.recommentds = res;
                  this.state = 2;
                } else {
                  this.state = 1;
                }

              case 19:
                _context.next = 22;
                break;

              case 21:
                this.state = 1;

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    loadData: function () {
      var _loadData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(direction) {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, _res, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _item;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.isLoadData) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                this.isLoadData = true;

                if (!(direction === 1)) {
                  _context2.next = 32;
                  break;
                }

                if (!this.hasMore) {
                  _context2.next = 30;
                  break;
                }

                _context2.next = 7;
                return _api.Post.follow(this.loadDate, 1, this.pageIndex, this.pageSize);

              case 7:
                res = _context2.sent;

                if (!res) {
                  _context2.next = 30;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 12;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;
                  this.items.push(item);
                }

                _context2.next = 20;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](12);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 20:
                _context2.prev = 20;
                _context2.prev = 21;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 23:
                _context2.prev = 23;

                if (!_didIteratorError) {
                  _context2.next = 26;
                  break;
                }

                throw _iteratorError;

              case 26:
                return _context2.finish(23);

              case 27:
                return _context2.finish(20);

              case 28:
                this.pageIndex++;
                this.hasMore = res.length === this.pageSize;

              case 30:
                _context2.next = 57;
                break;

              case 32:
                _context2.next = 34;
                return _api.Post.follow(this.refreshDate, 0, 1, this.pageSize);

              case 34:
                _res = _context2.sent;

                if (!_res) {
                  _context2.next = 56;
                  break;
                }

                this.count = _res.length;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 40;

                for (_iterator2 = _res[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  _item = _step2.value;
                  this.items.unshift(_item);
                }

                _context2.next = 48;
                break;

              case 44:
                _context2.prev = 44;
                _context2.t1 = _context2["catch"](40);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t1;

              case 48:
                _context2.prev = 48;
                _context2.prev = 49;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 51:
                _context2.prev = 51;

                if (!_didIteratorError2) {
                  _context2.next = 54;
                  break;
                }

                throw _iteratorError2;

              case 54:
                return _context2.finish(51);

              case 55:
                return _context2.finish(48);

              case 56:
                this.refreshDate = new Date();

              case 57:
                this.isLoadData = false;

              case 58:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[12, 16, 20, 28], [21,, 23, 27], [40, 44, 48, 56], [49,, 51, 55]]);
      }));

      function loadData(_x) {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }(),
    onScrolltolower: function () {
      var _onScrolltolower = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loadData(1);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onScrolltolower() {
        return _onScrolltolower.apply(this, arguments);
      }

      return onScrolltolower;
    }(),
    onRetry: function () {
      var _onRetry = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.init();

              case 2:
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
    onRefresh: function () {
      var _onRefresh = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.loadData(0);

              case 2:
                this.$refs.list.hideRefresh();

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onRefresh() {
        return _onRefresh.apply(this, arguments);
      }

      return onRefresh;
    }()
  }
}, {info: {"components":{"mp-page":{"path":"mp-page"},"post-item":{"path":"post-item"},"user-recommend":{"path":"user-recommend"}},"on":{"66-0":["scrolltolower","retry","refresh"]}}, handlers: {'66-0': {"scrolltolower": function proxy () {
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
    
  }, "refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }}}, models: {} });