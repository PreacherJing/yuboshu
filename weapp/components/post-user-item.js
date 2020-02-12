"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    item: Object,
    index: Number,
    isSelf: Boolean,
    showDel: {
      type: Boolean,
      "default": true
    }
  },
  data: {},
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
    onAction: function onAction() {
      var _this = this;

      wx.showActionSheet({
        itemList: ['删除'],
        itemColor: '#EA0D23',
        success: function () {
          var _success = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime2["default"].mark(function _callee(res) {
            return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (res.tapIndex === 0) {
                      _this.$emit('del', {
                        id: _this.item.id,
                        index: _this.index
                      });
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function success(_x) {
            return _success.apply(this, arguments);
          }

          return success;
        }(),
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    goDetail: function goDetail() {
      if (this.item.mediaSrc) {
        wx.navigateTo({
          url: '/pages/detail-video?id=' + this.item.id
        });
      } else {
        wx.navigateTo({
          url: '/pages/post-details?id=' + this.item.id
        });
      }
    },
    onShare: function onShare() {
      wx.navigateTo({
        url: '/pages/post-share?id=' + this.item.id
      });
    },
    openMap: function openMap(post) {
      wx.openLocation({
        latitude: Number.parseFloat(post.latitude),
        longitude: Number.parseFloat(post.longitude),
        name: post.address
      });
    },
    goTopic: function goTopic(id) {
      wx.navigateTo({
        url: '/pages/topic?id=' + id
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'90-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goDetail($event)
      })();
    
  }},'90-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.item.imgs, index)
      })();
    
  }},'90-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(_vm.item.topicId)
      })();
    
  }},'90-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.openMap(_vm.item)
      })();
    
  }},'90-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'90-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }}}, models: {} });