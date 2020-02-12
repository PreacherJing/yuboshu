"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  data: {
    state: 0,
    tracks: [],
    items: [],
    recommends: [],
    hasMore: true,
    isLoadData: false,
    pageIndex: 1,
    pageSize: 15
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.state = 0;
                _context.next = 3;
                return _api.Topic.myTopics(1, this.pageSize);

              case 3:
                res = _context.sent;

                if (!res) {
                  _context.next = 18;
                  break;
                }

                if (!(res.length > 0)) {
                  _context.next = 11;
                  break;
                }

                this.items = res;
                this.state = 3;
                this.pageIndex++;
                _context.next = 16;
                break;

              case 11:
                this.state = 3;
                _context.next = 14;
                return _api.Topic.getTopicList(1, 8);

              case 14:
                res = _context.sent;

                if (res) {
                  this.recommends = res.map(function (item) {
                    item.hasFollow = false;
                    return item;
                  });
                } else {
                  this.state = 1;
                }

              case 16:
                _context.next = 19;
                break;

              case 18:
                this.state = 1;

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    loadTrack: function loadTrack() {
      this.tracks = _api.Topic.getTopicTrack();
    },
    loadData: function () {
      var _loadData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.isLoadData || !this.hasMore)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                this.isLoadData = true;
                _context2.next = 5;
                return _api.Topic.myTopics(this.pageIndex, this.pageSize);

              case 5:
                res = _context2.sent;

                if (!res) {
                  _context2.next = 28;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 10;

                for (_iterator = res[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  item = _step.value;
                  this.items.push(item);
                }

                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](10);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 18:
                _context2.prev = 18;
                _context2.prev = 19;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 21:
                _context2.prev = 21;

                if (!_didIteratorError) {
                  _context2.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context2.finish(21);

              case 25:
                return _context2.finish(18);

              case 26:
                this.pageIndex++;
                this.hasMore = res.length === this.pageSize;

              case 28:
                this.isLoadData = false;

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[10, 14, 18, 26], [19,, 21, 25]]);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }(),
    onFollow: function () {
      var _onFollow = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(item, index) {
        var hasFollow;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api.Topic.topicFollow(item.id);

              case 2:
                hasFollow = _context3.sent;

                if (hasFollow) {
                  if (item.hasFollow) {
                    _api.Topic.showToast('已取消关注', 'success');
                  } else {
                    _api.Topic.showToast('关注成功,刷新页面可查看关注话题');
                  }

                  this.recommends[index].hasFollow = !item.hasFollow;
                } else {
                  _api.Topic.showToast('关注失败,重试');
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onFollow(_x, _x2) {
        return _onFollow.apply(this, arguments);
      }

      return onFollow;
    }(),
    goMaidan: function goMaidan() {
      wx.navigateTo({
        url: '/pages/topic-maidan'
      });
    },
    goTopic: function goTopic(id) {
      wx.navigateTo({
        url: '/pages/topic?id=' + id
      });
    },
    onClean: function onClean() {
      _api.Topic.cleanTopicTrack();

      this.tracks = null;
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
                return this.loadData();

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
                return this.init();

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
    onRefresh: function () {
      var _onRefresh = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.hasMore = true;
                this.pageIndex = 1;
                this.items = [];
                _context6.next = 5;
                return this.loadData();

              case 5:
                this.$refs.list.hideRefresh();

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onRefresh() {
        return _onRefresh.apply(this, arguments);
      }

      return onRefresh;
    }()
  }
}, {info: {"components":{"mp-page":{"path":"mp-page"}},"on":{"67-0":["scrolltolower","retry","refresh"]}}, handlers: {'67-0': {"scrolltolower": function proxy () {
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
    
  }},'67-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClean($event)
      })();
    
  }},'67-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(item.id)
      })();
    
  }},'67-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goMaidan($event)
      })();
    
  }},'67-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goMaidan($event)
      })();
    
  }},'67-7': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(item.id)
      })();
    
  }},'67-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goMaidan($event)
      })();
    
  }},'67-9': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goMaidan($event)
      })();
    
  }},'67-10': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.goTopic(item.id)
      })();
    
  }},'67-11': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.onFollow(item, index)
      })();
    
  }}}, models: {} });