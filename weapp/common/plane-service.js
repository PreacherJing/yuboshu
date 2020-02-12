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

var PlaneService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(PlaneService, _BaseService);

  function PlaneService() {
    _classCallCheck(this, PlaneService);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlaneService).apply(this, arguments));
  }

  _createClass(PlaneService, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(content) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request('/plane/add', {
                  content: content
                }, 'POST');

              case 2:
                res = _context.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context.next = 7;
                  break;
                }

                this.showToast('已发送', 'success');
                return _context.abrupt("return", res.data);

              case 7:
                this.showToast('发送失败');
                return _context.abrupt("return", null);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function add(_x) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request("/plane/remove/".concat(id));

              case 2:
                res = _context2.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context2.next = 7;
                  break;
                }

                this.showToast('已撤回', 'success');
                return _context2.abrupt("return", true);

              case 7:
                this.showToast('撤回失败,重试');
                return _context2.abrupt("return", false);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function remove(_x2) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "edit",
    value: function () {
      var _edit = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(id, content) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request('/plane/edit', {
                  id: id,
                  content: content
                }, 'POST');

              case 2:
                res = _context3.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context3.next = 7;
                  break;
                }

                this.showToast('已更改', 'success');
                return _context3.abrupt("return", true);

              case 7:
                this.showToast('更改失败,重试');
                return _context3.abrupt("return", false);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function edit(_x3, _x4) {
        return _edit.apply(this, arguments);
      }

      return edit;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(pageIndex, pageSize) {
        var _this = this;

        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.request("/plane/list/".concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context4.sent;

                if (!(res.code === 0)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", res.data.map(function (item) {
                  if (item.user) {
                    item.user = _this.parseUser(item.user);
                  }

                  item.content = _this.parseEmoji(item.content);
                  return item;
                }));

              case 5:
                return _context4.abrupt("return", null);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function list(_x5, _x6) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request('/plane/get');

              case 2:
                res = _context5.sent;

                if (!(res.code === 0)) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", res.data);

              case 5:
                return _context5.abrupt("return", null);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "seen",
    value: function () {
      var _seen = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.request("/plane/seen/".concat(id));

              case 2:
                res = _context6.sent;

                if (!(res.code === 0)) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", true);

              case 5:
                return _context6.abrupt("return", false);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function seen(_x7) {
        return _seen.apply(this, arguments);
      }

      return seen;
    }()
  }, {
    key: "reply",
    value: function () {
      var _reply = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7(planeId, replyId, type, toId, content, imgs) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.request('/plane/reply', {
                  planeId: planeId,
                  replyId: replyId,
                  type: type,
                  toId: toId,
                  content: content,
                  imgs: imgs
                }, 'POST');

              case 2:
                res = _context7.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context7.next = 7;
                  break;
                }

                this.showToast('已回复', 'success');
                return _context7.abrupt("return", res.data);

              case 7:
                this.showToast('回复失败,重试');
                return _context7.abrupt("return", false);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function reply(_x8, _x9, _x10, _x11, _x12, _x13) {
        return _reply.apply(this, arguments);
      }

      return reply;
    }()
  }, {
    key: "getReplys",
    value: function () {
      var _getReplys = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8(pageIndex, pageSize) {
        var _this2 = this;

        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.request("/plane/replys/list/".concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context8.sent;

                if (!(res.code === 0)) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt("return", res.data.map(function (item) {
                  if (item.user) {
                    item.user = _this2.parseUser(item.user);
                  }

                  item.content = _this2.parseEmoji(item.content);

                  if (item.imgs) {
                    item.imgs = _this2.parseCommentImgs(item.imgs);
                  }

                  if (item.source) {
                    item.source.content = _this2.parseEmoji(item.source.content);

                    if (item.source.imgs) {
                      item.source.imgs = _this2.parseCommentImgs(item.source.imgs);
                    }
                  }

                  return item;
                }));

              case 5:
                return _context8.abrupt("return", null);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getReplys(_x14, _x15) {
        return _getReplys.apply(this, arguments);
      }

      return getReplys;
    }()
  }]);

  return PlaneService;
}(_baseService["default"]);

exports["default"] = PlaneService;