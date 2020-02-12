"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _share = _interopRequireDefault(require('../common/share.js'));

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  mixins: [_share["default"]],
  data: {
    labels: ['话题', '推荐', '关注'],
    current: 1,
    tabIndex: 1,
    hasInitTopic: false,
    hasInitFollow: false,
    loading: false
  },
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee(q) {
      var total;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(q);
              total = _api.Notice.getNoticeCount();

              if (total > 0) {
                wx.setTabBarBadge({
                  index: 1,
                  text: total.toString()
                });
              }

              if (this.$app.$options.globalData.postId) {
                wx.navigateTo({
                  url: '/pages/post-details?id=' + this.$app.$options.globalData.postId
                });
              }

              if (this.$app.$options.globalData.commentId) {
                wx.navigateTo({
                  url: '/pages/post-comment?id=' + this.$app.$options.globalData.commentId
                });
              }

              _api.Notice.appUpdate();

            case 6:
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
  watch: {
    current: function () {
      var _current = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(index) {
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(index === 0)) {
                  _context2.next = 8;
                  break;
                }

                if (this.hasInitTopic) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 4;
                return this.$refs.topic.init();

              case 4:
                this.hasInitTopic = true;

              case 5:
                this.$refs.topic.loadTrack();
                _context2.next = 13;
                break;

              case 8:
                if (!(index === 2)) {
                  _context2.next = 13;
                  break;
                }

                if (this.hasInitFollow) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 12;
                return this.$refs.follow.init();

              case 12:
                this.hasInitFollow = true;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function current(_x2) {
        return _current.apply(this, arguments);
      }

      return current;
    }()
  },
  methods: {
    onTabChange: function onTabChange(index) {
      this.current = index;
    },
    onChange: function onChange(res) {
      var _res$$wx$detail = res.$wx.detail,
          current = _res$$wx$detail.current,
          source = _res$$wx$detail.source;

      if (source === 'touch') {
        this.tabIndex = current;
        this.current = current;
      }
    },
    goMoney: function goMoney() {
      var _wx$getStorageSync = wx.getStorageSync('user'),
          isBinding = _wx$getStorageSync.isBinding;

      if (isBinding === 0) {
        wx.navigateTo({
          url: '/pages/gender'
        });
      } else {
        wx.navigateTo({
          url: '/pages/lachine'
        });
      }
    },
    goPlane: function goPlane() {
      wx.navigateTo({
        url: '/pages/paper-plane'
      });
    },
    goSend: function goSend() {
      wx.navigateTo({
        url: '/pages/post-type'
      });
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"../components/navigation-bar/navigation-bar"},"tab":{"path":"../components/tab-bar"},"recommend":{"path":"../components/page-recommend"},"follow":{"path":"../components/page-follow"},"topic":{"path":"../components/page-topic"}},"on":{"4-0":["change"]}}, handlers: {'4-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTabChange($event)
      })();
    
  }},'4-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }},'4-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goSend($event)
      })();
    
  }},'4-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goPlane($event)
      })();
    
  }},'4-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goMoney($event)
      })();
    
  }}}, models: {} });