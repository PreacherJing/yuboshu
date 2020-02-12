"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _baseService = _interopRequireDefault(require('base-service.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var CommentsService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(CommentsService, _BaseService);

  function CommentsService() {
    _classCallCheck(this, CommentsService);

    return _possibleConstructorReturn(this, _getPrototypeOf(CommentsService).apply(this, arguments));
  }

  _createClass(CommentsService, [{
    key: "getList",
    value: function () {
      var _getList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(url, pageIndex, pageSize) {
        var _this = this;

        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context.next = 3;
                return this.request("".concat(url, "/").concat(userId, "/").concat(pageIndex, "/").concat(pageSize), null, 'GET');

              case 3:
                res = _context.sent;

                if (!(res.code === 0)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.data.items.map(function (item) {
                  item.height = _this.getHeight();

                  if (item.user) {
                    item.user.gender = _this.parseGender(item.user.gender);
                  }

                  if (item.content) {
                    item.content = _this.parseEmoji(item.content);
                  }

                  if (item.source && item.source.imgs) {
                    item.source.imgs = _this.parseCommentImgs(item.source.imgs);
                  }

                  if (item.imgs) {
                    item.imgs = _this.parseCommentImgs(item.imgs);
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

      function getList(_x, _x2, _x3) {
        return _getList.apply(this, arguments);
      }

      return getList;
    }()
  }, {
    key: "getCommentForUser",
    value: function () {
      var _getCommentForUser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(pageIndex, pageSize) {
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getList('/notice/comment', pageIndex, pageSize);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCommentForUser(_x4, _x5) {
        return _getCommentForUser.apply(this, arguments);
      }

      return getCommentForUser;
    }()
  }, {
    key: "getLikeForUser",
    value: function () {
      var _getLikeForUser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(pageIndex, pageSize) {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getList('/notice/like', pageIndex, pageSize);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getLikeForUser(_x6, _x7) {
        return _getLikeForUser.apply(this, arguments);
      }

      return getLikeForUser;
    }()
  }, {
    key: "getReplyForUser",
    value: function () {
      var _getReplyForUser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(pageIndex, pageSize) {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getList('/notice/reply', pageIndex, pageSize);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getReplyForUser(_x8, _x9) {
        return _getReplyForUser.apply(this, arguments);
      }

      return getReplyForUser;
    }()
  }]);

  return CommentsService;
}(_baseService["default"]);

exports["default"] = CommentsService;