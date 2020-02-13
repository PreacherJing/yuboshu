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

var KEY_TOPIC_TRACK = 'TOPIC_TRACK';

var TopicService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(TopicService, _BaseService);

  function TopicService() {
    _classCallCheck(this, TopicService);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopicService).call(this));
  }

  _createClass(TopicService, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(title, des, iconPath, nickName) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request('/topic/add', {
                  title: title,
                  des: des,
                  iconPath: iconPath,
                  nickName: nickName
                }, 'POST');

              case 2:
                res = _context.sent;

                if (!(res.code === 0)) {
                  _context.next = 8;
                  break;
                }

                this.showToast('创建话题成功', 'success');
                return _context.abrupt("return", res.data);

              case 8:
                if (res.erroCode > 0) {
                  this.showToast(res.msg);
                } else {
                  this.showToast('创建话题失败');
                }

              case 9:
                return _context.abrupt("return", null);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function add(_x, _x2, _x3, _x4) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "getTopicList",
    value: function () {
      var _getTopicList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(index, size) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request("/topic/list/".concat(index, "/").concat(size));

              case 2:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.data.rows.map(this.parseTopic.bind(this)));

              case 5:
                return _context2.abrupt("return", null);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getTopicList(_x5, _x6) {
        return _getTopicList.apply(this, arguments);
      }

      return getTopicList;
    }()
  }, {
    key: "searchTopic",
    value: function () {
      var _searchTopic = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(keyword, index, size) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request("/topic/list/search/".concat(keyword, "/").concat(index, "/").concat(size));

              case 2:
                res = _context3.sent;

                if (!(res.code === 0)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", res.data.rows.map(this.parseTopic.bind(this)));

              case 5:
                return _context3.abrupt("return", null);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function searchTopic(_x7, _x8, _x9) {
        return _searchTopic.apply(this, arguments);
      }

      return searchTopic;
    }()
  }, {
    key: "getTopic",
    value: function () {
      var _getTopic = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.request("/topic/detail/".concat(id));

              case 2:
                res = _context4.sent;

                if (!(res.code === 0)) {
                  _context4.next = 6;
                  break;
                }

                res.data.topic = this.parseTopic(res.data.topic);
                return _context4.abrupt("return", res.data.topic);

              case 6:
                return _context4.abrupt("return", null);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getTopic(_x10) {
        return _getTopic.apply(this, arguments);
      }

      return getTopic;
    }()
  }, {
    key: "topicFollow",
    value: function () {
      var _topicFollow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request("/topic/follow/".concat(id));

              case 2:
                res = _context5.sent;

                if (!(res.code === 0)) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", true);

              case 5:
                return _context5.abrupt("return", false);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function topicFollow(_x11) {
        return _topicFollow.apply(this, arguments);
      }

      return topicFollow;
    }()
  }, {
    key: "myTopics",
    value: function () {
      var _myTopics = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6(pageIndex, pageSize) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.request("/topic/user/list/".concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context6.sent;

                if (!(res !== -1)) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", res.data.map(this.parseTopic.bind(this)));

              case 5:
                return _context6.abrupt("return", null);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function myTopics(_x12, _x13) {
        return _myTopics.apply(this, arguments);
      }

      return myTopics;
    }()
  }, {
    key: "topicRank",
    value: function () {
      var _topicRank = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7(topicId, pageIndex, pageSize) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.request("/topic/user/rank/".concat(topicId, "/").concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context7.sent;
                return _context7.abrupt("return", res.data);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function topicRank(_x14, _x15, _x16) {
        return _topicRank.apply(this, arguments);
      }

      return topicRank;
    }()
  }, {
    key: "removePost",
    value: function () {
      var _removePost = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8(topicId, postId) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.request("/post/topic/remove/".concat(topicId, "/").concat(postId));

              case 2:
                res = _context8.sent;

                if (!(res.code === 0)) {
                  _context8.next = 8;
                  break;
                }

                this.showToast('移除成功', 'success');
                return _context8.abrupt("return", true);

              case 8:
                if (res.erroCode > 0) {
                  this.showToast(res.msg);
                } else {
                  this.showToast();
                }

              case 9:
                return _context8.abrupt("return", false);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function removePost(_x17, _x18) {
        return _removePost.apply(this, arguments);
      }

      return removePost;
    }()
  }, {
    key: "recommendPost",
    value: function () {
      var _recommendPost = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee9(topicId, postId, isRecommend) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.request("/post/topic/recommend/".concat(topicId, "/").concat(postId, "/").concat(isRecommend ? 1 : 0));

              case 2:
                res = _context9.sent;

                if (!(res.code === 0)) {
                  _context9.next = 8;
                  break;
                }

                this.showToast('设置成功', 'success');
                return _context9.abrupt("return", true);

              case 8:
                if (res.erroCode > 0) {
                  this.showToast(res.msg);
                } else {
                  this.showToast();
                }

              case 9:
                return _context9.abrupt("return", false);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function recommendPost(_x19, _x20, _x21) {
        return _recommendPost.apply(this, arguments);
      }

      return recommendPost;
    }()
  }, {
    key: "topicAddTrack",
    value: function topicAddTrack(topic) {
      try {
        var items = wx.getStorageSync(KEY_TOPIC_TRACK);

        if (items) {
          items = items.filter(function (item) {
            return item.id !== topic.id;
          });
          items.unshift(topic);

          if (items.length > 15) {
            items = items.slice(0, 15);
          }
        } else {
          items = [topic];
        }

        try {
          wx.setStorageSync(KEY_TOPIC_TRACK, items);
        } catch (e) {}
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "getTopicTrack",
    value: function getTopicTrack() {
      try {
        var items = wx.getStorageSync(KEY_TOPIC_TRACK);
        return items || null;
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "cleanTopicTrack",
    value: function cleanTopicTrack() {
      try {
        wx.removeStorageSync(KEY_TOPIC_TRACK);
        return true;
      } catch (e) {
        showToast('清空数据失败,重试');
        return false;
      }
    }
  }]);

  return TopicService;
}(_baseService["default"]);

exports["default"] = TopicService;