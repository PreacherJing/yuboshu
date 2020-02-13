"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  props: {
    item: Object,
    actionType: {
      type: Number,
      "default": 0 // 0:跳转到详情1:直接弹出评论框，2:回复评论者

    },
    showAction: {
      type: Boolean,
      "default": true
    }
  },
  methods: {
    onPreview: function onPreview(imgs, index) {
      var urls = imgs.map(function (img) {
        return img.origPath;
      });
      wx.previewImage({
        urls: urls,
        current: urls[index]
      });
    },
    goComment: function goComment() {
      switch (this.actionType) {
        case 0:
          wx.navigateTo({
            url: '/pages/post-comment?id=' + this.item.id
          });
          break;

        case 1:
          this.$emit('itemTap', this.item);
          break;

        case 2:
          this.$emit('itemTap', this.item);
          break;

        default:
          break;
      }
    },
    onFollow: function onFollow() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _wx$getStorageSync, isBinding, isFollow;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _wx$getStorageSync = wx.getStorageSync('user'), isBinding = _wx$getStorageSync.isBinding;

                if (!(isBinding === 0)) {
                  _context.next = 5;
                  break;
                }

                wx.navigateTo({
                  url: '/pages/gender'
                });
                _context.next = 9;
                break;

              case 5:
                _context.next = 7;
                return _api.Follow.concern(_this.item.userId);

              case 7:
                isFollow = _context.sent;
                _this.item.hasFollow = isFollow;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onThumbs: function onThumbs() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var _wx$getStorageSync2, isBinding, res;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _wx$getStorageSync2 = wx.getStorageSync('user'), isBinding = _wx$getStorageSync2.isBinding;

                if (!(isBinding === 0)) {
                  _context2.next = 5;
                  break;
                }

                wx.navigateTo({
                  url: '/pages/gender'
                });
                _context2.next = 9;
                break;

              case 5:
                _context2.next = 7;
                return _api.Post.thumbs(_this2.item.postId, _this2.item.commentId, _this2.item.id, _this2.actionType + 1, _this2.item.userId, _this2.item.hasLike);

              case 7:
                res = _context2.sent;

                if (res) {
                  _this2.item.hasLike = !_this2.item.hasLike;

                  if (_this2.item.hasLike) {
                    _this2.item.thumbsCount++;
                  } else {
                    _this2.item.thumbsCount--;
                  }
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    goUser: function goUser(id) {
      console.log(id);
      wx.navigateTo({
        url: '/pages/user-details?id=' + id
      });
    }
  }
}, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'77-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComment($event)
      })();
    
  }},'77-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThumbs($event)
      })();
    
  }},'77-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'77-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goUser(_vm.item.toUserId)
      })();
    
  }},'77-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'77-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComment($event)
      })();
    
  }},'77-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThumbs($event)
      })();
    
  }},'77-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'77-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goUser(_vm.item.toUserId)
      })();
    
  }},'77-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'77-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComment($event)
      })();
    
  }},'77-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThumbs($event)
      })();
    
  }},'77-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'77-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goUser(_vm.item.toUserId)
      })();
    
  }},'77-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'77-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComment($event)
      })();
    
  }},'77-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThumbs($event)
      })();
    
  }},'77-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'77-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goUser(_vm.item.toUserId)
      })();
    
  }},'77-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'77-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComment($event)
      })();
    
  }},'77-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThumbs($event)
      })();
    
  }},'77-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'77-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goUser(_vm.item.toUserId)
      })();
    
  }},'77-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'77-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goComment($event)
      })();
    
  }},'77-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThumbs($event)
      })();
    
  }},'77-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'77-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goUser(_vm.item.toUserId)
      })();
    
  }},'77-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }}}, models: {} });