"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].component({
  options: {
    addGlobalClass: true
  },
  props: {
    scrollY: Boolean,
    mode: {
      type: String,
      "default": 'view'
    },
    userId: Number,
    show: {
      type: Boolean,
      "default": false
    },
    reload: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    show: function show(isShow) {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!isShow) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return _this.loadData();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    reload: function reload() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var tagData;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tagData = _this2.$app.$options.globalData.tagData;

                if (!(tagData && tagData.isEdit)) {
                  _context2.next = 5;
                  break;
                }

                _this2.tags[tagData.parent] = tagData.labels;
                _context2.next = 5;
                return _api.User.addLabels(_this2.userId, tagData.parent, tagData.labels);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  data: {
    tags: {
      性格: [],
      足迹: [],
      作品: [],
      电影: [],
      美食: [],
      运动: [],
      音乐: []
    },
    isqq: false
  },
  attached: function attached() {
    this.isqq = _api.User.isQQ();
  },
  methods: {
    onAdd: function onAdd(parent) {
      var _this3 = this;

      if (this.isqq) {
        this.$emit('reset');
        this.$app.$options.globalData.tagData = {
          title: parent,
          tags: this.tags[parent]
        };
        wx.navigateTo({
          url: '/pages/tag'
        });
      } else {
        wx.navigateTo({
          url: '/pages/tag',
          events: {
            acceptDataFromOpenedPage: function () {
              var _acceptDataFromOpenedPage = _asyncToGenerator(
              /*#__PURE__*/
              _regeneratorRuntime2["default"].mark(function _callee3(res) {
                return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _this3.tags[res.parent] = res.labels;
                        _context3.next = 3;
                        return _api.User.addLabels(_this3.userId, res.parent, res.labels);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              function acceptDataFromOpenedPage(_x) {
                return _acceptDataFromOpenedPage.apply(this, arguments);
              }

              return acceptDataFromOpenedPage;
            }()
          },
          success: function success(res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', {
              title: parent,
              tags: _this3.tags[parent]
            });
          }
        });
      }
    },
    loadData: function loadData() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        var res, key, el;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _api.User.getLabelsForUser(_this4.userId);

              case 2:
                res = _context4.sent;

                if (res) {
                  for (key in res) {
                    if (res.hasOwnProperty(key)) {
                      el = res[key];
                      _this4.tags[key] = el;
                    }
                  }
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'82-0': {"tap": function proxy (name) {
    
    var _vm=this;
      return (function () {
        _vm.onAdd(name)
      })();
    
  }}}, models: {} }, {info: {"components":{},"on":{}}, handlers: {'82-0': {"tap": function proxy (name) {
    
    var _vm=this;
      return (function () {
        _vm.onAdd(name)
      })();
    
  }}}, models: {} });