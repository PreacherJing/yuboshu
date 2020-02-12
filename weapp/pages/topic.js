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
    tabs: ['最新', '热门', '精华'],
    fields: ['new', 'hot', 'elite'],
    current: 0,
    tabIndex: 0,
    topic: null,
    state: 0,
    opacity: 0,
    isSelf: false,
    topicId: null,
    tabposition: 'absolute',
    tabTop: 0,
    type: 0,
    baseBottom: 0,
    limitHeight: 0,
    background: 'transparent'
  },
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee(q) {
      var id, res, statusBarHeight, pixelRatio, _wx$getMenuButtonBoun, top, bottom, baseBottom, baseHeight;

      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = q.id;
              this.topicId = id;

              if (!id) {
                _context.next = 14;
                break;
              }

              _context.next = 5;
              return this.loadTopic(id);

            case 5:
              res = wx.getSystemInfoSync();
              statusBarHeight = res.statusBarHeight, pixelRatio = res.pixelRatio;
              _wx$getMenuButtonBoun = wx.getMenuButtonBoundingClientRect(), top = _wx$getMenuButtonBoun.top, bottom = _wx$getMenuButtonBoun.bottom;
              baseBottom = bottom + (top - statusBarHeight);
              this.baseBottom = baseBottom;
              baseHeight = 464 / pixelRatio;
              this.limitHeight = baseHeight - baseBottom;
              _context.next = 15;
              break;

            case 14:
              this.state = 1;

            case 15:
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
  methods: {
    loadTopic: function () {
      var _loadTopic = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(id) {
        var userId, _this$topic, _id, title, des, iconPath;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api.Topic.getTopic(this.topicId);

              case 2:
                this.topic = _context2.sent;

                if (this.topic) {
                  userId = wx.getStorageSync('userId');
                  this.isSelf = userId === this.topic.ownerId;
                  this.state = 3;
                  _this$topic = this.topic, _id = _this$topic.id, title = _this$topic.title, des = _this$topic.des, iconPath = _this$topic.iconPath;

                  _api.Topic.topicAddTrack({
                    id: _id,
                    title: title,
                    iconPath: iconPath
                  });
                } else {
                  this.state = 1;
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadTopic(_x2) {
        return _loadTopic.apply(this, arguments);
      }

      return loadTopic;
    }(),
    onTabChange: function () {
      var _onTabChange = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(index) {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.current = index;
                this.type = index;
                _context3.next = 4;
                return this.$refs[this.fields[this.type]].loadBase();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onTabChange(_x3) {
        return _onTabChange.apply(this, arguments);
      }

      return onTabChange;
    }(),
    onScroll: function onScroll(res) {
      var top = res.scrollTop;
      this.opacity = 1 - (this.limitHeight - top) / this.limitHeight;
      this.background = "rgba(255, 255, 255, ".concat(this.opacity, ")");

      if (top >= this.limitHeight) {
        this.tabTop = this.baseBottom;
        this.tabposition = 'fixed';
      } else if (top < this.limitHeight) {
        this.tabTop = 0;
        this.tabposition = 'absolute';
      }
    },
    onScrolltolower: function () {
      var _onScrolltolower = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$refs[this.fields[this.type]].loadPosts();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onScrolltolower() {
        return _onScrolltolower.apply(this, arguments);
      }

      return onScrolltolower;
    }(),
    onRetry: function () {
      var _onRetry = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.loadTopic(this.topicId);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onRetry() {
        return _onRetry.apply(this, arguments);
      }

      return onRetry;
    }(),
    goBack: function goBack() {
      wx.navigateBack();
    },
    onFollow: function () {
      var _onFollow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        var _wx$getStorageSync, isBinding, hasFollow;

        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _wx$getStorageSync = wx.getStorageSync('user'), isBinding = _wx$getStorageSync.isBinding;

                if (!(isBinding === 0)) {
                  _context6.next = 5;
                  break;
                }

                wx.navigateTo({
                  url: '/pages/gender'
                });
                _context6.next = 9;
                break;

              case 5:
                _context6.next = 7;
                return _api.Topic.topicFollow(this.topicId);

              case 7:
                hasFollow = _context6.sent;

                if (hasFollow) {
                  _api.Topic.showToast(this.topic.hasFollow ? '已取消关注' : '关注成功', 'success');

                  this.topic.hasFollow = !this.topic.hasFollow;
                } else {
                  _api.Topic.showToast('关注失败,重试');
                }

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onFollow() {
        return _onFollow.apply(this, arguments);
      }

      return onFollow;
    }(),
    goSend: function goSend() {
      wx.navigateTo({
        url: "/pages/post-send?type=0&topicId=".concat(this.topicId, "&title=").concat(encodeURI(this.topic.title))
      });
    },
    onRefresh: function () {
      var _onRefresh = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7() {
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.$refs[this.fields[this.type]].init();

              case 2:
                this.$refs.list.hideRefresh();

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onRefresh() {
        return _onRefresh.apply(this, arguments);
      }

      return onRefresh;
    }()
  }
}, {info: {"components":{"navigation-bar":{"path":"../components/navigation-bar/navigation-bar"},"tab-bar":{"path":"../components/tab-bar"},"mp-page":{"path":"../components/mp-page"},"topic-block":{"path":"../components/topic-block"}},"on":{"12-2":["scroll","scrolltolower","retry","refresh"],"12-7":["change"]}}, handlers: {'12-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goBack($event)
      })();
    
  }},'12-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goBack($event)
      })();
    
  }},'12-2': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }, "retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }, "refresh": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRefresh($event)
      })();
    
  }},'12-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFollow($event)
      })();
    
  }},'12-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTabChange($event)
      })();
    
  }},'12-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goSend($event)
      })();
    
  }}}, models: {} });