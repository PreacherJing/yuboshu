"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    state: 0,
    toUserId: null,
    toUserNick: null,
    showInput: false,
    comment: null,
    replyId: null,
    placeholder: '',
    user: null,
    commentId: null
  },
  onShareAppMessage: function onShareAppMessage() {
    var imageUrl = this.comment.imgs && this.comment.imgs.length ? this.comment.imgs[0].path : "".concat(_api.Post.getImgUrl(), "/share.png");
    return {
      title: this.comment.origTxt,
      imageUrl: imageUrl,
      path: "/pages/index?id=".concat(this.user.id, "&postId=").concat(this.comment.id)
    };
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var id;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.user = wx.getStorageSync('user');
              id = q.id;
              _this.commentId = id;
              _context.next = 5;
              return _this.init();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    init: function init() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.state = 0;
                _context2.next = 3;
                return _api.Post.getCommentDetail(_this2.commentId);

              case 3:
                res = _context2.sent;

                if (res) {
                  _this2.comment = res;
                  _this2.toUserId = _this2.comment.userId;
                  _this2.placeholder = "\u56DE\u590D".concat(_this2.comment.user.nick, ":");
                  _this2.state = 3;
                } else {
                  _this2.state = 1;
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onRetry: function onRetry() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.init();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onShowInput: function onShowInput() {
      this.showInput = true;
    },
    onHide: function onHide() {
      if (this.comment) {
        this.placeholder = "\u56DE\u590D".concat(this.comment.user.nick, ":");
        this.toUserId = this.comment.userId;
      }

      this.toUserNick = null;
      this.replyId = null;
      this.showInput = false;
    },
    onComment: function onComment(comment) {
      this.$refs.comments.unshift(comment);
    },
    onItemTap: function onItemTap(comment) {
      this.placeholder = "\u56DE\u590D".concat(comment.user.nick, ":");
      this.toUserId = comment.user.id;
      this.toUserNick = comment.user.nick;
      this.replyId = comment.id;
      this.onShowInput();
    },
    onThumbs: function onThumbs(hasLike) {
      this.comment.hasLike = hasLike;

      if (hasLike) {
        this.comment.thumbsCount++;
      } else {
        this.comment.thumbsCount--;
      }
    }
  }
}, {info: {"components":{"mp-page":{"path":"../components/mp-page"},"comment-action":{"path":"../components/comment-action"},"comment-item":{"path":"../components/post-comment-item"},"post-replys":{"path":"../components/post-replys"},"comment-input":{"path":"../components/comment-input"}},"on":{"9-0":["retry"],"9-1":["action","itemTap"],"9-3":["thumbs","showInput"],"9-5":["hide","comment"]}}, handlers: {'9-0': {"retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'9-1': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowInput($event)
      })();
    
  }, "itemTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onItemTap($event)
      })();
    
  }},'9-3': {"thumbs": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThumbs($event)
      })();
    
  }, "showInput": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowInput($event)
      })();
    
  }},'9-5': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }, "comment": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onComment($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"mp-page":{"path":"../components/mp-page"},"comment-action":{"path":"../components/comment-action"},"comment-item":{"path":"../components/post-comment-item"},"post-replys":{"path":"../components/post-replys"},"comment-input":{"path":"../components/comment-input"}},"on":{"9-0":["retry"],"9-1":["action","itemTap"],"9-3":["thumbs","showInput"],"9-5":["hide","comment"]}}, handlers: {'9-0': {"retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'9-1': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowInput($event)
      })();
    
  }, "itemTap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onItemTap($event)
      })();
    
  }},'9-3': {"thumbs": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThumbs($event)
      })();
    
  }, "showInput": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowInput($event)
      })();
    
  }},'9-5': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }, "comment": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onComment($event)
      })();
    
  }}}, models: {} });