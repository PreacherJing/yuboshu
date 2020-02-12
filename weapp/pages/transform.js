"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

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
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee(q) {
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api.User.getScore();

            case 2:
              this.user = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function onLoad(_x) {
      return _onLoad.apply(this, arguments);
    }

    return onLoad;
  }(),
  methods: {
    onInput: function onInput(e) {
      var value = e.$wx.detail.value;
      this.score = parseInt(value);
      this.btnDisabled = !this.user || this.user.converScore < this.score;
    },
    onTransform: function () {
      var _onTransform = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.btnDisabled = true;
                this.btnLoading = true;
                _context2.next = 4;
                return _api.User.transformScore(this.score);

              case 4:
                res = _context2.sent;

                if (res) {
                  this.user.converScore -= this.score;
                }

                this.btnDisabled = false;
                this.btnLoading = false;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onTransform() {
        return _onTransform.apply(this, arguments);
      }

      return onTransform;
    }()
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
    }} });