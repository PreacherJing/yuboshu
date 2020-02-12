"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

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
    showInfo: {
      type: Boolean,
      "default": true
    },
    isTop: {
      type: Boolean,
      "default": false
    },
    showMore: {
      type: Boolean,
      "default": false
    },
    index: Number,
    showBtnFollow: {
      type: Boolean,
      "default": true
    },
    item: Object
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
    goTopic: function goTopic(id) {
      wx.navigateTo({
        url: '/pages/topic?id=' + id
      });
    },
    goDetail: function goDetail() {
      var _this = this;

      if (!this.showInfo) {
        return;
      }

      if (this.$wx.getOpenerEventChannel) {
        wx.navigateTo({
          url: '/pages/post-details?id=' + this.item.id
        });
      } else {
        wx.navigateTo({
          url: '/pages/post-details?id=' + this.item.id,
          events: {
            acceptDataFromOpenedPage: function () {
              var _acceptDataFromOpenedPage = _asyncToGenerator(
              /*#__PURE__*/
              _regeneratorRuntime2["default"].mark(function _callee(res) {
                return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (res.hasFollow) {
                          _this.item.hasFollow = res.hasFollow;

                          _this.$emit('follow', _this.item.user.id);
                        }

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              function acceptDataFromOpenedPage(_x) {
                return _acceptDataFromOpenedPage.apply(this, arguments);
              }

              return acceptDataFromOpenedPage;
            }()
          }
        });
      }
    },
    onFollow: function () {
      var _onFollow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var _wx$getStorageSync, isBinding, isFollow;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _wx$getStorageSync = wx.getStorageSync('user'), isBinding = _wx$getStorageSync.isBinding;

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
                return _api.Follow.concern(this.item.userId);

              case 7:
                isFollow = _context2.sent;
                this.item.hasFollow = isFollow;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onFollow() {
        return _onFollow.apply(this, arguments);
      }

      return onFollow;
    }(),
    openMap: function openMap(post) {
      wx.openLocation({
        latitude: Number.parseFloat(post.latitude),
        longitude: Number.parseFloat(post.longitude),
        name: post.address
      });
    },
    onShare: function onShare() {
      wx.navigateTo({
        url: '/pages/post-share?id=' + this.item.id
      });
    },
    onMore: function onMore() {
      this.$emit('more', {
        post: this.item,
        index: this.index
      });
    }
  }
}, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'71-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'71-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'71-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'71-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }},'71-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }},'71-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openMap(_vm.item)
      })();
    
  }},'71-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.topicId)
      })();
    
  }},'71-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'71-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'71-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'71-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'71-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }},'71-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }},'71-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openMap(_vm.item)
      })();
    
  }},'71-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.topicId)
      })();
    
  }},'71-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'71-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'71-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'71-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'71-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }},'71-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }},'71-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openMap(_vm.item)
      })();
    
  }},'71-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.topicId)
      })();
    
  }},'71-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"user-item":{"path":"user-item"}},"on":{}}, handlers: {'71-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'71-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'71-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'71-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }},'71-4': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }},'71-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openMap(_vm.item)
      })();
    
  }},'71-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.topicId)
      })();
    
  }},'71-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }}}, models: {} });