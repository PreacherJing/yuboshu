"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  config: {},
  data: {
    state: 0,
    placeholder: '来,神评是你的',
    lables: ['评论了你：', '回复了你：', '赞了你的'],
    des: ['动弹', '评论', '回复'],
    icons: ['pinglun', 'huifu', 'zan-full'],
    title: ['收到的评论', '收到的回复', '收到的点赞'],
    toUserId: null,
    postId: null,
    commentId: null,
    replyId: null,
    toUserNick: null,
    items: [],
    showInput: false,
    pageIndex: 1,
    pageSize: 20,
    hasMore: true,
    fromType: '0' // 0:评论1:回复

  },
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee(q) {
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.fromType = q.type;
              wx.setNavigationBarTitle({
                title: this.title[this.fromType]
              });
              _context.next = 4;
              return this.loadData();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function onLoad(_x) {
      return _onLoad.apply(this, arguments);
    }

    return onLoad;
  }(),
  onPullDownRefresh: function () {
    var _onPullDownRefresh = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee2() {
      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.state = 0;
              this.hasMore = true;
              this.pageIndex = 1;
              this.items = [];
              _context2.next = 6;
              return this.loadData();

            case 6:
              wx.stopPullDownRefresh();

            case 7:
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
  onReachBottom: function () {
    var _onReachBottom = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee3() {
      return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.loadData();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function onReachBottom() {
      return _onReachBottom.apply(this, arguments);
    }

    return onReachBottom;
  }(),
  methods: {
    onRetry: function () {
      var _onRetry = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.state = 0;
                this.pageIndex = 1;
                _context4.next = 4;
                return this.loadData();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onRetry() {
        return _onRetry.apply(this, arguments);
      }

      return onRetry;
    }(),
    loadData: function () {
      var _loadData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.hasMore) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                res = null;

                if (!(this.fromType === '0')) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 6;
                return _api.Comment.getCommentForUser(this.pageIndex, this.pageSize);

              case 6:
                res = _context5.sent;
                _context5.next = 18;
                break;

              case 9:
                if (!(this.fromType === '1')) {
                  _context5.next = 15;
                  break;
                }

                _context5.next = 12;
                return _api.Comment.getReplyForUser(this.pageIndex, this.pageSize);

              case 12:
                res = _context5.sent;
                _context5.next = 18;
                break;

              case 15:
                _context5.next = 17;
                return _api.Comment.getLikeForUser(this.pageIndex, this.pageSize);

              case 17:
                res = _context5.sent;

              case 18:
                if (!res) {
                  _context5.next = 43;
                  break;
                }

                this.state = 2;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context5.prev = 23;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;
                  this.items.push(item);
                }

                _context5.next = 31;
                break;

              case 27:
                _context5.prev = 27;
                _context5.t0 = _context5["catch"](23);
                _didIteratorError = true;
                _iteratorError = _context5.t0;

              case 31:
                _context5.prev = 31;
                _context5.prev = 32;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 34:
                _context5.prev = 34;

                if (!_didIteratorError) {
                  _context5.next = 37;
                  break;
                }

                throw _iteratorError;

              case 37:
                return _context5.finish(34);

              case 38:
                return _context5.finish(31);

              case 39:
                this.pageIndex++;
                this.hasMore = res.length === this.pageSize;
                _context5.next = 44;
                break;

              case 43:
                this.state = 1;

              case 44:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[23, 27, 31, 39], [32,, 34, 38]]);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }(),
    goPost: function goPost(item) {
      console.log(item);
      var url = '';

      switch (this.fromType) {
        case '0':
          url = "/pages/post-details?id=".concat(item.postId);
          break;

        case '1':
          url = "/pages/post-comment?id=".concat(item.commentId);
          break;

        case '2':
          if (item.likeType === 0) {
            url = "/pages/post-details?id=".concat(item.postId);
          } else {
            url = "/pages/post-comment?id=".concat(item.commentId || item.sourceId);
          }

          break;

        default:
          break;
      }

      wx.navigateTo({
        url: url
      });
    },
    onPreview: function onPreview(imgs, index) {
      var urls = imgs.map(function (img) {
        return img.origPath;
      });
      wx.previewImage({
        urls: urls,
        current: urls[index]
      });
    },
    onReply: function onReply(item) {
      this.placeholder = "\u56DE\u590D".concat(item.user.nick, ":");
      this.showInput = true;
      this.toUserId = item.user.id;
      this.postId = item.postId;

      if (this.fromType === '1') {
        this.commentId = item.commentId;
        this.replyId = item.id;
        this.toUserNick = item.user.nick;
      } else {
        this.commentId = item.id;
      }
    },
    onHide: function onHide() {
      this.showInput = false;
    },
    onAction: function onAction() {
      wx.navigateTo({
        url: '/pages/post-type'
      });
    }
  }
}, {info: {"components":{"loading":{"path":"../components/loading/loading"},"user-item":{"path":"../components/user-item"},"no-more":{"path":"../components/no-more"},"empty":{"path":"../components/empty"},"mp-page":{"path":"../components/mp-page"},"comment-input":{"path":"../components/comment-input"}},"on":{"15-0":["retry"],"15-4":["action"],"15-5":["hide"]}}, handlers: {'15-0': {"retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'15-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onReply(item)
      })();
    
  }},'15-2': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(item.imgs, index)
      })();
    
  }},'15-3': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goPost(item)
      })();
    
  }},'15-4': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }},'15-5': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }}}, models: {} });