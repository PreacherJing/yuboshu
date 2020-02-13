"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  data: {
    items: []
  },
  attached: function attached() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var res;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api.User.getUserRecommend();

            case 2:
              res = _context.sent;

              if (res) {
                _this.items = res;
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    onFollow: function onFollow(id, index) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var isOk, _isOk;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.showLoading({
                  title: '关注中..'
                });

                if (!_this2.items[index].hasFollow) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 4;
                return _api.Follow.takeOff(id);

              case 4:
                isOk = _context2.sent;

                if (isOk) {
                  _this2.items[index].hasFollow = false;
                }

                _context2.next = 12;
                break;

              case 8:
                _context2.next = 10;
                return _api.Follow.concern(id);

              case 10:
                _isOk = _context2.sent;

                if (_isOk) {
                  _this2.items[index].hasFollow = true;
                }

              case 12:
                wx.hideLoading();

                _this2.$emit('change');

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    goUser: function goUser(id) {
      wx.navigateTo({
        url: '/pages/user-details?id=' + id
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'89-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goUser(item.id)
      })();
    
  }},'89-1': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(item.id, index)
      })();
    
  }}}, models: {} });