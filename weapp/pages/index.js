"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    btntext: '开始体验',
    loading: false,
    disabled: false
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var scene, room, mode, id, postId, commentId, obj, params, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, p, arr, user;

      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(q);
              scene = decodeURIComponent(q.scene);
              room = q.room, mode = q.mode, id = q.id, postId = q.postId, commentId = q.commentId;

              if (room) {
                _this.$app.$options.globalData.room = room;
              }

              if (mode) {
                _this.$app.$options.globalData.mode = mode;
              }

              if (!scene) {
                _context.next = 31;
                break;
              }

              obj = {};
              params = scene.split('&');
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 11;

              for (_iterator = params[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                p = _step.value;
                arr = p.split('=');

                if (arr.length === 2) {
                  obj[arr[0]] = arr[1];
                }
              }

              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](11);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 19:
              _context.prev = 19;
              _context.prev = 20;

              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }

            case 22:
              _context.prev = 22;

              if (!_didIteratorError) {
                _context.next = 25;
                break;
              }

              throw _iteratorError;

            case 25:
              return _context.finish(22);

            case 26:
              return _context.finish(19);

            case 27:
              console.log(obj);
              _this.shareId = obj.id || id;
              _this.$app.$options.globalData.postId = obj.postId || postId;
              _this.$app.$options.globalData.commentId = obj.commentId || commentId;

            case 31:
              user = wx.getStorageSync('user');

              if (!user) {
                _context.next = 35;
                break;
              }

              _context.next = 35;
              return _this.login();

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[11, 15, 19, 27], [20,, 22, 26]]);
    }))();
  },
  methods: {
    login: function login() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _this2.disabled = true;
                _this2.btntext = '开启中..';
                _context2.next = 5;
                return _api.User.login(_this2.shareId);

              case 5:
                _this2.code = _context2.sent;

                if (_this2.code === -1) {
                  wx.showToast({
                    title: '登陆失败请重试',
                    icon: 'none',
                    duration: 2000
                  });
                  _this2.btntext = '重试';
                  _this2.showFooter = true;
                } else {
                  wx.switchTab({
                    url: '/pages/home'
                  });
                }

                _this2.loading = false;
                _this2.disabled = false;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'3-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.login($event)
      })();
    
  }},'3-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.login($event)
      })();
    
  }},'3-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.login($event)
      })();
    
  }},'3-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.login($event)
      })();
    
  }}}, models: {} });