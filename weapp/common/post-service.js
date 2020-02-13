"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _baseService = _interopRequireDefault(require('base-service.js'));

var _core = _interopRequireDefault(require('../vendor.js')(1));

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

var PostService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(PostService, _BaseService);

  function PostService() {
    _classCallCheck(this, PostService);

    return _possibleConstructorReturn(this, _getPrototypeOf(PostService).call(this));
  }

  _createClass(PostService, [{
    key: "parsePost",
    value: function parsePost(post) {
      if (post.user) {
        post.user.gender = this.parseGender(post.user.gender);
      }

      post.origTxt = post.content;
      post.content = this.parseEmoji(post.content);

      if (post.imgs.length) {
        post.height = this.getHeight();
        post.imgs = this.parseImgs(post.imgs);
      }

      return post;
    }
  }, {
    key: "release",
    value: function () {
      var _release = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(userId, content, imgs) {
        var posType,
            mediaSrc,
            location,
            topic,
            _userId,
            res,
            title,
            _args = arguments;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                posType = _args.length > 3 && _args[3] !== undefined ? _args[3] : 0;
                mediaSrc = _args.length > 4 && _args[4] !== undefined ? _args[4] : null;
                location = _args.length > 5 && _args[5] !== undefined ? _args[5] : null;
                topic = _args.length > 6 && _args[6] !== undefined ? _args[6] : null;
                _userId = wx.getStorageSync('userId') || '';

                if (userId && userId !== 'undefined') {
                  _userId = parseInt(userId);
                }

                _context.next = 8;
                return this.request('/post/release', {
                  userId: _userId,
                  content: content,
                  imgs: imgs,
                  posType: posType,
                  mediaSrc: mediaSrc,
                  location: location,
                  topic: topic
                }, 'POST');

              case 8:
                res = _context.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", true);

              case 14:
                title = '发布失败,重试';

                if (res.erroCode > 0) {
                  title = res.msg;
                }

                this.showToast(title);
                return _context.abrupt("return", false);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function release(_x, _x2, _x3) {
        return _release.apply(this, arguments);
      }

      return release;
    }()
  }, {
    key: "recommend",
    value: function () {
      var _recommend = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(begin, direction, pageIndex, pageSize) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request('/post/list/recommend', {
                  begin: begin,
                  direction: direction,
                  pageIndex: pageIndex,
                  pageSize: pageSize
                }, 'POST');

              case 2:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.data.items.map(this.parsePost.bind(this)));

              case 5:
                return _context2.abrupt("return", null);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function recommend(_x4, _x5, _x6, _x7) {
        return _recommend.apply(this, arguments);
      }

      return recommend;
    }()
  }, {
    key: "getTop",
    value: function () {
      var _getTop = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request('/post/list/top');

              case 2:
                res = _context3.sent;

                if (!(res.code === 0)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", res.data.items.map(this.parsePost.bind(this)));

              case 5:
                return _context3.abrupt("return", null);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getTop() {
        return _getTop.apply(this, arguments);
      }

      return getTop;
    }()
  }, {
    key: "follow",
    value: function () {
      var _follow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(begin, direction, pageIndex, pageSize) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context4.next = 3;
                return this.request('/post/list/follow', {
                  userId: userId,
                  begin: begin,
                  direction: direction,
                  pageIndex: pageIndex,
                  pageSize: pageSize
                }, 'POST');

              case 3:
                res = _context4.sent;

                if (!(res.code === 0)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", res.data.items.map(this.parsePost.bind(this)));

              case 6:
                return _context4.abrupt("return", null);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function follow(_x8, _x9, _x10, _x11) {
        return _follow.apply(this, arguments);
      }

      return follow;
    }()
  }, {
    key: "followRecommend",
    value: function () {
      var _followRecommend = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request('/post/list/follow/recommend');

              case 2:
                res = _context5.sent;

                if (!(res.code === 0)) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", res.data.items.map(this.parsePost.bind(this)));

              case 5:
                return _context5.abrupt("return", null);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function followRecommend() {
        return _followRecommend.apply(this, arguments);
      }

      return followRecommend;
    }()
  }, {
    key: "getTopicPosts",
    value: function () {
      var _getTopicPosts = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6(topicId, type, pageIndex, pageSize) {
        var res, items;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.request("/topic/post/list/".concat(topicId, "/").concat(type, "/").concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context6.sent;

                if (!(res.code === 0)) {
                  _context6.next = 7;
                  break;
                }

                console.log(res.data.items);
                items = res.data.items.map(this.parsePost.bind(this));
                return _context6.abrupt("return", {
                  items: items,
                  count: res.data.count
                });

              case 7:
                return _context6.abrupt("return", null);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getTopicPosts(_x12, _x13, _x14, _x15) {
        return _getTopicPosts.apply(this, arguments);
      }

      return getTopicPosts;
    }()
  }, {
    key: "getPostForUser",
    value: function () {
      var _getPostForUser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7(userId, pageIndex, pageSize) {
        var _this = this;

        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.request("/post/list/user/".concat(userId, "/").concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context7.sent;

                if (!(res.code === 0)) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", {
                  count: res.data.count,
                  items: res.data.rows.map(function (post) {
                    var date = new Date(post.senDate);
                    post.year = date.getFullYear;
                    post.month = date.getMonth() + 1;
                    post.day = date.getDate();
                    post = _this.parsePost(post);
                    return post;
                  })
                });

              case 5:
                return _context7.abrupt("return", null);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getPostForUser(_x16, _x17, _x18) {
        return _getPostForUser.apply(this, arguments);
      }

      return getPostForUser;
    }()
  }, {
    key: "getPost",
    value: function () {
      var _getPost = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8(id) {
        var userId, res, post;
        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context8.next = 3;
                return this.request("/post/detail/".concat(userId, "/").concat(id), null, 'GET');

              case 3:
                res = _context8.sent;

                if (!(res.code === 0 && res.data.post)) {
                  _context8.next = 8;
                  break;
                }

                post = this.parsePost(res.data.post);

                if (post.topic) {
                  post.topic.iconPath = this.getQiniuUrl() + post.topic.iconPath;
                }

                return _context8.abrupt("return", post);

              case 8:
                return _context8.abrupt("return", null);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getPost(_x19) {
        return _getPost.apply(this, arguments);
      }

      return getPost;
    }()
  }, {
    key: "addComment",
    value: function () {
      var _addComment = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee9(toUserId, postId, content, imgs) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context9.next = 3;
                return this.request('/post/comment/add', {
                  userId: userId,
                  toUserId: toUserId,
                  postId: postId,
                  commenType: 0,
                  content: content,
                  imgs: imgs
                }, 'POST');

              case 3:
                res = _context9.sent;
                wx.hideLoading();

                if (!(res.code === 0 && res.data.comment)) {
                  _context9.next = 10;
                  break;
                }

                this.showToast('已发布', 'success');
                return _context9.abrupt("return", res.data.comment);

              case 10:
                this.showToast(res.erroCode > 0 ? res.msg : '评论失败');
                return _context9.abrupt("return", null);

              case 12:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function addComment(_x20, _x21, _x22, _x23) {
        return _addComment.apply(this, arguments);
      }

      return addComment;
    }()
  }, {
    key: "getComments",
    value: function () {
      var _getComments = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee10(postId, pageIndex, pageSize) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context10.next = 3;
                return this.request("/post/comment/list/".concat(userId, "/").concat(postId, "/").concat(pageIndex, "/").concat(pageSize), null, 'GET');

              case 3:
                res = _context10.sent;

                if (!(res.code === 0)) {
                  _context10.next = 6;
                  break;
                }

                return _context10.abrupt("return", res.data.items.map(this.parseComment.bind(this)));

              case 6:
                return _context10.abrupt("return", null);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getComments(_x24, _x25, _x26) {
        return _getComments.apply(this, arguments);
      }

      return getComments;
    }()
  }, {
    key: "thumbs",
    value: function () {
      var _thumbs = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee11(postId, commentId, sourceId, likeType, toUserId, isCancel) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context11.next = 3;
                return this.request('/post/thumbs', {
                  postId: postId,
                  commentId: commentId,
                  sourceId: sourceId,
                  likeType: likeType,
                  userId: userId,
                  toUserId: toUserId,
                  isCancel: isCancel
                }, 'POST');

              case 3:
                res = _context11.sent;

                if (!(res.code === 0 && res.data.result)) {
                  _context11.next = 9;
                  break;
                }

                this.showToast(isCancel ? '已取消' : '已点赞', 'success');
                return _context11.abrupt("return", true);

              case 9:
                this.showToast(res.erroCode > 0 ? res.msg : '操作失败,重试');
                return _context11.abrupt("return", false);

              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function thumbs(_x27, _x28, _x29, _x30, _x31, _x32) {
        return _thumbs.apply(this, arguments);
      }

      return thumbs;
    }()
  }, {
    key: "reply",
    value: function () {
      var _reply = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee12(toUserId, postId, commentId, content, imgs, toUserNick, replyId) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context12.next = 3;
                return this.request('/post/comment/reply/add', {
                  userId: userId,
                  toUserId: toUserId,
                  postId: postId,
                  commentId: commentId,
                  commenType: 0,
                  replyId: replyId,
                  content: content,
                  imgs: imgs,
                  toUserNick: toUserNick
                }, 'POST');

              case 3:
                res = _context12.sent;
                wx.hideLoading();

                if (!(res.code === 0 && res.data.reply)) {
                  _context12.next = 10;
                  break;
                }

                this.showToast('已发布', 'success');
                return _context12.abrupt("return", res.data.reply);

              case 10:
                this.showToast(res.erroCode > 0 ? res.msg : '评论失败,重试');
                return _context12.abrupt("return", null);

              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function reply(_x33, _x34, _x35, _x36, _x37, _x38, _x39) {
        return _reply.apply(this, arguments);
      }

      return reply;
    }()
  }, {
    key: "getReplys",
    value: function () {
      var _getReplys = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee13(commentId, pageIndex, pageSize) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context13.next = 3;
                return this.request("/post/comment/reply/list/".concat(userId, "/").concat(commentId, "/").concat(pageIndex, "/").concat(pageSize), null, 'GET');

              case 3:
                res = _context13.sent;

                if (!(res.code === 0)) {
                  _context13.next = 6;
                  break;
                }

                return _context13.abrupt("return", res.data.items.map(this.parseComment.bind(this)));

              case 6:
                return _context13.abrupt("return", null);

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getReplys(_x40, _x41, _x42) {
        return _getReplys.apply(this, arguments);
      }

      return getReplys;
    }()
  }, {
    key: "getCommentDetail",
    value: function () {
      var _getCommentDetail = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee14(id) {
        var res, comment;
        return _regeneratorRuntime2["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.request("/post/comment/detail/".concat(id), null, 'GET');

              case 2:
                res = _context14.sent;

                if (!(res.code === 0)) {
                  _context14.next = 6;
                  break;
                }

                comment = this.parseComment(res.data.comment);
                return _context14.abrupt("return", comment);

              case 6:
                return _context14.abrupt("return", null);

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getCommentDetail(_x43) {
        return _getCommentDetail.apply(this, arguments);
      }

      return getCommentDetail;
    }()
  }, {
    key: "getLikers",
    value: function () {
      var _getLikers = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee15(postId, pageIndex, pageSize) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.request("/post/like/list/".concat(postId, "/").concat(pageIndex, "/").concat(pageSize));

              case 2:
                res = _context15.sent;

                if (!(res.code === 0)) {
                  _context15.next = 7;
                  break;
                }

                return _context15.abrupt("return", res.data.items.map(this.parseUser.bind(this)));

              case 7:
                return _context15.abrupt("return", null);

              case 8:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getLikers(_x44, _x45, _x46) {
        return _getLikers.apply(this, arguments);
      }

      return getLikers;
    }()
  }, {
    key: "removePost",
    value: function () {
      var _removePost = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee16(id) {
        var result, userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return _core["default"].wx.showModal({
                  title: '提示',
                  content: '确定要删除该条动弹吗？'
                });

              case 2:
                result = _context16.sent;

                if (!result.confirm) {
                  _context16.next = 14;
                  break;
                }

                userId = wx.getStorageSync('userId');
                _context16.next = 7;
                return this.request("/post/remove/".concat(userId, "/").concat(id), null, 'GET');

              case 7:
                res = _context16.sent;

                if (!(res.code === 0)) {
                  _context16.next = 13;
                  break;
                }

                this.showToast('已删除', 'success');
                return _context16.abrupt("return", true);

              case 13:
                this.showToast();

              case 14:
                return _context16.abrupt("return", false);

              case 15:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function removePost(_x47) {
        return _removePost.apply(this, arguments);
      }

      return removePost;
    }()
  }, {
    key: "getShareImg",
    value: function () {
      var _getShareImg = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee17(fileName) {
        var isUrl,
            token,
            res,
            _args17 = arguments;
        return _regeneratorRuntime2["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                isUrl = _args17.length > 1 && _args17[1] !== undefined ? _args17[1] : false;
                token = wx.getStorageSync('token') || '';
                _context17.next = 4;
                return _core["default"].wx.downloadFile({
                  url: isUrl ? fileName : "".concat(this.getBaseUrl(), "/upload/share/").concat(fileName),
                  header: {
                    token: token,
                    'Content-Type': 'application/json',
                    'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
                  },
                  method: 'GET'
                });

              case 4:
                res = _context17.sent;
                console.log(res);

                if (!(res.statusCode === 200)) {
                  _context17.next = 8;
                  break;
                }

                return _context17.abrupt("return", res.tempFilePath);

              case 8:
                return _context17.abrupt("return", null);

              case 9:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getShareImg(_x48) {
        return _getShareImg.apply(this, arguments);
      }

      return getShareImg;
    }()
  }, {
    key: "getUserQr",
    value: function () {
      var _getUserQr = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee18(postId) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context18.next = 3;
                return this.request("/user/qr/".concat(userId, "/").concat(postId), null, 'GET');

              case 3:
                res = _context18.sent;

                if (!(res.code === 0)) {
                  _context18.next = 6;
                  break;
                }

                return _context18.abrupt("return", res.data);

              case 6:
                return _context18.abrupt("return", null);

              case 7:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getUserQr(_x49) {
        return _getUserQr.apply(this, arguments);
      }

      return getUserQr;
    }()
  }, {
    key: "reward",
    value: function () {
      var _reward = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee19(toId, postId, score) {
        var fromId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                fromId = wx.getStorageSync('userId');
                _context19.next = 3;
                return this.request('/reward/add', {
                  fromId: fromId,
                  toId: toId,
                  postId: postId,
                  score: score
                }, 'POST');

              case 3:
                res = _context19.sent;
                wx.hideLoading();

                if (!(res.code === 0)) {
                  _context19.next = 10;
                  break;
                }

                this.showToast('赞赏成功', 'success');
                return _context19.abrupt("return", true);

              case 10:
                if (res.erroCode > 0) {
                  this.showToast(res.msg);
                } else {
                  this.showToast();
                }

              case 11:
                return _context19.abrupt("return", false);

              case 12:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function reward(_x50, _x51, _x52) {
        return _reward.apply(this, arguments);
      }

      return reward;
    }()
  }, {
    key: "rewardLogs",
    value: function () {
      var _rewardLogs = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee20(pageIndex, pageSize) {
        var _this2 = this;

        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context20.next = 3;
                return this.request("/reward/logs/".concat(userId, "/").concat(pageIndex, "/").concat(pageSize));

              case 3:
                res = _context20.sent;

                if (!(res.code === 0)) {
                  _context20.next = 6;
                  break;
                }

                return _context20.abrupt("return", res.data.map(function (item) {
                  item.post = _this2.parsePost(item.post);
                  return item;
                }));

              case 6:
                return _context20.abrupt("return", null);

              case 7:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function rewardLogs(_x53, _x54) {
        return _rewardLogs.apply(this, arguments);
      }

      return rewardLogs;
    }()
  }]);

  return PostService;
}(_baseService["default"]);

exports["default"] = PostService;