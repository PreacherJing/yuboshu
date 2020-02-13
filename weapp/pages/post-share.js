"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _share = _interopRequireDefault(require('../common/share.js'));

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  mixins: [_share["default"]],
  data: {
    width: 300,
    height: 600,
    bottom: 0,
    openStatus: true,
    btnText: '分享到朋友圈',
    user: null,
    post: null,
    qrUrl: null,
    id: null,
    canvasToTempFilePath: null,
    show: false
  },
  onLoad: function onLoad(q) {
    var id = q.id;
    this.id = id;
    var sys = wx.getSystemInfoSync();

    if (sys.AppPlatform && sys.AppPlatform === 'qq') {
      this.btnText = '发布到说说';
    }
  },
  onReady: function onReady() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var ctx, _wx$getSystemInfoSync, screenWidth, screenHeight, pixelRatio, _height, articleHeight, imgHeight;

      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              wx.showLoading({
                title: '海报生成中...'
              });
              _context.next = 3;
              return _api.Post.getUserQr(_this.id);

            case 3:
              _this.qrUrl = _context.sent;
              _this.user = wx.getStorageSync('user');
              _context.next = 7;
              return _api.Post.getPost(_this.id);

            case 7:
              _this.post = _context.sent;
              ctx = wx.createCanvasContext('poster', _this);
              _this.bottom = wx.getMenuButtonBoundingClientRect().bottom;
              _wx$getSystemInfoSync = wx.getSystemInfoSync(), screenWidth = _wx$getSystemInfoSync.screenWidth, screenHeight = _wx$getSystemInfoSync.screenHeight, pixelRatio = _wx$getSystemInfoSync.pixelRatio;
              _this.width = screenWidth;
              _height = _this.getHeight(ctx, pixelRatio);
              _this.height = _height + 200; // ctx.setStrokeStyle('#ffd100')

              ctx.setFillStyle('#ffd100');
              ctx.fillRect(0, 0, screenWidth, _this.height);

              _this.drawBox(ctx, screenWidth, _this.height);

              _context.next = 19;
              return _this.drawUser(ctx);

            case 19:
              articleHeight = 76;

              if (_this.post.origTxt.length) {
                articleHeight = _this.drawArticle(ctx, _this.post.origTxt, screenWidth - 100, 36, 116);
              }

              _context.next = 23;
              return _this.drawImg(ctx, screenWidth - 90, articleHeight + 30, pixelRatio);

            case 23:
              imgHeight = _context.sent;

              _this.drawDivider(ctx, screenWidth - 60, articleHeight + imgHeight + 60);

              _context.next = 27;
              return _this.drawQr(ctx, articleHeight + imgHeight + 90, pixelRatio);

            case 27:
              ctx.draw();
              wx.hideLoading();
              _this.show = true;

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getHeight: function getHeight(ctx, pixelRatio) {
      var _height = 76;

      if (this.post.origTxt.length) {
        _height = this.measureHeight(ctx, this.post.origTxt, this.width - 100, 36, 116);
      }

      if (this.post.imgs.length) {
        var _this$post$imgs$ = this.post.imgs[0],
            width = _this$post$imgs$.width,
            height = _this$post$imgs$.height;
        var imgHeight = (this.width - 90) / (width / pixelRatio) * (height / pixelRatio);
        _height += imgHeight > 500 ? 500 : imgHeight;
      }

      _height += 92;
      return _height;
    },
    drawBox: function drawBox(ctx, width, height) {
      ctx.setLineWidth(4);
      ctx.setStrokeStyle('black');
      ctx.rect(20, 20, width - 60, height - 100);
      ctx.setFillStyle('white');
      ctx.fill();
      ctx.stroke();
      ctx.setFillStyle('black'); // ctx.setStrokeStyle('red')

      ctx.setLineWidth(1);
      ctx.beginPath();
      ctx.setLineCap('round');
      ctx.moveTo(width - 39, 18);
      ctx.lineTo(width - 39, 23);
      ctx.lineTo(width - 34, 36);
      ctx.lineTo(width - 32, 34);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width - 34, 36);
      ctx.lineTo(width - 32, 34);
      ctx.lineTo(width - 30, height - 60);
      ctx.lineTo(width - 33, height - 60);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.beginPath(); // ctx.setStrokeStyle('red')

      ctx.setLineWidth(1);
      ctx.moveTo(19, height - 78);
      ctx.lineTo(37, height - 60);
      ctx.lineTo(width - 32, height - 60);
      ctx.lineTo(width - 32, height - 70);
      ctx.lineTo(width - 38, height - 83);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    },
    getImg: function getImg(url) {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _core["default"].wx.getImageInfo({
                  src: url
                }).then(function (obj) {
                  return obj;
                })["catch"](function (err) {
                  console.log(err);
                  return null;
                });

              case 2:
                res = _context2.sent;

                if (!res) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res);

              case 5:
                wx.hideLoading();
                wx.showToast({
                  title: '生成失败,返回重试',
                  icon: 'none'
                });
                return _context2.abrupt("return", null);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    drawUser: function drawUser(ctx) {
      var _this2 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var url, _ref, width, height, path, avatarurl_width, avatarurl_heigth, avatarurl_x, avatarurl_y;

        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = _this2.post.user.avtater;

                if (url.indexOf('thirdwx.qlogo.cn') > -1) {
                  url = url.replace('http', 'https');
                }

                _context3.next = 4;
                return _this2.getImg(url);

              case 4:
                _ref = _context3.sent;
                width = _ref.width;
                height = _ref.height;
                path = _ref.path;
                avatarurl_width = 48, avatarurl_heigth = 48, avatarurl_x = 38, avatarurl_y = 36; //绘制的头像在画布上的位置

                ctx.beginPath(); //开始绘制

                ctx.setStrokeStyle('white'); //先画个圆   前两个参数确定了圆心 （x,y） 坐标  第三个参数是圆的半径  四参数是绘图方向  默认是false，即顺时针

                ctx.arc(avatarurl_width / 2 + avatarurl_x, avatarurl_heigth / 2 + avatarurl_y, avatarurl_width / 2, 0, Math.PI * 2, false);
                ctx.stroke();
                ctx.save(); // 先保存状态 已便于画完圆再用

                ctx.clip(); //画了圆 再剪切  原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内

                ctx.drawImage(path, avatarurl_x, avatarurl_y, avatarurl_width, avatarurl_heigth); // 推进去图片

                ctx.restore(); // ctx.font = 'normal normal 14px sans-serif';

                ctx.setFontSize(14);
                ctx.fillText(_this2.post.user.nick, 96, 56);
                ctx.setFontSize(12);
                ctx.setFillStyle('#8a8a8a');
                ctx.fillText(_this2.post.user.school || '玉帛书', 96, 74);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    measureHeight: function measureHeight(ctx, kl, width, x, y) {
      ctx.setFontSize(14);
      var chr = kl.split(''); // 分割为字符串数组

      var temp = '';
      var row = [];

      for (var a = 0; a < chr.length; a++) {
        if (ctx.measureText(temp).width < width) {
          temp += chr[a];
        } else {
          a--;
          row.push(temp);
          temp = '';
        }
      }

      row.push(temp);
      var _len = row.length; // > 2 ? 2 : row.length;

      return y + (_len - 1) * 20;
    },
    // 绘制文字自动换行
    drawArticle: function drawArticle(ctx, kl, width, x, y) {
      ctx.setFontSize(14);
      ctx.setFillStyle('#474747');
      var chr = kl.split(''); // 分割为字符串数组

      var temp = '';
      var row = [];

      for (var a = 0; a < chr.length; a++) {
        if (ctx.measureText(temp).width < width) {
          temp += chr[a];
        } else {
          a--;
          row.push(temp);
          temp = '';
        }
      }

      row.push(temp);

      for (var b = 0; b < row.length; b++) {
        // 控制最多显示2行
        // if (b < 2) {
        ctx.fillText(row[b], x, y + b * 20); // }
      }

      var _len = row.length; // > 2 ? 2 : row.length;

      return y + (_len - 1) * 20;
    },
    drawImg: function drawImg(ctx, w, y, pixelRatio) {
      var _this3 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        var img, _filePath, tempFilePath, _ref2, width, height, path, _height;

        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this3.post.imgs.length) {
                  _context4.next = 28;
                  break;
                }

                img = _this3.post.imgs[0];
                _filePath = img.origPath;

                if (!img.isQiniu) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 6;
                return _api.Post.getShareImg(img.fileName);

              case 6:
                tempFilePath = _context4.sent;

                if (tempFilePath) {
                  _context4.next = 10;
                  break;
                }

                wx.showToast({
                  title: '生成失败,返回重试',
                  icon: 'none'
                });
                return _context4.abrupt("return");

              case 10:
                _filePath = tempFilePath;

              case 11:
                console.log(_filePath);
                _context4.next = 14;
                return _this3.getImg(_filePath);

              case 14:
                _ref2 = _context4.sent;
                width = _ref2.width;
                height = _ref2.height;
                path = _ref2.path;
                _height = w / (width / pixelRatio) * (height / pixelRatio);
                ctx.beginPath(); //开始绘制
                // ctx.setFillStyle('white');

                ctx.setStrokeStyle('white');
                ctx.rect(36, y, w, _height > 500 ? 500 : _height);
                ctx.stroke();
                ctx.save(); // 先保存状态 已便于画完圆再用

                ctx.clip(); //画了圆 再剪切  原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内

                ctx.drawImage(path, 36, y, w, _height);
                ctx.restore();
                return _context4.abrupt("return", _height > 500 ? 500 : _height);

              case 28:
                return _context4.abrupt("return", 0);

              case 29:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    drawDivider: function drawDivider(ctx, width, y) {
      var num = Math.ceil(width / 20);
      ctx.setStrokeStyle('#f1f1f1');
      ctx.setLineWidth(2);
      ctx.beginPath();

      for (var i = 0; i < num; i++) {
        ctx.moveTo((i + 1) * 20 + 6, y);
        ctx.lineTo((i + 2) * 20 - 10, y);
      }

      ctx.stroke();
    },
    drawQr: function drawQr(ctx, y, pixelRatio) {
      var _this4 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        var str, _width, self, _ref3, width, height, path;

        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                ctx.setFontSize(10);
                str = '长按识别小程序码，查看更多内容';
                ctx.fillText(str, 36, y + 35);
                ctx.fillText('玉帛书「记录自己的大学故事」', 36, y + 55);
                console.log(_this4.qrUrl);
                _width = ctx.measureText(str).width;

                if (!_this4.qrUrl) {
                  _context5.next = 15;
                  break;
                }

                self = _this4;
                _context5.next = 10;
                return _this4.getImg(_this4.qrUrl);

              case 10:
                _ref3 = _context5.sent;
                width = _ref3.width;
                height = _ref3.height;
                path = _ref3.path;
                ctx.drawImage(path, _this4.width - 134, y, 84, 84);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    onSave: function onSave() {
      var _this5 = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        var res, tempFilePath, that;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                wx.showLoading({
                  title: '保存中...'
                });

                if (_this5.canvasToTempFilePath) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 4;
                return _core["default"].wx.canvasToTempFilePath({
                  canvasId: 'poster'
                });

              case 4:
                res = _context6.sent;
                tempFilePath = res.tempFilePath;
                _this5.canvasToTempFilePath = tempFilePath;

              case 7:
                wx.hideLoading();
                that = _this5; // 获取用户是否开启用户授权相册

                if (!_this5.openStatus) {
                  wx.openSetting({
                    success: function success(result) {
                      if (result) {
                        if (result.authSetting['scope.writePhotosAlbum'] === true) {
                          that.openStatus = true;
                          that.saveImg(that.canvasToTempFilePath); // wx.saveImageToPhotosAlbum({
                          //   filePath: that.canvasToTempFilePath,
                          //   success() {
                          //     wx.showToast({
                          //       title: '图片保存成功，快去分享到朋友圈吧~',
                          //       icon: 'none',
                          //       duration: 2000
                          //     });
                          //   },
                          //   fail() {
                          //     wx.showToast({
                          //       title: '保存失败',
                          //       icon: 'none'
                          //     });
                          //   }
                          // });
                        }
                      }
                    },
                    fail: function fail() {},
                    complete: function complete() {}
                  });
                } else {
                  wx.getSetting({
                    success: function success(res) {
                      // 如果没有则获取授权
                      if (!res.authSetting['scope.writePhotosAlbum']) {
                        wx.authorize({
                          scope: 'scope.writePhotosAlbum',
                          success: function success() {
                            that.openStatus = true;
                            that.saveImg(that.canvasToTempFilePath); // wx.saveImageToPhotosAlbum({
                            //   filePath: that.canvasToTempFilePath,
                            //   success() {
                            //     wx.showToast({
                            //       title: '图片保存成功，快去分享到朋友圈吧~',
                            //       icon: 'none',
                            //       duration: 2000
                            //     });
                            //   },
                            //   fail() {
                            //     wx.showToast({
                            //       title: '保存失败',
                            //       icon: 'none'
                            //     });
                            //   }
                            // });
                          },
                          fail: function fail() {
                            // 如果用户拒绝过或没有授权，则再次打开授权窗口
                            that.openStatus = false;
                            console.log('请设置允许访问相册');
                            wx.showToast({
                              title: '请设置允许访问相册',
                              icon: 'none'
                            });
                          }
                        });
                      } else {
                        // 有则直接保存
                        that.openStatus = true;
                        that.saveImg(that.canvasToTempFilePath); // if (wx.openQzonePublish) {
                        //   wx.openQzonePublish({
                        //     text: '玉帛书「记录真实校园生活」',
                        //     media: [
                        //       {
                        //         type: 'photo',
                        //         path: that.canvasToTempFilePath
                        //       }
                        //     ]
                        //   });
                        // } else {
                        //   wx.saveImageToPhotosAlbum({
                        //     filePath: that.canvasToTempFilePath,
                        //     success() {
                        //       wx.showToast({
                        //         title: '图片保存成功，快去分享到朋友圈吧~',
                        //         icon: 'none',
                        //         duration: 2000
                        //       });
                        //     },
                        //     fail() {
                        //       wx.showToast({
                        //         title: '保存失败',
                        //         icon: 'none'
                        //       });
                        //     }
                        //   });
                        // }
                      }
                    },
                    fail: function fail(err) {
                      console.log(err);
                    }
                  });
                }

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    saveImg: function saveImg(path) {
      if (wx.openQzonePublish) {
        wx.openQzonePublish({
          text: '玉帛书「记录真实校园生活」',
          media: [{
            type: 'photo',
            path: path
          }]
        });
      } else {
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success: function success() {
            wx.showToast({
              title: '图片保存成功，快去分享到朋友圈吧~',
              icon: 'none',
              duration: 2000
            });
          },
          fail: function fail() {
            wx.showToast({
              title: '保存失败',
              icon: 'none'
            });
          }
        });
      }
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"../components/navigation-bar/navigation-bar"}},"on":{}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSave($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"navigation-bar":{"path":"../components/navigation-bar/navigation-bar"}},"on":{}}, handlers: {'26-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSave($event)
      })();
    
  }}}, models: {} });