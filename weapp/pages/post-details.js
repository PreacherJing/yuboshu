"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _api = require('../common/api.js');

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    showUser: false,
    showInput: false,
    showDialog: false,
    rewardDialog: false,
    btnDisabled: false,
    btnLoading: false,
    active: 1,
    isqq: false,
    state: 0,
    post: null,
    postId: null,
    user: null,
    score: '',
    choiceScore: 2,
    disabled: false,
    scoreUser: null,
    baseBottom: 0
  },
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee(q) {
      var _wx$getMenuButtonBoun, bottom, id, commentid;

      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.user = wx.getStorageSync('user');
              _wx$getMenuButtonBoun = wx.getMenuButtonBoundingClientRect(), bottom = _wx$getMenuButtonBoun.bottom;
              this.baseBottom = bottom;
              id = q.id, commentid = q.commentid;
              this.postId = id;
              this.isqq = _api.Post.isQQ();
              _context.next = 8;
              return this.init();

            case 8:
              _context.next = 10;
              return _api.User.getScore();

            case 10:
              this.scoreUser = _context.sent;
              this.disabled = !this.scoreUser || this.scoreUser.score < 2;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function onLoad(_x) {
      return _onLoad.apply(this, arguments);
    }

    return onLoad;
  }(),
  onShareAppMessage: function onShareAppMessage() {
    var imageUrl = this.post.imgs && this.post.imgs.length ? this.post.imgs[0].path : "".concat(_api.Post.getImgUrl(), "/share.png");
    return {
      title: this.post.origTxt,
      imageUrl: imageUrl,
      path: "/pages/index?id=".concat(this.user.id, "&postId=").concat(this.postId)
    };
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var post;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.state = 0;
                _context2.next = 3;
                return _api.Post.getPost(this.postId);

              case 3:
                post = _context2.sent;

                if (post) {
                  this.post = post;
                  this.state = 3;
                } else {
                  this.state = 1;
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    goTopic: function goTopic() {
      wx.navigateTo({
        url: '/pages/topic?id=' + this.post.topicId
      });
    },
    goBack: function goBack() {
      wx.navigateBack();
    },
    onRetry: function () {
      var _onRetry = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.init();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onRetry() {
        return _onRetry.apply(this, arguments);
      }

      return onRetry;
    }(),
    onScroll: function onScroll(res) {
      this.showUser = res.scrollTop > this.baseBottom;
    },
    onScrolltolower: function () {
      var _onScrolltolower = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4() {
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$refs.comments.loadData();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onScrolltolower() {
        return _onScrolltolower.apply(this, arguments);
      }

      return onScrolltolower;
    }(),
    onRewardCancel: function onRewardCancel() {
      this.rewardDialog = false;
    },
    showReward: function showReward() {
      var _wx$getStorageSync = wx.getStorageSync('user'),
          isBinding = _wx$getStorageSync.isBinding;

      if (isBinding === 0) {
        wx.navigateTo({
          url: '/pages/gender'
        });
      } else {
        this.rewardDialog = true;
      }
    },
    onChoice: function onChoice(active, score) {
      this.active = active;
      this.choiceScore = score;

      if (active < 6) {
        this.disabled = !this.scoreUser || this.scoreUser.score < score;
      }
    },
    onInput: function onInput(e) {
      var value = e.$wx.detail.value;
      this.score = parseInt(value);
      this.disabled = !this.scoreUser || this.scoreUser.score < this.score;
    },
    onShowInput: function onShowInput() {
      this.showInput = true;
    },
    onHide: function onHide() {
      this.showInput = false;
    },
    onComment: function onComment(comment) {
      this.$refs.comments.unshift(comment);
    },
    onThumbs: function onThumbs(hasLike) {
      this.post.hasLike = hasLike;

      if (hasLike) {
        this.post.thumbsCount++;
      } else {
        this.post.thumbsCount--;
      }
    },
    onShowThumbs: function onShowThumbs() {
      this.showDialog = true;
    },
    onReward: function () {
      var _onReward = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5() {
        var score, isReward;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.btnDisabled = true;
                this.btnLoading = true;
                wx.showLoading({
                  title: '赞赏中...',
                  mask: true
                });
                score = this.active === 6 ? this.score : this.choiceScore;
                _context5.next = 6;
                return _api.Post.reward(this.post.user.id, this.post.id, score);

              case 6:
                isReward = _context5.sent;

                if (isReward) {
                  this.scoreUser.score -= score;
                  this.rewardDialog = false;
                }

                this.btnDisabled = false;
                this.btnLoading = false;

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onReward() {
        return _onReward.apply(this, arguments);
      }

      return onReward;
    }(),
    onShare: function () {
      var _onShare = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6() {
        var path, imageUrl, img;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this.isqq) {
                  _context6.next = 18;
                  break;
                }

                if (!wx.openQzonePublish) {
                  _context6.next = 16;
                  break;
                }

                path = null;
                imageUrl = "".concat(_api.Post.getImgUrl(), "/share.png");

                if (!this.post.imgs.length) {
                  _context6.next = 11;
                  break;
                }

                img = this.post.imgs[0];
                imageUrl = this.post.imgs[0].path;

                if (!img.isQiniu) {
                  _context6.next = 11;
                  break;
                }

                _context6.next = 10;
                return _api.Post.getShareImg(img.fileName);

              case 10:
                path = _context6.sent;

              case 11:
                if (path) {
                  _context6.next = 15;
                  break;
                }

                _context6.next = 14;
                return _api.Post.getShareImg(imageUrl, true);

              case 14:
                path = _context6.sent;

              case 15:
                wx.openQzonePublish({
                  text: this.post.origTxt,
                  media: [{
                    type: 'photo',
                    path: path
                  }]
                });

              case 16:
                _context6.next = 19;
                break;

              case 18:
                wx.navigateTo({
                  url: '/pages/post-share?id=' + this.postId
                });

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onShare() {
        return _onShare.apply(this, arguments);
      }

      return onShare;
    }(),
    hideDialog: function hideDialog() {
      this.showDialog = false;
    }
  }
}, {info: {"components":{"navigation-bar":{"path":"../components/navigation-bar/navigation-bar"},"screen-dialog":{"path":"../components/half-screen-dialog/half-screen-dialog"},"mp-page":{"path":"../components/mp-page"},"post-item":{"path":"../components/post-item"},"post-comments":{"path":"../components/post-comments"},"comment-action":{"path":"../components/comment-action"},"user-item":{"path":"../components/user-item"},"comment-input":{"path":"../components/comment-input"},"likers":{"path":"../components/post-likers"}},"on":{"8-1":["scroll","retry","scrolltolower"],"8-8":["action"],"8-9":["thumbs","showInput"],"8-11":["hide","comment"],"8-13":["cancel"],"8-14":["close"]}}, handlers: {'8-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goBack($event)
      })();
    
  }},'8-1': {"scroll": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScroll($event)
      })();
    
  }, "retry": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRetry($event)
      })();
    
  }, "scrolltolower": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onScrolltolower($event)
      })();
    
  }},'8-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.showReward($event)
      })();
    
  }},'8-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShare($event)
      })();
    
  }},'8-6': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goTopic($event)
      })();
    
  }},'8-7': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowThumbs($event)
      })();
    
  }},'8-8': {"action": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowInput($event)
      })();
    
  }},'8-9': {"thumbs": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onThumbs($event)
      })();
    
  }, "showInput": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onShowInput($event)
      })();
    
  }},'8-11': {"hide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHide($event)
      })();
    
  }, "comment": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onComment($event)
      })();
    
  }},'8-13': {"cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.hideDialog($event)
      })();
    
  }},'8-14': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onRewardCancel($event)
      })();
    
  }},'8-15': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onChoice(1, 2)
      })();
    
  }},'8-16': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onChoice(2, 5)
      })();
    
  }},'8-17': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onChoice(3, 10)
      })();
    
  }},'8-18': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onChoice(4, 20)
      })();
    
  }},'8-19': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onChoice(5, 50)
      })();
    
  }},'8-20': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.onChoice(6)
      })();
    
  }},'8-21': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onInput($event)
      })();
    
  }},'8-22': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onReward($event)
      })();
    
  }}}, models: {'6': {
      type: "input",
      expr: "score",
      handler: function set ($v) {
      var _vm=this;
        _vm.score = $v;
      
    }
    }} });