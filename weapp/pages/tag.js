"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    labels: [],
    parent: '',
    tags: []
  },
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee2() {
      var _this = this;

      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.$wx.getOpenerEventChannel) {
                _context2.next = 5;
                break;
              }

              this.eventChannel = this.$wx.getOpenerEventChannel();
              this.eventChannel.on('acceptDataFromOpenerPage',
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _callee(obj) {
                  return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this.init(obj);

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
              _context2.next = 7;
              break;

            case 5:
              _context2.next = 7;
              return this.init(this.$app.$options.globalData.tagData);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function onLoad() {
      return _onLoad.apply(this, arguments);
    }

    return onLoad;
  }(),
  onUnload: function onUnload() {
    var labels = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.labels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var label = _step.value;

        if (label.isActive) {
          labels.push(Object.assign({}, label));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (this.eventChannel) {
      this.eventChannel.emit('acceptDataFromOpenedPage', {
        labels: labels,
        parent: this.parent
      });
    } else {
      this.$app.$options.globalData.tagData = {
        labels: labels,
        parent: this.parent,
        isEdit: true
      };
    }
  },
  methods: {
    onTap: function onTap(index) {
      this.labels[index].isActive = !this.labels[index].isActive;
    },
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(obj) {
        var res, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, label, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, tag;

        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wx.setNavigationBarTitle({
                  title: obj.title
                });
                this.tags = obj.tags;
                this.parent = obj.title;
                _context3.next = 5;
                return _api.User.getLabels(obj.title);

              case 5:
                res = _context3.sent;

                if (!res) {
                  _context3.next = 60;
                  break;
                }

                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context3.prev = 10;
                _iterator2 = res[Symbol.iterator]();

              case 12:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context3.next = 46;
                  break;
                }

                label = _step2.value;
                label.isActive = false;
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context3.prev = 18;
                _iterator3 = this.tags[Symbol.iterator]();

              case 20:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context3.next = 28;
                  break;
                }

                tag = _step3.value;

                if (!(label.text === tag.text)) {
                  _context3.next = 25;
                  break;
                }

                label.isActive = true;
                return _context3.abrupt("continue", 25);

              case 25:
                _iteratorNormalCompletion3 = true;
                _context3.next = 20;
                break;

              case 28:
                _context3.next = 34;
                break;

              case 30:
                _context3.prev = 30;
                _context3.t0 = _context3["catch"](18);
                _didIteratorError3 = true;
                _iteratorError3 = _context3.t0;

              case 34:
                _context3.prev = 34;
                _context3.prev = 35;

                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }

              case 37:
                _context3.prev = 37;

                if (!_didIteratorError3) {
                  _context3.next = 40;
                  break;
                }

                throw _iteratorError3;

              case 40:
                return _context3.finish(37);

              case 41:
                return _context3.finish(34);

              case 42:
                this.labels.push(label);

              case 43:
                _iteratorNormalCompletion2 = true;
                _context3.next = 12;
                break;

              case 46:
                _context3.next = 52;
                break;

              case 48:
                _context3.prev = 48;
                _context3.t1 = _context3["catch"](10);
                _didIteratorError2 = true;
                _iteratorError2 = _context3.t1;

              case 52:
                _context3.prev = 52;
                _context3.prev = 53;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 55:
                _context3.prev = 55;

                if (!_didIteratorError2) {
                  _context3.next = 58;
                  break;
                }

                throw _iteratorError2;

              case 58:
                return _context3.finish(55);

              case 59:
                return _context3.finish(52);

              case 60:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[10, 48, 52, 60], [18, 30, 34, 42], [35,, 37, 41], [53,, 55, 59]]);
      }));

      function init(_x2) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }
}, {info: {"components":{},"on":{}}, handlers: {'19-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(index)
      })();
    
  }}}, models: {} });