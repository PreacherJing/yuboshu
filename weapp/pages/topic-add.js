"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    title: '',
    des: '',
    imgPath: null,
    iconPath: null,
    nickName: '',
    disabled: true,
    isAuth: false,
    isBinding: false
  },
  onLoad: function onLoad() {
    var _wx$getStorageSync = wx.getStorageSync('user'),
        isAuth = _wx$getStorageSync.isAuth,
        isBinding = _wx$getStorageSync.isBinding;

    this.isAuth = isAuth;
    this.isBinding = isBinding;
    this.disabled = !isAuth || !isBinding;
  },
  methods: {
    chooseImage: function () {
      var _chooseImage = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var res, tempFilePaths;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.iconPath = null;
                _context.next = 3;
                return _core["default"].wx.chooseImage({
                  count: 1,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera']
                });

              case 3:
                res = _context.sent;
                tempFilePaths = res.tempFilePaths;

                if (tempFilePaths) {
                  this.imgPath = tempFilePaths[0];
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function chooseImage() {
        return _chooseImage.apply(this, arguments);
      }

      return chooseImage;
    }(),
    onAdd: function () {
      var _onAdd = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var topic;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.imgPath) {
                  _context2.next = 3;
                  break;
                }

                _api.Topic.showToast('请选择话题头像');

                return _context2.abrupt("return");

              case 3:
                if (this.iconPath) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return _api.Topic.qiniUploadFile([{
                  path: this.imgPath
                }], true);

              case 6:
                this.iconPath = _context2.sent;

              case 7:
                if (this.iconPath) {
                  _context2.next = 10;
                  break;
                }

                _api.Topic.showToast('上传头像失败');

                return _context2.abrupt("return");

              case 10:
                if (/[\u4e00-\u9fa5a-zA-Z]{2,10}/.test(this.title)) {
                  _context2.next = 13;
                  break;
                }

                _api.Topic.showToast('话题标题格式不对');

                return _context2.abrupt("return");

              case 13:
                if (this.nickName) {
                  _context2.next = 16;
                  break;
                }

                _api.Topic.showToast('输入关注者称号');

                return _context2.abrupt("return");

              case 16:
                if (this.des) {
                  _context2.next = 19;
                  break;
                }

                _api.Topic.showToast('输入话题描述');

                return _context2.abrupt("return");

              case 19:
                _context2.next = 21;
                return _api.Topic.add(this.title, this.des, this.iconPath, this.nickName);

              case 21:
                topic = _context2.sent;
                console.log(topic);

                if (topic) {
                  wx.redirectTo({
                    url: '/pages/topic?id=' + topic.id
                  });
                }

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onAdd() {
        return _onAdd.apply(this, arguments);
      }

      return onAdd;
    }()
  }
}, {info: {"components":{},"on":{}}, handlers: {'13-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'13-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'13-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onAdd($event)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "title",
      handler: function set ($v) {
      var _vm=this;
        _vm.title = $v;
      
    }
    },'1': {
      type: "input",
      expr: "nickName",
      handler: function set ($v) {
      var _vm=this;
        _vm.nickName = $v;
      
    }
    },'2': {
      type: "input",
      expr: "des",
      handler: function set ($v) {
      var _vm=this;
        _vm.des = $v;
      
    }
    }} });