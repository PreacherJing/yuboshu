"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    user: null,
    btnDisabled: true,
    btnLoading: false,
    score: ''
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
              _context.next = 2;
              return _api.User.getScore();

            case 2:
              _this.user = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    onInput: function onInput(e) {
      var value = e.$wx.detail.value;
      this.score = parseInt(value);
      this.btnDisabled = !this.user || this.user.converScore < this.score;
    },
    onTransform: function onTransform() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.btnDisabled = true;
                _this2.btnLoading = true;
                _context2.next = 4;
                return _api.User.transformScore(_this2.score);

              case 4:
                res = _context2.sent;

                if (res) {
                  _this2.user.converScore -= _this2.score;
                }

                _this2.btnDisabled = false;
                _this2.btnLoading = false;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'30-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInput($event)
      })();
    
  }},'30-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTransform($event)
      })();
    
  }}}, models: {'3': {
      type: "input",
      expr: "score",
      handler: function set ($v) {
      var _vm=this;
        _vm.score = $v;
      
    }
    }} }, {info: {"components":{},"on":{}}, handlers: {'30-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInput($event)
      })();
    
  }},'30-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTransform($event)
      })();
    
  }}}, models: {'3': {
      type: "input",
      expr: "score",
      handler: function set ($v) {
      var _vm=this;
        _vm.score = $v;
      
    }
    }} });