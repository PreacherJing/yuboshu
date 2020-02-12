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

var NoticeService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(NoticeService, _BaseService);

  function NoticeService() {
    _classCallCheck(this, NoticeService);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoticeService).apply(this, arguments));
  }

  _createClass(NoticeService, [{
    key: "getMsgCount",
    value: function () {
      var _getMsgCount = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var res, obj;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request('/notice/msg', null, 'GET');

              case 2:
                res = _context.sent;

                if (!(res.code === 0)) {
                  _context.next = 9;
                  break;
                }

                this.setMsgCount(res.data);
                obj = res.data;

                if (obj.comment) {
                  if (obj.comment.imgs && obj.comment.imgs.length) {
                    obj.comment.content = '[图片]' + obj.comment.content;
                  }
                }

                if (obj.reply) {
                  if (obj.reply.imgs && obj.reply.imgs.length) {
                    obj.reply.content = '[图片]' + obj.reply.content;
                  }
                }

                return _context.abrupt("return", res.data);

              case 9:
                return _context.abrupt("return", null);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMsgCount() {
        return _getMsgCount.apply(this, arguments);
      }

      return getMsgCount;
    }()
  }, {
    key: "setNoticeCount",
    value: function setNoticeCount(total) {
      wx.setStorageSync('msgcount', total);
    }
  }, {
    key: "getNoticeCount",
    value: function getNoticeCount() {
      return wx.getStorageSync('msgcount') || 0;
    }
  }, {
    key: "getSysMsg",
    value: function () {
      var _getSysMsg = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(pageIndex, pageSize) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context2.next = 3;
                return this.request("/notice/sys/".concat(userId, "/").concat(pageIndex, "/").concat(pageSize), null, 'GET');

              case 3:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.data.items);

              case 6:
                return _context2.abrupt("return", null);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSysMsg(_x, _x2) {
        return _getSysMsg.apply(this, arguments);
      }

      return getSysMsg;
    }()
  }, {
    key: "setRead",
    value: function () {
      var _setRead = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(id) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context3.next = 3;
                return this.request("/notice/read/".concat(userId, "/").concat(id), null, 'GET');

              case 3:
                res = _context3.sent;

                if (!(res.code === 0)) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", true);

              case 6:
                return _context3.abrupt("return", false);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setRead(_x3) {
        return _setRead.apply(this, arguments);
      }

      return setRead;
    }()
  }]);

  return NoticeService;
}(_baseService["default"]);

exports["default"] = NoticeService;