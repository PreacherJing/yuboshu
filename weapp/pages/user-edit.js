"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _province = _interopRequireDefault(require('../common/province.js'));

var _api = require('../common/api.js');

var _methods;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var provinces = [];
var citys = _province["default"]['北京'];

for (var p in _province["default"]) {
  if (_province["default"].hasOwnProperty(p)) {
    provinces.push(p);
  }
}

var years = [];
var months = [];
var days = [];

for (var i = 1; i <= 31; i++) {
  days.push(i);
}

for (var _i = 1; _i <= 12; _i++) {
  months.push(_i);
}

for (var _i2 = 1980; _i2 <= new Date().getFullYear(); _i2++) {
  years.push(_i2);
}

_core["default"].page({
  data: {
    dialogShow: false,
    dialogSignShow: false,
    screenBirthDayDialog: false,
    homeTownDialog: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    showActionsheet: false,
    years: years,
    months: months,
    days: days,
    provinces: provinces,
    citys: citys,
    birthday: [16, 6, 2],
    hometown: [0, 0],
    user: null,
    groups: [{
      text: '单身',
      value: 0
    }, {
      text: '热恋',
      value: 1
    }, {
      text: '保密',
      value: 2
    }],
    info: {
      nick: {
        title: '昵称',
        des: '填写昵称',
        value: '一叶知秋'
      },
      signature: {
        title: '个性签名',
        des: '一句话让别人记住你',
        value: ''
      },
      feeling: {
        title: '感情状态',
        value: '单身'
      },
      birthday: {
        title: '生日',
        des: '选择日期',
        value: ''
      },
      hometown: {
        title: '故乡',
        des: '选择故乡',
        value: ''
      }
    }
  },
  onReady: function onReady() {
    var user = wx.getStorageSync('user');

    if (user) {
      this.user = user;

      for (var key in this.info) {
        if (this.info.hasOwnProperty(key)) {
          switch (key) {
            case 'feeling':
              this.info[key].value = this.groups[user[key]].text;
              break;

            case 'birthday':
              if (user[key]) {
                var date = new Date(user[key]);
                this.birthday = [date.getFullYear() - 1980, date.getMonth(), date.getDate() - 1];
                this.info[key].value = user[key];
              }

              break;

            case 'hometown':
              this.citys = _province["default"][user.province];
              this.hometown = [this.provinces.indexOf(user.province), _province["default"][user.province].indexOf(user.city)];
              this.info[key].value = "".concat(user.province, " ").concat(user.city);
              break;

            default:
              this.info[key].value = user[key];
              break;
          }
        }
      }
    }
  },
  onLoad: function onLoad() {},
  methods: (_methods = {
    add: function add() {
      wx.navigateTo({
        url: '/pages/user-school'
      });
    },
    onClose: function onClose() {
      this.showActionsheet = false;
    },
    onDialogClose: function onDialogClose() {
      this.dialogShow = false;
    },
    onDialogSignClose: function onDialogSignClose() {
      this.dialogSignShow = false;
    },
    onActiontap: function () {
      var _onActiontap = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(res) {
        var _res$$wx$detail, value, index;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _res$$wx$detail = res.$wx.detail, value = _res$$wx$detail.value, index = _res$$wx$detail.index;
                this.info.feeling.value = this.groups[index].text;
                this.onClose();
                _context.next = 5;
                return _api.User.setUserFiled('feeling', this.groups[index].value);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onActiontap(_x) {
        return _onActiontap.apply(this, arguments);
      }

      return onActiontap;
    }(),
    onNickTap: function () {
      var _onNickTap = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(res) {
        var index;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.dialogShow = false;
                index = res.$wx.detail.index;

                if (!(index === 1)) {
                  _context2.next = 6;
                  break;
                }

                if (!this.info.nick.value) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return _api.User.setUserFiled('nick', this.info.nick.value);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onNickTap(_x2) {
        return _onNickTap.apply(this, arguments);
      }

      return onNickTap;
    }(),
    onSignButtontap: function () {
      var _onSignButtontap = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(res) {
        var index;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.dialogSignShow = false;
                index = res.$wx.detail.index;

                if (!(index === 1)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return _api.User.setUserFiled('signature', this.info.signature.value);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onSignButtontap(_x3) {
        return _onSignButtontap.apply(this, arguments);
      }

      return onSignButtontap;
    }(),
    onBirthDayChange: function onBirthDayChange(e) {
      var res = e.$wx.detail.value;
      this.birthday[0] = res[0];
      this.birthday[1] = res[1];
      this.birthday[2] = res[2];
    },
    onBirthDayCancel: function onBirthDayCancel() {
      this.screenBirthDayDialog = false;
    },
    onBirthDayConfirm: function () {
      var _onBirthDayConfirm = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.onBirthDayCancel();
                this.info.birthday.value = "".concat(this.years[this.birthday[0]], "-").concat(this.months[this.birthday[1]], "-").concat(this.days[this.birthday[2]]);
                _context4.next = 4;
                return _api.User.setUserFiled('birthday', this.info.birthday.value);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onBirthDayConfirm() {
        return _onBirthDayConfirm.apply(this, arguments);
      }

      return onBirthDayConfirm;
    }(),
    onHomeTownChange: function onHomeTownChange(e) {
      var res = e.$wx.detail.value;

      if (this.hometown[0] !== res[0]) {
        this.hometown[0] = res[0];
        this.citys = _province["default"][provinces[res[0]]];
        this.hometown[1] = 0;
      } else {
        this.hometown[1] = res[1];
      }
    },
    onHomeTownCancel: function onHomeTownCancel() {
      this.homeTownDialog = false;
    },
    onHomeTownConfirm: function () {
      var _onHomeTownConfirm = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.onHomeTownCancel();
                this.info.hometown.value = "".concat(provinces[this.hometown[0]], " ").concat(this.citys[this.hometown[1]]);
                _context5.next = 4;
                return _api.User.setUserFiled('hometown', this.info.hometown.value);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onHomeTownConfirm() {
        return _onHomeTownConfirm.apply(this, arguments);
      }

      return onHomeTownConfirm;
    }(),
    onTap: function onTap(item, filed) {
      switch (filed) {
        case 'nick':
          this.dialogShow = true;
          break;

        case 'feeling':
          this.showActionsheet = true;
          break;

        case 'signature':
          this.dialogSignShow = true;
          break;

        case 'birthday':
          this.screenBirthDayDialog = true;
          break;

        case 'hometown':
          this.homeTownDialog = true;
          break;

        default:
          break;
      }
    }
  }, _defineProperty(_methods, "add", function add() {
    wx.navigateTo({
      url: '/pages/user-school'
    });
  }), _defineProperty(_methods, "onUpload", function () {
    var _onUpload = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee6() {
      var imgUrl;
      return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _api.User.editAvtater();

            case 2:
              imgUrl = _context6.sent;

              if (imgUrl) {
                this.user.avtater = imgUrl;
              }

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function onUpload() {
      return _onUpload.apply(this, arguments);
    }

    return onUpload;
  }()), _methods)
}, {info: {"components":{"actionSheet":{"path":"../components/actionSheet/actionSheet"},"dialog":{"path":"../components/dialog/dialog"},"screen-dialog":{"path":"../components/half-screen-dialog/half-screen-dialog"}},"on":{"22-4":["actiontap","close"],"22-6":["close","buttontap"],"22-8":["close","buttontap"],"22-10":["close"],"22-14":["close"]}}, handlers: {'22-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onUpload($event)
      })();
    
  }},'22-1': {"tap": function proxy (item, filed) {
    
    var _vm=this;
      return (function () {
        _vm.onTap(item, filed)
      })();
    
  }},'22-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.add($event)
      })();
    
  }},'22-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.add($event)
      })();
    
  }},'22-4': {"actiontap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onActiontap($event)
      })();
    
  }, "close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event)
      })();
    
  }},'22-6': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDialogClose($event)
      })();
    
  }, "buttontap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onNickTap($event)
      })();
    
  }},'22-8': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDialogSignClose($event)
      })();
    
  }, "buttontap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSignButtontap($event)
      })();
    
  }},'22-10': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBirthDayCancel($event)
      })();
    
  }},'22-11': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBirthDayCancel($event)
      })();
    
  }},'22-12': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBirthDayConfirm($event)
      })();
    
  }},'22-13': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBirthDayChange($event)
      })();
    
  }},'22-14': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHomeTownCancel($event)
      })();
    
  }},'22-15': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHomeTownCancel($event)
      })();
    
  }},'22-16': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHomeTownConfirm($event)
      })();
    
  }},'22-17': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHomeTownChange($event)
      })();
    
  }}}, models: {'4': {
      type: "input",
      expr: "info.nick.value",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.info.nick, "value", $v);
      
    }
    },'5': {
      type: "input",
      expr: "info.signature.value",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.info.signature, "value", $v);
      
    }
    }} });