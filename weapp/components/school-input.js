"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    show: {
      type: Boolean,
      "default": false
    }
  },
  data: {
    items: [],
    keyword: '',
    pageIndex: 1,
    pageSize: 20,
    isCanLoad: true
  },
  watch: {
    show: function show(val) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!val) {
                  _context.next = 4;
                  break;
                }

                _this.items = [];
                _context.next = 4;
                return _this.loadData();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  methods: {
    loadData: function loadData() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.isCanLoad) {
                  _context2.next = 24;
                  break;
                }

                _context2.next = 3;
                return _api.User.searchSchool(_this2.keyword, _this2.pageIndex, _this2.pageSize);

              case 3:
                items = _context2.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 7;

                for (_iterator = items[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;

                  _this2.items.push(item);
                }

                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 15:
                _context2.prev = 15;
                _context2.prev = 16;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 18:
                _context2.prev = 18;

                if (!_didIteratorError) {
                  _context2.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context2.finish(18);

              case 22:
                return _context2.finish(15);

              case 23:
                if (items.length >= _this2.pageSize) {
                  _this2.pageIndex++;
                } else {
                  _this2.isCanLoad = false;
                }

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[7, 11, 15, 23], [16,, 18, 22]]);
      }))();
    },
    onSelect: function onSelect(school) {
      this.$emit('result', school);
    },
    onSearch: function onSearch(e) {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var value, items;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                value = e.$wx.detail.value;
                _this3.pageIndex = 1;
                _this3.isCanLoad = true;
                console.log(value);
                _this3.keyword = value;
                _context3.next = 7;
                return _api.User.searchSchool(_this3.keyword, _this3.pageIndex, _this3.pageSize);

              case 7:
                items = _context3.sent;
                _this3.items = items;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onCancel: function onCancel() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.items = [];
                _this4.isCanLoad = true;
                _this4.pageIndex = 1;
                _context4.next = 5;
                return _this4.loadData();

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onClose: function onClose() {
      this.$emit('close');
    },
    onScrolltolower: function onScrolltolower() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.loadData();

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
}, {info: {"components":{"screen-dialog":{"path":"half-screen-dialog/half-screen-dialog"},"searchbar":{"path":"searchbar/searchbar"}},"on":{"86-0":["close"],"86-1":["input","cancel"]}}, handlers: {'86-0': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event)
      })();
    
  }},'86-1': {"input": function proxy () {
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
    
  }},'86-3': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }},'86-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onSelect(item)
      })();
    
  }}}, models: {} }, {info: {"components":{"screen-dialog":{"path":"half-screen-dialog/half-screen-dialog"},"searchbar":{"path":"searchbar/searchbar"}},"on":{"86-0":["close"],"86-1":["input","cancel"]}}, handlers: {'86-0': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event)
      })();
    
  }},'86-1': {"input": function proxy () {
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
    
  }},'86-3': {"scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }},'86-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onSelect(item)
      })();
    
  }}}, models: {} });