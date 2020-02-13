"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = require('../common/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    innerWidth: '',
    content: '',
    show: true,
    showMap: false,
    isPrivate: false,
    uplaodFile: null,
    loading: false,
    disabled: true,
    hasChoose: false,
    focus: true,
    cursor: -1,
    topic: null,
    placeholder: '记录真实的校园生活...',
    tips: null,
    btntext: '发布',
    posType: 0,
    bottom: 0,
    isGet: false,
    showTopic: false,
    des: '学生认证后才可以发布动态',
    images: [],
    choiceType: 0,
    inputType: 0,
    // 输入类型0文字1表情
    userId: null,
    user: null,
    isAuth: false,
    boardheight: 0,
    location: null,
    video: {
      url: null,
      width: 0,
      height: 0,
      duration: 0,
      maskHeight: 0,
      baseWidth: 0,
      baseHeight: 0,
      progress: 0,
      showMask: false
    }
  },
  onLoad: function onLoad(q) {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var type, id, topicId, title, rect, sys;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.user = wx.getStorageSync('user');
              type = q.type, id = q.id, topicId = q.topicId, title = q.title;
              _this.posType = parseInt(type);
              _this.userId = q.id;

              if (topicId) {
                _this.topic = {
                  id: parseInt(topicId),
                  title: decodeURI(title)
                };
              }

              _context.next = 7;
              return _api.User.isAuth();

            case 7:
              _this.isAuth = _context.sent;

              if (_this.isAuth) {
                if (_this.posType === 1) {
                  _this.des = "\u6BCF\u5929\u6700\u591A\u53EF\u53D1\u5E031\u6B21\u8868\u767D";
                } else {
                  _this.des = _this.user.isAuth ? "\u6BCF\u5929\u6700\u591A\u53EF\u53D1\u5E03".concat(_this.user.postDayLimit, "\u6B21\u52A8\u5F39") : '认证后,每天可获得5次动弹权限';
                }
              }

              rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
              _this.innerWidth = rect ? 'width:' + rect.left + 'px' : '';
              sys = wx.getSystemInfoSync();
              _this.showMap = !sys.AppPlatform || sys.AppPlatform !== 'qq';

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    onClose: function onClose() {
      wx.navigateBack({
        delta: 2
      });
    },
    submit: function submit() {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var mediaSrc, _ref, path, fileName, result, timer;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.hideKeyboard();
                wx.showLoading({
                  title: '发布中...',
                  mask: true
                });
                _this2.btntext = '发布中';
                _this2.loading = true;
                _this2.disabled = true;
                mediaSrc = null;

                if (!(_this2.images.length > 0 || _this2.content.length >= 10 || _this2.video.url)) {
                  _context2.next = 30;
                  break;
                }

                if (!(_this2.choiceType === 2)) {
                  _context2.next = 21;
                  break;
                }

                _this2.video.showMask = true;
                _context2.next = 11;
                return _api.User.uploadVideo(_this2.video.url, function (progress) {
                  _this2.video.progress = progress;
                  _this2.video.maskHeight = _this2.video.height - _this2.video.height * (progress / 100);
                });

              case 11:
                _ref = _context2.sent;
                path = _ref.path;
                fileName = _ref.fileName;

                if (path) {
                  _context2.next = 20;
                  break;
                }

                wx.showModal({
                  title: '提示',
                  content: '上传视频失败,重试.',
                  showCancel: false,
                  confirmText: '知道了'
                });
                _this2.loading = false;
                _this2.disabled = false;
                _this2.btntext = '发布';
                return _context2.abrupt("return");

              case 20:
                mediaSrc = {
                  fileName: fileName.toString(),
                  height: _this2.video.baseHeight,
                  width: _this2.video.baseWidth,
                  duration: _this2.video.duration
                };

              case 21:
                _context2.next = 23;
                return _api.Post.qiniUploadFile(_this2.images);

              case 23:
                _this2.images = _context2.sent;
                _context2.next = 26;
                return _api.Post.release(_this2.userId, _this2.content, _this2.images.filter(function (img) {
                  return img.path != null;
                }), _this2.posType, mediaSrc, _this2.location, _this2.topic);

              case 26:
                result = _context2.sent;

                if (result) {
                  _this2.btntext = '已发布';
                  wx.showToast({
                    title: '已发布',
                    icon: 'success',
                    duration: 1000
                  });
                  timer = setTimeout(function () {
                    _this2.disabled = false;
                    clearTimeout(timer);
                    wx.navigateBack({
                      delta: 2
                    });
                  }, 1000);
                } else {
                  _this2.disabled = false;
                  _this2.btntext = '发布';
                }

                _context2.next = 33;
                break;

              case 30:
                _this2.disabled = false;
                _this2.btntext = '发布';
                wx.showToast({
                  title: '内容太少了',
                  icon: 'none',
                  duration: 2000
                });

              case 33:
                _this2.loading = false;
                _this2.video.showMask = false;

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onInput: function onInput() {
      this.canSend();
    },
    chooseImage: function chooseImage() {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var res, tempFilePaths, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, info, height, width, type;

        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _core["default"].wx.chooseImage({
                  count: 9 - _this3.images.length,
                  sizeType: ['compressed'],
                  sourceType: ['album', 'camera']
                });

              case 2:
                res = _context3.sent;
                tempFilePaths = res.tempFilePaths;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 7;
                _iterator = tempFilePaths[Symbol.iterator]();

              case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context3.next = 19;
                  break;
                }

                file = _step.value;
                _context3.next = 13;
                return _core["default"].wx.getImageInfo({
                  src: file
                });

              case 13:
                info = _context3.sent;
                height = info.height, width = info.width, type = info.type;

                _this3.images.push({
                  height: height,
                  width: width,
                  type: type,
                  isQiniu: true,
                  path: file
                });

              case 16:
                _iteratorNormalCompletion = true;
                _context3.next = 9;
                break;

              case 19:
                _context3.next = 25;
                break;

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 25:
                _context3.prev = 25;
                _context3.prev = 26;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 28:
                _context3.prev = 28;

                if (!_didIteratorError) {
                  _context3.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context3.finish(28);

              case 32:
                return _context3.finish(25);

              case 33:
                _this3.focus = true;

                _this3.canSend();

              case 35:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[7, 21, 25, 33], [26,, 28, 32]]);
      }))();
    },
    onPreview: function onPreview(imgs, index) {
      var urls = imgs.map(function (img) {
        return img.path;
      });
      wx.previewImage({
        urls: urls,
        current: urls[index]
      });
    },
    onRemove: function onRemove(index) {
      this.images.splice(index, 1);
    },
    canSend: function canSend() {
      if (this.images.length > 0 || this.content.length >= 10 || this.video.url) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    onkeyboardheightchange: function onkeyboardheightchange(e) {
      var height = e.$wx.detail.height;

      if (!this.isGet && height > 0) {
        this.inputType = 0;
        this.bottom = height;
        this.boardheight = height;
        this.isGet = true;
      }
    },
    onFocus: function onFocus(res) {
      var height = res.$wx.detail.height;

      if (height) {
        this.inputType = 0;
        this.bottom = height;
        this.boardheight = height;
        this.isGet = true;
      }
    },
    onBlur: function onBlur(res) {
      var cursor = res.$wx.detail.cursor;
      this.cursor = cursor;

      if (this.inputType === 0) {
        this.bottom = 0;
      }

      this.isGet = false;
      this.focus = false;
    },
    onEmoji: function onEmoji(type) {
      if (type === 0) {
        wx.hideKeyboard();
        this.bottom = this.boardheight;
      } else {
        this.focus = true;
      }

      this.inputType = type === 0 ? 1 : 0;
    },
    onInputEmoji: function onInputEmoji(val) {
      var str = this.content.split('');
      str.splice(this.cursor, 0, val);
      this.content = str.join('');

      if (this.cursor === -1) {
        this.cursor += val.length + 1;
      } else {
        this.cursor += val.length;
      }
    },
    onDelEmoji: function onDelEmoji() {
      var str = this.content.split('');
      var leftStr = this.content.substring(0, this.cursor);
      var leftLen = leftStr.length;
      var rightStr = this.content.substring(this.cursor);
      var left_left_Index = leftStr.lastIndexOf('[');
      var left_right_Index = leftStr.lastIndexOf(']');
      var right_right_Index = rightStr.indexOf(']');
      var right_left_Index = rightStr.indexOf('[');

      if (left_right_Index === leftLen - 1 && leftLen - left_left_Index <= 8 && left_left_Index > -1) {
        // "111[不简单]|23[33]"left_left_Index=3,left_right_Index=7,leftLen=8
        var len = left_right_Index - left_left_Index + 1;
        str.splice(this.cursor - len, len);
        this.cursor -= len;
      } else if (left_left_Index > -1 && right_right_Index > -1 && left_right_Index < left_left_Index && right_right_Index <= 6) {
        // left_left_Index:4,left_right_Index:3,right_right_Index:1,right_left_Index:2
        // "111[666][不简|单]"right_right_Index=1,left_left_Index=3,leftLen=6
        var _len = right_right_Index + 1 + (leftLen - left_left_Index);

        if (_len <= 10) {
          str.splice(this.cursor - (leftLen - left_left_Index), _len);
          this.cursor -= leftLen - left_left_Index;
        } else {
          str.splice(this.cursor, 1);
          this.cursor -= 1;
        }
      } else {
        str.splice(this.cursor, 1);
        this.cursor -= 1;
      }

      this.content = str.join('');
    },
    onUpload: function onUpload() {
      this.choiceType = 1;
      this.video.url = null;
      this.hasChoose = true;
    },
    onVideoDel: function onVideoDel() {
      this.choiceType = 0;
      this.video.url = null;
      this.canSend();
    },
    onUploadVideo: function onUploadVideo() {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        var user, _ref2, tempFilePath, height, width, duration, ratio;

        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                user = wx.getStorageInfoSync('user');

                if (!(!user || user.isAuth === 0)) {
                  _context4.next = 4;
                  break;
                }

                wx.showToast({
                  title: '学生认证后才可以操作',
                  icon: 'none',
                  duration: 2000
                });
                return _context4.abrupt("return");

              case 4:
                _context4.next = 6;
                return _core["default"].wx.chooseVideo({
                  sourceType: ['album', 'camera'],
                  camera: 'back'
                });

              case 6:
                _ref2 = _context4.sent;
                tempFilePath = _ref2.tempFilePath;
                height = _ref2.height;
                width = _ref2.width;
                duration = _ref2.duration;
                _this4.choiceType = 2;
                _this4.video.url = tempFilePath;
                ratio = height > 740 ? 0.5 : 0.8;
                _this4.video.maskHeight = height * ratio;
                _this4.video.width = width * ratio;
                _this4.video.height = height * ratio;
                _this4.video.baseWidth = width;
                _this4.video.baseHeight = height;
                _this4.video.duration = duration;

                _this4.canSend();

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    onChange: function onChange(e) {
      var value = e.$wx.detail.value[0] || 0;
      this.posType = parseInt(value);
    },
    goAuth: function goAuth() {
      wx.navigateTo({
        url: '/pages/user-school'
      });
    },
    onDelLocation: function onDelLocation(type) {
      if (type === 0) {
        this.location = null;
      } else {
        this.topic = null;
      }
    },
    onMap: function onMap() {
      var _this5 = this;

      this.bottom = 0;
      this.inputType = 0;
      wx.hideKeyboard();
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userLocation']) {
            _this5._openMap();
          } else {
            var auth = res.authSetting['scope.userLocation'];

            if (auth === undefined) {
              wx.authorize({
                scope: 'scope.userLocation',
                success: function success() {
                  _this5._openMap();
                },
                fail: function fail() {
                  wx.showToast({
                    title: '授权后才可以打开地图',
                    icon: 'none'
                  });
                }
              });
            } else {
              wx.openSetting({
                success: function success(res) {
                  if (res.authSetting['scope.userLocation']) {
                    _this5._openMap();
                  } else {
                    wx.showToast({
                      title: '授权后才可以打开地图',
                      icon: 'none'
                    });
                  }
                },
                fail: function fail() {
                  wx.showToast({
                    title: '授权后才可以打开地图',
                    icon: 'none'
                  });
                }
              });
            }
          }
        }
      });
    },
    _openMap: function _openMap() {
      var _this6 = this;

      wx.showLoading({
        title: '加载中'
      });
      wx.getLocation({
        altitude: true,
        isHighAccuracy: true,
        success: function success(res) {
          var latitude = res.latitude,
              longitude = res.longitude;
          wx.chooseLocation({
            latitude: latitude,
            longitude: longitude,
            success: function success(obj) {
              wx.hideLoading();
              _this6.location = obj;
            },
            fail: function fail(err) {
              wx.hideLoading();
            }
          });
        },
        fail: function fail(err) {
          wx.hideLoading();
          console.log(err);
        }
      });
    },
    onTopic: function onTopic() {
      this.show = false;
      this.bottom = 0;
      this.focus = false;
      this.showTopic = true;
    },
    onSelect: function onSelect(topic) {
      this.topic = topic;
      this.onTopicClose();
    },
    onTopicClose: function onTopicClose() {
      var _this7 = this;

      this.showTopic = false;
      this.show = true;
      this.inputType = 0;
      var time = setTimeout(function () {
        _this7.focus = true;
        clearTimeout(time);
      }, 300);
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"../components/navigation-bar/navigation-bar"},"emoji-input":{"path":"../components/emoji-input"},"topic-input":{"path":"../components/topic-input"}},"on":{"11-9":["emoji","del"],"11-11":["result","close"]}}, handlers: {'11-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTopic($event)
      })();
    
  }},'11-2': {"keyboardheightchange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onkeyboardheightchange($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onBlur($event)
      })();
    
  }, "input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInput($event)
      })();
    
  }, "focus": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onFocus($event)
      })();
    
  }},'11-6': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onPreview(_vm.images, index)
      })();
    
  }},'11-7': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.onRemove(index)
      })();
    
  }},'11-8': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'11-9': {"emoji": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInputEmoji($event)
      })();
    
  }, "del": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onDelEmoji($event)
      })();
    
  }},'11-11': {"result": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSelect($event)
      })();
    
  }, "close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTopicClose($event)
      })();
    
  }},'11-13': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onDelLocation(0)
      })();
    
  }},'11-14': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.chooseImage($event)
      })();
    
  }},'11-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(0)
      })();
    
  }},'11-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onEmoji(1)
      })();
    
  }},'11-17': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onMap($event)
      })();
    
  }},'11-18': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onTopic($event)
      })();
    
  }},'11-19': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event)
      })();
    
  }},'11-20': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goAuth($event)
      })();
    
  }}}, models: {'7': {
      type: "input",
      expr: "content",
      handler: function set ($v) {
      var _vm=this;
        _vm.content = $v;
      
    }
    }} });