"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _share = _interopRequireDefault(require('../common/share.js'));

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  mixins: [_share["default"]],
  data: {
    state: 3,
    fileds: ['commentCount', 'replyCount', 'likeCount'],
    user: null
  },
  onLoad: function onLoad() {
    this.user = wx.getStorageSync('user');
  },
  onShow: function () {
    var _onShow = _asyncToGenerator(
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

    function onShow() {
      return _onShow.apply(this, arguments);
    }

    return onShow;
  }(),
  onPullDownRefresh: function () {
    var _onPullDownRefresh = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee2() {
      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.init();

            case 2:
              wx.stopPullDownRefresh();

            case 3:
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
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var total;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getCount();

              case 2:
                total = _api.Notice.getNoticeCount();

                if (total) {
                  wx.removeTabBarBadge({
                    index: 1
                  });

                  _api.Notice.setNoticeCount(0);
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    getCount: function () {
      var _getCount = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        var user;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _api.Notice.getMsgCount();

              case 2:
                user = _context4.sent;

                if (user) {
                  this.user = user;
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCount() {
        return _getCount.apply(this, arguments);
      }

      return getCount;
    }(),
    goComment: function () {
      var _goComment = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(type) {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _api.User.setUserFiled(this.fileds[type], 0, false);

              case 2:
                this.user[this.fileds[type]] = 0;
                wx.navigateTo({
                  url: '/pages/comments?type=' + type
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function goComment(_x) {
        return _goComment.apply(this, arguments);
      }

      return goComment;
    }(),
    goFollow: function () {
      var _goFollow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _api.User.setUserFiled('followCount', 0, false);

              case 2:
                this.user['followCount'] = 0;
                wx.navigateTo({
                  url: '/pages/follow'
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function goFollow() {
        return _goFollow.apply(this, arguments);
      }

      return goFollow;
    }(),
    goMessage: function goMessage() {
      wx.navigateTo({
        url: '/pages/message'
      });
    },
    goPlane: function () {
      var _goPlane = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7() {
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _api.User.setUserFiled('planeCount', 0, false);

              case 2:
                this.user['planeCount'] = 0;
                wx.navigateTo({
                  url: '/pages/plane-reply'
                });

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function goPlane() {
        return _goPlane.apply(this, arguments);
      }

      return goPlane;
    }(),
    goReward: function () {
      var _goReward = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8() {
        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!this.user.rewardCount) {
                  _context8.next = 3;
                  break;
                }

                _context8.next = 3;
                return _api.User.setUserFiled('rewardCount', 0, false);

              case 3:
                wx.navigateTo({
                  url: '/pages/reward'
                });

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function goReward() {
        return _goReward.apply(this, arguments);
      }

      return goReward;
    }()
  }
}, {info: {"components":{},"on":{}}, handlers: {'5-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goMessage($event)
      })();
    
  }},'5-1': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goComment(2)
      })();
    
  }},'5-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goFollow($event)
      })();
    
  }},'5-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goComment(0)
      })();
    
  }},'5-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goComment(1)
      })();
    
  }},'5-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goReward($event)
      })();
    
  }},'5-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goPlane($event)
      })();
    
  }}}, models: {} });