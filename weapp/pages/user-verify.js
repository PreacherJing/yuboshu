"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    realName: '',
    src: '',
    path: '',
    student: null
  },
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var res;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api.User.getStudent();

            case 2:
              res = _context.sent;

              if (res) {
                this.student = res;
                this.realName = res.realName;
                this.src = _api.User.getImgUrl() + res.src;
                this.path = res.src;
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function onLoad() {
      return _onLoad.apply(this, arguments);
    }

    return onLoad;
  }(),
  methods: {
    onUpload: function () {
      var _onUpload = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var obj, res, urls, paths;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _core["default"].wx.chooseImage({
                  sizeType: 'compressed'
                });

              case 2:
                obj = _context2.sent;

                if (!(obj && obj.tempFilePaths)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 6;
                return _api.User.uploadFile(obj);

              case 6:
                res = _context2.sent;
                urls = res.urls, paths = res.paths;

                if (res) {
                  this.src = urls[0] || '';
                  this.path = paths[0] || '';
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onUpload() {
        return _onUpload.apply(this, arguments);
      }

      return onUpload;
    }(),
    onView: function onView() {
      wx.previewImage({
        urls: [this.src],
        current: 0
      });
    },
    onDel: function onDel() {
      this.src = '';
      this.path = '';
    },
    goCenter: function goCenter() {
      wx.switchTab({
        url: '/pages/me'
      });
    },
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.realName) {
                  _context3.next = 3;
                  break;
                }

                wx.showToast({
                  title: "\u771F\u5B9E\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A",
                  icon: 'none',
                  duration: 2000
                });
                return _context3.abrupt("return");

              case 3:
                if (this.path) {
                  _context3.next = 6;
                  break;
                }

                wx.showToast({
                  title: "\u8BF7\u4E0A\u4F20\u5B66\u751F\u8BC1",
                  icon: 'none',
                  duration: 2000
                });
                return _context3.abrupt("return");

              case 6:
                _context3.next = 8;
                return _api.User.addStudent(this.realName, this.path);

              case 8:
                res = _context3.sent;

                if (res) {
                  _api.User.showToast('已成功提交', 'success');

                  setTimeout(function () {
                    wx.switchTab({
                      url: '/pages/me'
                    });
                  }, 2000);
                } else {
                  _api.User.showToast('提交失败');
                }

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }
}, {info: {"components":{"footer":{"path":"../components/guide-footer"}},"on":{"24-4":["destap","tap"]}}, handlers: {'24-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onView($event)
      })();
    
  }},'24-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }},'24-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onUpload($event)
      })();
    
  }},'24-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDel($event)
      })();
    
  }},'24-4': {"destap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goCenter($event)
      })();
    
  }, "tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSubmit($event)
      })();
    
  }}}, models: {'8': {
      type: "input",
      expr: "realName",
      handler: function set ($v) {
      var _vm=this;
        _vm.realName = $v;
      
    }
    }} });