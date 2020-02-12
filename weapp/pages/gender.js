"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    gender: -1,
    btntext: '微信授权',
    loading: false,
    disabled: false
  },
  onLoad: function onLoad() {
    this.btntext = _api.User.isQQ() ? 'QQ授权' : '微信授权';
  },
  methods: {
    choice: function choice(gender) {
      this.gender = gender;
    },
    onGetuser: function () {
      var _onGetuser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(info) {
        var nickName, avatarUrl, province, city, res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.gender === -1)) {
                  _context.next = 3;
                  break;
                }

                wx.showToast({
                  title: '请选择性别',
                  icon: 'none',
                  duration: 2000
                });
                return _context.abrupt("return");

              case 3:
                if (!info) {
                  _context.next = 16;
                  break;
                }

                this.loading = true;
                this.disabled = true;
                this.btntext = '注册中..';
                nickName = info.nickName, avatarUrl = info.avatarUrl, province = info.province, city = info.city;
                _context.next = 10;
                return _api.User.bindInfo(nickName, avatarUrl, this.gender, province, city);

              case 10:
                res = _context.sent;

                if (res === -1) {
                  this.btntext = '重试';
                  wx.showToast({
                    title: '操作失败请重试',
                    icon: 'none',
                    duration: 2000
                  });
                } else {
                  wx.navigateBack();
                }

                this.loading = false;
                this.disabled = false;
                _context.next = 17;
                break;

              case 16:
                wx.showToast({
                  title: '已取消授权',
                  icon: 'none',
                  duration: 2000
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onGetuser(_x) {
        return _onGetuser.apply(this, arguments);
      }

      return onGetuser;
    }()
  }
}, {info: {"components":{"footer":{"path":"../components/guide-footer"}},"on":{"20-2":["getuser"]}}, handlers: {'20-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.choice(1)
      })();
    
  }},'20-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.choice(2)
      })();
    
  }},'20-2': {"getuser": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onGetuser($event)
      })();
    
  }}}, models: {} });