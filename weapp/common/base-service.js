"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.weibo_emojis = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _weiboEmotions = _interopRequireDefault(require('weibo-emotions.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var baseUrl = 'https://www.wutuobangxinyougou.com'; // export const baseUrl = 'http://127.0.0.1:7001'

var qiniuUrl = 'http://img.wutuobangxinyougou.com/';
var imgUrl = baseUrl + '/public/images';
var genders = ['未知', '男', '女'];
var _height = 0;
var _statusBarHeight = 0;
var _headHeight = 0;
var weibo_icon_url = _weiboEmotions["default"].weibo_icon_url;
var emotions = _weiboEmotions["default"].emotions;

var weibo_emojis = function () {
  var _emojis = {};

  for (var key in emotions) {
    if (emotions.hasOwnProperty(key)) {
      var ele = emotions[key];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ele[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          _emojis[item.value] = {
            id: item.id,
            value: item.value,
            icon: item.icon.replace('/', '_'),
            url: weibo_icon_url + item.icon
          };
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
    }
  }

  return _emojis;
}();

exports.weibo_emojis = weibo_emojis;

var BaseService =
/*#__PURE__*/
function () {
  function BaseService() {
    _classCallCheck(this, BaseService);

    try {
      if (_height === 0) {
        var res = wx.getSystemInfoSync();
        var _res = res,
            screenHeight = _res.screenHeight,
            pixelRatio = _res.pixelRatio,
            statusBarHeight = _res.statusBarHeight;
        _height = screenHeight * pixelRatio;
        _statusBarHeight = statusBarHeight;
        res = wx.getMenuButtonBoundingClientRect();

        if (res) {
          var _res2 = res,
              bottom = _res2.bottom,
              top = _res2.top;
          _headHeight = bottom + top - statusBarHeight;
          console.log(_headHeight);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  _createClass(BaseService, [{
    key: "showToast",
    value: function showToast() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '操作失败,重试';
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
      wx.showToast({
        title: title,
        icon: icon,
        duration: 2000
      });
    }
  }, {
    key: "isQQ",
    value: function isQQ() {
      var sys = wx.getSystemInfoSync();

      if (sys.AppPlatform && sys.AppPlatform === 'qq') {
        return true;
      }

      return false;
    }
  }, {
    key: "parseEmoji",
    value: function parseEmoji(txt) {
      if (!txt) {
        return '';
      }

      return txt.split(/(\[[\u4e00-\u9fff,\uff1f,\w]{1,8}\])/).filter(function (str) {
        return str.length > 0;
      }).map(function (str) {
        var obj = {};

        if (/\[([\u4e00-\u9fff,\uff1f,\w]{1,8})\]/.test(str)) {
          if (weibo_emojis[str]) {
            obj.type = 1;
            obj.src = weibo_emojis[str].url;
          } else {
            obj.type = 0;
            obj.value = str;
          }
        } else {
          obj.type = 0;
          obj.value = str;
        }

        return obj;
      });
    }
  }, {
    key: "parseComment",
    value: function parseComment(comment) {
      comment.height = _height;
      comment.origTxt = comment.content;

      if (comment.content) {
        comment.content = this.parseEmoji(comment.content);
      }

      if (comment.imgs) {
        comment.imgs = this.parseCommentImgs(comment.imgs);
      }

      if (comment.user) {
        comment.user.gender = this.parseGender(comment.user.gender);
      }

      return comment;
    }
  }, {
    key: "appUpdate",
    value: function appUpdate() {
      var updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate);
      });
      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
        });
      });
      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        showToast('新版本下载失败');
      });
    }
  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(url, data, method) {
        var token;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = wx.getStorageSync('token') || '';
                wx.showNavigationBarLoading();
                _context.next = 4;
                return _core["default"].wx.request({
                  url: baseUrl + url,
                  data: data,
                  header: {
                    token: token,
                    'Content-Type': 'application/json',
                    'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
                  },
                  method: method
                }).then(function (res) {
                  console.log(res);
                  console.log(url);
                  wx.hideNavigationBarLoading();
                  return res.data;
                })["catch"](function () {
                  console.log(url);
                  wx.hideNavigationBarLoading();
                  return {
                    code: -1
                  };
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function request(_x, _x2, _x3) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "parseCommentImgs",
    value: function parseCommentImgs(imgs) {
      return imgs.map(function (img) {
        var path = img.path;
        img.path = qiniuUrl + 'thumb_' + path;
        img.origPath = qiniuUrl + path;
        return img;
      });
    }
  }, {
    key: "parseImgs",
    value: function parseImgs(imgs) {
      return imgs.map(function (img) {
        if (img.isQiniu) {
          var path = img.path;
          img.fileName = img.path;
          img.path = qiniuUrl + 'thumb_' + path;
          img.origPath = qiniuUrl + path;
        } else {
          img.path = imgUrl + img.path;
          img.origPath = imgUrl + img.origPath;
        }

        return img;
      });
    }
  }, {
    key: "parseGender",
    value: function parseGender(gender) {
      return genders[gender];
    }
  }, {
    key: "parseUser",
    value: function parseUser(user) {
      if (user.avtater) {
        if (user.avtater.indexOf('http') === -1) {
          user.avtater = imgUrl + user.avtater;
        }
      }

      user.hasFollow = false;
      user.sex = user.gender;
      user.gender = this.parseGender(user.gender);
      return user;
    }
  }, {
    key: "parseTopic",
    value: function parseTopic(topic) {
      topic.iconPath = qiniuUrl + topic.iconPath;
      return topic;
    }
  }, {
    key: "setMsgCount",
    value: function setMsgCount(user) {
      var sysMsgCount = user.sysMsgCount,
          likeCount = user.likeCount,
          commentCount = user.commentCount,
          replyCount = user.replyCount,
          rewardCount = user.rewardCount,
          planeCount = user.planeCount;
      var total = sysMsgCount + likeCount + commentCount + replyCount + rewardCount + planeCount;
      wx.setStorageSync('msgcount', total);
    }
  }, {
    key: "isQQ",
    value: function isQQ() {
      var sys = wx.getSystemInfoSync();

      if (sys.AppPlatform && sys.AppPlatform === 'qq') {
        return true;
      }

      return false;
    }
  }, {
    key: "getQiniuUrl",
    value: function getQiniuUrl() {
      return qiniuUrl;
    }
  }, {
    key: "getImgUrl",
    value: function getImgUrl() {
      return imgUrl;
    }
  }, {
    key: "getQiniuToken",
    value: function () {
      var _getQiniuToken = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(fileName, width) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request("/upload/qiniu/token/".concat(fileName, "/").concat(width > 400 ? 400 : width), null, 'GET');

              case 2:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.data);

              case 5:
                return _context2.abrupt("return", null);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getQiniuToken(_x4, _x5) {
        return _getQiniuToken.apply(this, arguments);
      }

      return getQiniuToken;
    }()
  }, {
    key: "getQiniuTopicToken",
    value: function () {
      var _getQiniuTopicToken = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(fileName) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request("/upload/qiniu/topic/token/".concat(fileName), null, 'GET');

              case 2:
                res = _context3.sent;

                if (!(res.code === 0)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", res.data);

              case 5:
                return _context3.abrupt("return", null);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getQiniuTopicToken(_x6) {
        return _getQiniuTopicToken.apply(this, arguments);
      }

      return getQiniuTopicToken;
    }()
  }, {
    key: "qiniUploadFile",
    value: function () {
      var _qiniUploadFile = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(imgs) {
        var _this = this;

        var isTopic,
            _iteratorNormalCompletion2,
            _didIteratorError2,
            _iteratorError2,
            _loop,
            _iterator2,
            _step2,
            _ret,
            _args5 = arguments;

        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                isTopic = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context5.prev = 4;
                _loop =
                /*#__PURE__*/
                _regeneratorRuntime2["default"].mark(function _loop() {
                  var img, fileName, token, res, result;
                  return _regeneratorRuntime2["default"].wrap(function _loop$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          img = _step2.value;
                          fileName = "".concat(new Date().getTime(), ".").concat(isTopic ? 'jpg' : img.type);
                          token = null;

                          if (!isTopic) {
                            _context4.next = 10;
                            break;
                          }

                          _context4.next = 6;
                          return _this.getQiniuTopicToken(fileName);

                        case 6:
                          res = _context4.sent;

                          if (res) {
                            token = res.token;
                          }

                          _context4.next = 13;
                          break;

                        case 10:
                          _context4.next = 12;
                          return _this.getQiniuToken(fileName, img.width);

                        case 12:
                          token = _context4.sent;

                        case 13:
                          if (!(token === null)) {
                            _context4.next = 15;
                            break;
                          }

                          return _context4.abrupt("return", "continue");

                        case 15:
                          _context4.next = 17;
                          return _core["default"].wx.uploadFile({
                            url: 'https://up-z1.qiniup.com',
                            filePath: img.path,
                            name: 'file',
                            formData: {
                              token: token,
                              key: fileName
                            }
                          }).then(function (res) {
                            console.log(res);

                            if (res.statusCode === 200) {
                              var obj = JSON.parse(res.data);
                              var key = obj.key;
                              return {
                                path: key,
                                fileName: fileName
                              };
                            } else {
                              return null;
                            }
                          })["catch"](function () {
                            return null;
                          });

                        case 17:
                          result = _context4.sent;

                          if (result) {
                            delete img.type;
                            img.path = result.path;
                          } else {
                            img.path = null;
                          }

                        case 19:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _loop);
                });
                _iterator2 = imgs[Symbol.iterator]();

              case 7:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context5.next = 15;
                  break;
                }

                return _context5.delegateYield(_loop(), "t0", 9);

              case 9:
                _ret = _context5.t0;

                if (!(_ret === "continue")) {
                  _context5.next = 12;
                  break;
                }

                return _context5.abrupt("continue", 12);

              case 12:
                _iteratorNormalCompletion2 = true;
                _context5.next = 7;
                break;

              case 15:
                _context5.next = 21;
                break;

              case 17:
                _context5.prev = 17;
                _context5.t1 = _context5["catch"](4);
                _didIteratorError2 = true;
                _iteratorError2 = _context5.t1;

              case 21:
                _context5.prev = 21;
                _context5.prev = 22;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 24:
                _context5.prev = 24;

                if (!_didIteratorError2) {
                  _context5.next = 27;
                  break;
                }

                throw _iteratorError2;

              case 27:
                return _context5.finish(24);

              case 28:
                return _context5.finish(21);

              case 29:
                return _context5.abrupt("return", isTopic ? imgs[0].path : imgs);

              case 30:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4, null, [[4, 17, 21, 29], [22,, 24, 28]]);
      }));

      function qiniUploadFile(_x7) {
        return _qiniUploadFile.apply(this, arguments);
      }

      return qiniUploadFile;
    }()
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(obj) {
        var formData,
            token,
            urls,
            paths,
            _iteratorNormalCompletion3,
            _didIteratorError3,
            _iteratorError3,
            _iterator3,
            _step3,
            filePath,
            res,
            result,
            _args6 = arguments;

        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                formData = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : null;
                token = wx.getStorageSync('token') || '';
                urls = [];
                paths = [];
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context6.prev = 7;
                _iterator3 = obj.tempFilePaths[Symbol.iterator]();

              case 9:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context6.next = 18;
                  break;
                }

                filePath = _step3.value;
                _context6.next = 13;
                return _core["default"].wx.uploadFile({
                  formData: formData,
                  url: baseUrl + '/upload',
                  filePath: filePath,
                  header: {
                    token: token,
                    'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
                  },
                  name: 'file'
                });

              case 13:
                res = _context6.sent;

                try {
                  result = JSON.parse(res.data);

                  if (result && result.filePath) {
                    urls.push(imgUrl + result.filePath);
                    paths.push(result.filePath);
                  }
                } catch (error) {
                  console.log(error);
                }

              case 15:
                _iteratorNormalCompletion3 = true;
                _context6.next = 9;
                break;

              case 18:
                _context6.next = 24;
                break;

              case 20:
                _context6.prev = 20;
                _context6.t0 = _context6["catch"](7);
                _didIteratorError3 = true;
                _iteratorError3 = _context6.t0;

              case 24:
                _context6.prev = 24;
                _context6.prev = 25;

                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }

              case 27:
                _context6.prev = 27;

                if (!_didIteratorError3) {
                  _context6.next = 30;
                  break;
                }

                throw _iteratorError3;

              case 30:
                return _context6.finish(27);

              case 31:
                return _context6.finish(24);

              case 32:
                return _context6.abrupt("return", new Promise(function (resolve, reject) {
                  resolve({
                    urls: urls,
                    paths: paths
                  });
                }));

              case 33:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5, null, [[7, 20, 24, 32], [25,, 27, 31]]);
      }));

      function uploadFile(_x8) {
        return _uploadFile.apply(this, arguments);
      }

      return uploadFile;
    }()
  }, {
    key: "getHeadHeight",
    value: function getHeadHeight() {
      return _headHeight;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return _height;
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl() {
      return baseUrl;
    }
  }]);

  return BaseService;
}();

exports["default"] = BaseService;