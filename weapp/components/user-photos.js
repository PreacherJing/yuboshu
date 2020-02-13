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
  props: {
    mode: {
      type: String,
      "default": 'view'
    },
    userId: Number,
    show: {
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
    }
  },
  data: {
    images: []
  },
  methods: {
    onPreview: function onPreview(index) {
      wx.previewImage({
        urls: this.images.map(function (img) {
          return img.src;
        }),
        current: index
      });
    },
    onAdd: function onAdd() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, photo;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api.User.addPhoto(_this2.userId);

              case 2:
                items = _context2.sent;

                if (!items) {
                  _context2.next = 23;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 7;

                for (_iterator = items[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  photo = _step.value;

                  _this2.images.push(photo);
                }

                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 15:
                _context2.prev = 15;
                _context2.prev = 16;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 18:
                _context2.prev = 18;

                if (!_didIteratorError) {
                  _context2.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context2.finish(18);

              case 22:
                return _context2.finish(15);

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[7, 11, 15, 23], [16,, 18, 22]]);
      }))();
    },
    loadData: function loadData() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var items, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, photo;

        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api.User.getPhotos(_this3.userId);

              case 2:
                items = _context3.sent;

                if (!items) {
                  _context3.next = 23;
                  break;
                }

                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context3.prev = 7;

                for (_iterator2 = items[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  photo = _step2.value;

                  _this3.images.push(photo);
                }

                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](7);
                _didIteratorError2 = true;
                _iteratorError2 = _context3.t0;

              case 15:
                _context3.prev = 15;
                _context3.prev = 16;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 18:
                _context3.prev = 18;

                if (!_didIteratorError2) {
                  _context3.next = 21;
                  break;
                }

                throw _iteratorError2;

              case 21:
                return _context3.finish(18);

              case 22:
                return _context3.finish(15);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[7, 11, 15, 23], [16,, 18, 22]]);
      }))();
    },
    onRefresh: function onRefresh() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this4.loadData();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onMore: function onMore(index, id) {
      var _this5 = this;

      wx.showActionSheet({
        itemList: ['删除'],
        success: function success(res) {
          if (res.tapIndex === 0) {
            wx.showModal({
              title: '删除提示',
              content: '确定要删除照片吗?',
              success: function () {
                var _success = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee5(res1) {
                  var isDel;
                  return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (res1.confirm) {
                            isDel = _api.User.delPhoto(id);

                            if (isDel) {
                              _this5.images.splice(index, 1);
                            }
                          }

                        case 1:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                function success(_x) {
                  return _success.apply(this, arguments);
                }

                return success;
              }()
            });
          }
        },
        fail: function fail(res) {}
      });
    }
  }
}, {info: {"components":{"empty":{"path":"empty"}},"on":{}}, handlers: {'84-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(index)
      })();
    
  }},'84-1': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onMore(index, _vm.images[index].id)
      })();
    
  }},'84-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAdd($event)
      })();
    
  }}}, models: {} });