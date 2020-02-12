"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    type: Number,
    topicId: Number,
    typeIndex: Number,
    topicTitle: String,
    isSelf: Boolean,
    state: 0
  },
  data: {
    items: [],
    pageIndex: 1,
    pageSize: 6,
    hasInit: false,
    hasMore: true,
    isLoadData: false
  },
  watch: {
    topicId: function () {
      var _topicId = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(val) {
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.type === 0)) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return this.loadBase();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function topicId(_x) {
        return _topicId.apply(this, arguments);
      }

      return topicId;
    }()
  },
  methods: {
    loadPosts: function () {
      var _loadPosts = _asyncToGenerator(
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
                return _api.Post.getTopicPosts(this.topicId, this.type, this.pageIndex, this.pageSize);

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

                for (_iterator = res.items[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
                this.hasMore = res.items.length === this.pageSize;

              case 28:
                this.isLoadData = false;

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[10, 14, 18, 26], [19,, 21, 25]]);
      }));

      function loadPosts() {
        return _loadPosts.apply(this, arguments);
      }

      return loadPosts;
    }(),
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.pageIndex = 1;
                this.state = 0;
                this.hasMore = true;
                _context3.next = 5;
                return _api.Post.getTopicPosts(this.topicId, this.type, 1, this.pageSize);

              case 5:
                res = _context3.sent;

                if (res) {
                  if (res.items.length) {
                    this.items = res.items;
                    this.pageIndex++;
                    this.state = 2;
                  } else {
                    this.items = [];
                    this.state = 2;
                  }

                  this.hasMore = res.items.length === this.pageSize;
                } else {
                  this.state = 1;
                }

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    loadBase: function () {
      var _loadBase = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.hasInit) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 3;
                return this.init();

              case 3:
                this.hasInit = true;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadBase() {
        return _loadBase.apply(this, arguments);
      }

      return loadBase;
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
    onAction: function onAction() {
      wx.navigateTo({
        url: "/pages/post-send?type=0&topicId=".concat(this.topicId, "&title=").concat(encodeURI(this.topicTitle))
      });
    },
    onMore: function onMore(res) {
      var _this = this;

      var itemList = ['移除'];

      if (res.post.isRecommend) {
        itemList.push('设为普通帖');
      } else {
        itemList.push('设为精华帖');
      }

      wx.showActionSheet({
        itemList: itemList,
        itemColor: '#EA0D23',
        success: function () {
          var _success = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime2["default"].mark(function _callee7(_res) {
            return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    wx.showModal({
                      title: '操作提示',
                      content: _res.tapIndex === 0 ? '确定要把该帖移出话题吗?' : "\u786E\u5B9A\u8981\u8BBE\u7F6E\u4E3A".concat(res.post.isRecommend ? '普通帖' : '精华帖'),
                      success: function () {
                        var _success2 = _asyncToGenerator(
                        /*#__PURE__*/
                        _regeneratorRuntime2["default"].mark(function _callee6(obj) {
                          var isRemove, isOk;
                          return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  if (!obj.confirm) {
                                    _context6.next = 13;
                                    break;
                                  }

                                  if (!(_res.tapIndex === 0)) {
                                    _context6.next = 8;
                                    break;
                                  }

                                  _context6.next = 4;
                                  return _api.Topic.removePost(res.post.topicId, res.post.id);

                                case 4:
                                  isRemove = _context6.sent;

                                  if (isRemove) {
                                    _this.items.splice(res.index, 1);
                                  }

                                  _context6.next = 13;
                                  break;

                                case 8:
                                  if (!(_res.tapIndex === 1)) {
                                    _context6.next = 13;
                                    break;
                                  }

                                  _context6.next = 11;
                                  return _api.Topic.recommendPost(res.post.topicId, res.post.id, !res.post.isRecommend);

                                case 11:
                                  isOk = _context6.sent;

                                  if (isOk) {
                                    _this.items[res.index].isRecommend = !res.post.isRecommend;
                                  }

                                case 13:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6);
                        }));

                        function success(_x3) {
                          return _success2.apply(this, arguments);
                        }

                        return success;
                      }()
                    });

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          function success(_x2) {
            return _success.apply(this, arguments);
          }

          return success;
        }(),
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    }
  }
}, {info: {"components":{"loading":{"path":"loading/loading"},"mp-page":{"path":"mp-page"},"post-item":{"path":"post-item"},"empty":{"path":"empty"},"no-more":{"path":"no-more"}},"on":{"81-0":["retry"],"81-1":["more"],"81-2":["action"]}}, handlers: {'81-0': {"retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }},'81-1': {"more": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMore($event)
      })();
    
  }},'81-2': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAction($event)
      })();
    
  }}}, models: {} });