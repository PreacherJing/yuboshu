"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _share = _interopRequireDefault(require('../common/share.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  mixins: [_share["default"]],
  data: {
    user: null,
    hasBinding: true,
    isqq: false,
    rank: '--'
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
              wx.setNavigationBarTitle({
                title: ''
              });
              _this.isqq = _api.User.isQQ();
              _context.next = 4;
              return _api.Follow.getUserRank();

            case 4:
              _this.rank = _context.sent;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onShow: function onShow() {
    this.user = wx.getStorageSync('user');
    this.user.converScore = ((this.user.converScore + this.user.score) / 100).toFixed(2);
    this.hasBinding = this.user.isBinding;
  },
  methods: {
    goHomPage: function goHomPage() {
      wx.navigateTo({
        url: "/pages/user-details?id=".concat(this.user.id)
      });
    },
    goUserNew: function goUserNew() {
      wx.navigateTo({
        url: '/pages/user-new'
      });
    },
    goMeans: function goMeans() {
      wx.navigateTo({
        url: '/pages/means'
      });
    },
    goGender: function goGender() {
      this.user = wx.getStorageSync('user');

      if (!this.user.isBinding) {
        wx.navigateTo({
          url: '/pages/gender'
        });
        return;
      }
    },
    onOpensetting: function onOpensetting(res) {
      console.log(res);
    },
    goSchool: function goSchool() {
      wx.navigateTo({
        url: '/pages/user-school'
      });
    },
    goEdit: function goEdit() {
      wx.navigateTo({
        url: '/pages/user-edit'
      });
    },
    bindingUserInfo: function bindingUserInfo(info) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var _info$$wx$detail$user, nickName, gender, avatarUrl, province, city, res;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!info.$wx.detail.userInfo) {
                  _context2.next = 8;
                  break;
                }

                _info$$wx$detail$user = info.$wx.detail.userInfo, nickName = _info$$wx$detail$user.nickName, gender = _info$$wx$detail$user.gender, avatarUrl = _info$$wx$detail$user.avatarUrl, province = _info$$wx$detail$user.province, city = _info$$wx$detail$user.city;
                _context2.next = 4;
                return bindInfo(nickName, avatarUrl, gender, province, city);

              case 4:
                res = _context2.sent;

                if (res === -1) {
                  wx.showToast({
                    title: '登录失败,重试',
                    icon: 'none',
                    duration: 2000
                  });
                } else {
                  _this2.user = wx.getStorageSync('user');
                  _this2.hasBinding = true;
                }

                _context2.next = 9;
                break;

              case 8:
                wx.showToast({
                  title: '取消授权,无法登录',
                  icon: 'none',
                  duration: 2000
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    goFans: function goFans(userId, type) {
      wx.navigateTo({
        url: "/pages/fans?type=".concat(type, "&userId=").concat(userId)
      });
    },
    goRank: function goRank() {
      wx.navigateTo({
        url: '/pages/rank'
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'6-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goHomPage($event)
      })();
    
  }},'6-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goGender($event)
      })();
    
  }},'6-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goRank($event)
      })();
    
  }},'6-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goMeans($event)
      })();
    
  }},'6-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goFans(_vm.user.id, 1)
      })();
    
  }},'6-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goEdit($event)
      })();
    
  }},'6-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goSchool($event)
      })();
    
  }}}, models: {} });