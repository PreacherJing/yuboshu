"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _baseService = _interopRequireDefault(require('base-service.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FollowService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(FollowService, _BaseService);

  function FollowService() {
    _classCallCheck(this, FollowService);

    return _possibleConstructorReturn(this, _getPrototypeOf(FollowService).apply(this, arguments));
  }

  _createClass(FollowService, [{
    key: "getFans",
    value: function () {
      var _getFans = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(pageIndex, pageSize) {
        var _this = this;

        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context.next = 3;
                return this.request("/user/follow/list/".concat(userId, "/").concat(pageIndex, "/").concat(pageSize));

              case 3:
                res = _context.sent;

                if (!(res.code === 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.data.items.map(function (item) {
                  if (item.user) {
                    item.user = _this.parseUser(item.user);
                  }

                  return item;
                }));

              case 6:
                return _context.abrupt("return", null);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFans(_x, _x2) {
        return _getFans.apply(this, arguments);
      }

      return getFans;
    }()
  }, {
    key: "gerUserFans",
    value: function () {
      var _gerUserFans = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(userId, pageIndex, pageSize) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request("/user/follow/to/".concat(userId, "/").concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.data.map(this.parseUser.bind(this)));

              case 5:
                return _context2.abrupt("return", null);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function gerUserFans(_x3, _x4, _x5) {
        return _gerUserFans.apply(this, arguments);
      }

      return gerUserFans;
    }()
  }, {
    key: "getUserFollows",
    value: function () {
      var _getUserFollows = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(userId, pageIndex, pageSize) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request("/user/follow/from/".concat(userId, "/").concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context3.sent;

                if (!(res.code === 0)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", res.data.map(this.parseUser.bind(this)));

              case 5:
                return _context3.abrupt("return", null);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUserFollows(_x6, _x7, _x8) {
        return _getUserFollows.apply(this, arguments);
      }

      return getUserFollows;
    }()
  }, {
    key: "concern",
    value: function () {
      var _concern = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(toId) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context4.next = 3;
                return this.request("/user/follow/add/".concat(userId, "/").concat(toId));

              case 3:
                res = _context4.sent;

                if (!(res.code === 0)) {
                  _context4.next = 9;
                  break;
                }

                this.showToast('关注成功', 'success');
                return _context4.abrupt("return", true);

              case 9:
                this.showToast(res.erroCode > 0 ? res.msg : '关注失败,重试');
                return _context4.abrupt("return", false);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function concern(_x9) {
        return _concern.apply(this, arguments);
      }

      return concern;
    }()
  }, {
    key: "takeOff",
    value: function () {
      var _takeOff = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(toId) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context5.next = 3;
                return this.request("/user/follow/cancel/".concat(userId, "/").concat(toId));

              case 3:
                res = _context5.sent;

                if (!(res.code === 0)) {
                  _context5.next = 9;
                  break;
                }

                this.showToast('已取关', 'success');
                return _context5.abrupt("return", true);

              case 9:
                this.showToast(res.erroCode > 0 ? res.msg : '取关失败,重试');
                return _context5.abrupt("return", false);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function takeOff(_x10) {
        return _takeOff.apply(this, arguments);
      }

      return takeOff;
    }()
  }, {
    key: "getUserRank",
    value: function () {
      var _getUserRank = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.request('/user/follow/rank/index');

              case 2:
                res = _context6.sent;
                return _context6.abrupt("return", res.data);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getUserRank() {
        return _getUserRank.apply(this, arguments);
      }

      return getUserRank;
    }()
  }, {
    key: "getRank",
    value: function () {
      var _getRank = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7(pageIndex, pageSize) {
        var _this2 = this;

        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.request("/user/follow/rank/".concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context7.sent;

                if (!(res.code === 0)) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", res.data.map(function (item) {
                  if (item.user) {
                    item.user = _this2.parseUser(item.user);
                  }

                  return item;
                }));

              case 5:
                return _context7.abrupt("return", null);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getRank(_x11, _x12) {
        return _getRank.apply(this, arguments);
      }

      return getRank;
    }()
  }]);

  return FollowService;
}(_baseService["default"]);

exports["default"] = FollowService;