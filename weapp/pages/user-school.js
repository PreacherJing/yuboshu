"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var year = new Date().getFullYear();
var years = [];

for (var i = year - 5; i <= year; i++) {
  years.push(i);
}

_core["default"].page({
  data: {
    showDialog: false,
    showSchool: false,
    title: '',
    dataSoure: [['河南师范大学', '河南科技学院', '新乡学院', '河南工学院', '新乡医学院', '新乡医学院三全学院', '河南科技学院新科学院', '河南师范大学新联学院'], ['专科', '本科', '硕士', '博士'], years],
    value: [0],
    index: 0,
    info: [{
      index: 0,
      label: '学校',
      value: ''
    }, {
      index: 1,
      label: '学历',
      value: ''
    }, {
      index: 2,
      label: '入学时间',
      value: ''
    }]
  },
  onLoad: function onLoad() {
    var user = wx.getStorageSync('user');

    if (user && user.school) {
      this.info[0].value = user.school;
      this.info[1].value = this.dataSoure[1][user.education];
      this.info[2].value = user.enrollmentYear;
    }
  },
  methods: {
    onCancel: function onCancel() {
      this.showDialog = false;
    },
    onConfirm: function onConfirm() {
      this.onCancel();
      this.info[this.index].value = this.dataSoure[this.index][this.value[0]];
    },
    onChange: function onChange(e) {
      var res = e.$wx.detail.value;
      this.value[0] = res[0];
    },
    onSchoolSelect: function onSchoolSelect(school) {
      this.info[0].value = school.name;
      this.showSchool = false;
    },
    onSchoolClose: function onSchoolClose() {
      this.showSchool = false;
    },
    onItemTap: function onItemTap(item) {
      if (item.index === 0) {
        this.showSchool = true;
      } else {
        this.index = item.index;
        this.value = [this.dataSoure[item.index].indexOf(this.info[item.index].value)];
        this.showDialog = true;
        this.title = item.label;
      }
    },
    goVerify: function goVerify() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, isSave;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.user = wx.getStorageSync('user');

                if (_this.user.isBinding) {
                  _context.next = 4;
                  break;
                }

                wx.navigateTo({
                  url: '/pages/gender'
                });
                return _context.abrupt("return");

              case 4:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;
                _iterator = _this.info[Symbol.iterator]();

              case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 17;
                  break;
                }

                item = _step.value;

                if (item.value) {
                  _context.next = 14;
                  break;
                }

                wx.showToast({
                  title: "".concat(item.label, "\u4E0D\u80FD\u4E3A\u7A7A"),
                  icon: 'none',
                  duration: 2000
                });
                return _context.abrupt("return");

              case 14:
                _iteratorNormalCompletion = true;
                _context.next = 9;
                break;

              case 17:
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 23:
                _context.prev = 23;
                _context.prev = 24;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 26:
                _context.prev = 26;

                if (!_didIteratorError) {
                  _context.next = 29;
                  break;
                }

                throw _iteratorError;

              case 29:
                return _context.finish(26);

              case 30:
                return _context.finish(23);

              case 31:
                _context.next = 33;
                return _api.User.setSchool(_this.info[0].value, _this.dataSoure[1].indexOf(_this.info[1].value), _this.info[2].value);

              case 33:
                isSave = _context.sent;

                if (isSave) {
                  wx.navigateTo({
                    url: '/pages/user-verify'
                  });
                }

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 19, 23, 31], [24,, 26, 30]]);
      }))();
    }
  }
}, {info: {"components":{"screen-dialog":{"path":"../components/half-screen-dialog/half-screen-dialog"},"footer":{"path":"../components/guide-footer"},"school-input":{"path":"../components/school-input"}},"on":{"23-1":["tap"],"23-2":["close"],"23-6":["result","close"]}}, handlers: {'23-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.onItemTap(item)
      })();
    
  }},'23-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goVerify($event)
      })();
    
  }},'23-2': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'23-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event)
      })();
    
  }},'23-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onConfirm($event)
      })();
    
  }},'23-5': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event)
      })();
    
  }},'23-6': {"result": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSchoolSelect($event)
      })();
    
  }, "close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSchoolClose($event)
      })();
    
  }}}, models: {} });