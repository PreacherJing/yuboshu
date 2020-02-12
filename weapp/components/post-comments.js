"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  props: {
    postId: Number
  },
  data: {
    state: 0,
    items: [],
    pageIndex: 1,
    pageSize: 20,
    isLoadData: false,
    hasMore: true
  },
  watch: {
    postId: function () {
      var _postId = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.init();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function postId() {
        return _postId.apply(this, arguments);
      }

      return postId;
    }()
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.state = 0;
                this.pageIndex = 1;
                this.hasMore = true;
                _context2.next = 5;
                return _api.Post.getComments(this.postId, 1, this.pageSize);

              case 5:
                res = _context2.sent;

                if (res) {
                  this.items = res;
                  this.pageIndex++;
                  this.state = 2;
                  this.hasMore = res.length === this.pageSize;
                } else {
                  this.state = 1;
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    loadData: function () {
      var _loadData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!this.hasMore || this.isLoadData)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                this.isLoadData = true;
                _context3.next = 5;
                return _api.Post.getComments(this.postId, this.pageIndex, this.pageSize);

              case 5:
                res = _context3.sent;

                if (!res) {
                  _context3.next = 29;
                  break;
                }

                if (!(res.length > 0)) {
                  _context3.next = 27;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 11;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;
                  this.items.push(item);
                }

                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](11);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 19:
                _context3.prev = 19;
                _context3.prev = 20;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 22:
                _context3.prev = 22;

                if (!_didIteratorError) {
                  _context3.next = 25;
                  break;
                }

                throw _iteratorError;

              case 25:
                return _context3.finish(22);

              case 26:
                return _context3.finish(19);

              case 27:
                this.pageIndex++;
                this.hasMore = res.length === this.pageSize;

              case 29:
                this.isLoadData = false;

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[11, 15, 19, 27], [20,, 22, 26]]);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }(),
    unshift: function unshift(item) {
      this.items.unshift(item);
    },
    onAction: function onAction() {
      this.$emit('action');
    }
  }
}, {info: {"components":{"loading":{"path":"loading/loading"},"comment-item":{"path":"post-comment-item"},"mp-page":{"path":"mp-page"},"empty":{"path":"empty"},"no-more":{"path":"no-more"}},"on":{"72-0":["action"]}}, handlers: {'72-0': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }}}, models: {} });