"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _baseService = _interopRequireDefault(require('base-service.js'));

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UserService =
/*#__PURE__*/
function (_BaseService) {
  _inherits(UserService, _BaseService);

  function UserService() {
    _classCallCheck(this, UserService);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserService).call(this));
  }

  _createClass(UserService, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var shareId,
            sys,
            data,
            userId,
            _res,
            res,
            _res$data,
            user,
            token,
            _args = arguments;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                shareId = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                sys = wx.getSystemInfoSync();
                data = {
                  shareId: shareId,
                  platform: sys.AppPlatform
                };
                userId = '';

                try {
                  userId = 18056; // wx.getStorageSync('userId')
                } catch (error) {
                  console.log(error);
                }

                if (!userId) {
                  _context.next = 9;
                  break;
                }

                data.userId = userId;
                _context.next = 13;
                break;

              case 9:
                _context.next = 11;
                return _core["default"].wx.login();

              case 11:
                _res = _context.sent;

                if (_res && _res.code) {
                  data.code = _res.code;
                }

              case 13:
                _context.next = 15;
                return this.request('/login', data, 'POST');

              case 15:
                res = _context.sent;

                if (!(res.code === 0)) {
                  _context.next = 28;
                  break;
                }

                _res$data = res.data, user = _res$data.user, token = _res$data.token;

                if (!user) {
                  _context.next = 25;
                  break;
                }

                try {
                  wx.setStorageSync('user', user);
                  wx.setStorageSync('userId', user.id);
                  this.setMsgCount(user);
                } catch (error) {
                  console.log(error);
                }

                if (!userId) {
                  try {
                    wx.setStorageSync('userId', user.id);
                  } catch (error) {
                    console.log(error);
                  }
                }

                wx.setStorageSync('token', token);
                return _context.abrupt("return", true);

              case 25:
                try {
                  wx.setStorageSync('userId', res.data.userId);
                } catch (error) {
                  console.log(error);
                }

                wx.setStorageSync('token', token);
                return _context.abrupt("return", false);

              case 28:
                return _context.abrupt("return", -1);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "getUserRecommend",
    value: function () {
      var _getUserRecommend = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request('/user/follow/recommend', null, 'GET');

              case 2:
                res = _context2.sent;

                if (!(res.code === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.data.map(this.parseUser.bind(this)));

              case 5:
                return _context2.abrupt("return", null);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserRecommend() {
        return _getUserRecommend.apply(this, arguments);
      }

      return getUserRecommend;
    }()
  }, {
    key: "getDetail",
    value: function () {
      var _getDetail = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(userId) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request("/user/detail/".concat(userId), null, 'GET');

              case 2:
                res = _context3.sent;

                if (!(res.code === 0)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", res.data.user);

              case 5:
                return _context3.abrupt("return", null);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getDetail(_x) {
        return _getDetail.apply(this, arguments);
      }

      return getDetail;
    }()
  }, {
    key: "bindInfo",
    value: function () {
      var _bindInfo = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(nick, avtater, gender, province, city) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userId = wx.getStorageSync('userId');

                if (!userId) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 4;
                return this.request('/user/binding', {
                  userId: userId,
                  nick: nick,
                  avtater: avtater,
                  gender: gender,
                  province: province,
                  city: city
                }, 'POST');

              case 4:
                res = _context4.sent;

                if (!(res.code !== -1)) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 8;
                return this.login();

              case 8:
                return _context4.abrupt("return", _context4.sent);

              case 9:
                showToast();
                return _context4.abrupt("return", -1);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function bindInfo(_x2, _x3, _x4, _x5, _x6) {
        return _bindInfo.apply(this, arguments);
      }

      return bindInfo;
    }()
  }, {
    key: "addPhoto",
    value: function () {
      var _addPhoto = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(userId) {
        var _this = this;

        var _userId, _wx$getStorageSync, userType, obj, obj1, res;

        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _userId = wx.getStorageSync('userId') || '';
                _wx$getStorageSync = wx.getStorageSync('user'), userType = _wx$getStorageSync.userType;

                if (userType === 4 && userId) {
                  _userId = userId;
                }

                _context5.next = 5;
                return _core["default"].wx.chooseImage({
                  sizeType: 'compressed'
                });

              case 5:
                obj = _context5.sent;

                if (!(obj && obj.tempFilePaths)) {
                  _context5.next = 21;
                  break;
                }

                _context5.next = 9;
                return this.uploadFile(obj);

              case 9:
                obj1 = _context5.sent;

                if (!(obj1.paths.length === 0)) {
                  _context5.next = 13;
                  break;
                }

                this.showToast('头像上传失败');
                return _context5.abrupt("return", null);

              case 13:
                _context5.next = 15;
                return this.request('/user/photo/add', {
                  userId: _userId,
                  imgs: obj1.paths
                }, 'POST');

              case 15:
                res = _context5.sent;

                if (!(res.code === 0)) {
                  _context5.next = 20;
                  break;
                }

                return _context5.abrupt("return", res.data.items.map(function (photo) {
                  photo.src = _this.getImgUrl() + photo.src;
                  return photo;
                }));

              case 20:
                this.showToast('头像上传失败');

              case 21:
                return _context5.abrupt("return", null);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function addPhoto(_x7) {
        return _addPhoto.apply(this, arguments);
      }

      return addPhoto;
    }()
  }, {
    key: "getPhotos",
    value: function () {
      var _getPhotos = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6(userId) {
        var _this2 = this;

        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.request("/user/photo/list/".concat(userId), null, 'GET');

              case 2:
                res = _context6.sent;

                if (!(res.code === 0)) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", res.data.items.map(function (photo) {
                  photo.src = _this2.getImgUrl() + photo.src;
                  return photo;
                }));

              case 7:
                this.showToast('加载失败,重试');

              case 8:
                return _context6.abrupt("return", null);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getPhotos(_x8) {
        return _getPhotos.apply(this, arguments);
      }

      return getPhotos;
    }()
  }, {
    key: "delPhoto",
    value: function () {
      var _delPhoto = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee7(id) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.request("/user/photo/del/".concat(id), null, 'GET');

              case 2:
                res = _context7.sent;

                if (!(res.code === 0)) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return", res.data.result);

              case 7:
                showToast('删除失败,重试');

              case 8:
                return _context7.abrupt("return", false);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function delPhoto(_x9) {
        return _delPhoto.apply(this, arguments);
      }

      return delPhoto;
    }()
  }, {
    key: "getLabels",
    value: function () {
      var _getLabels = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee8(parent) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.request('/user/label/choice', {
                  parent: parent
                }, 'POST');

              case 2:
                res = _context8.sent;

                if (!(res.code === 0)) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt("return", res.data.items);

              case 5:
                return _context8.abrupt("return", null);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getLabels(_x10) {
        return _getLabels.apply(this, arguments);
      }

      return getLabels;
    }()
  }, {
    key: "getLabelsForUser",
    value: function () {
      var _getLabelsForUser = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee9(userId) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.request("/user/label/".concat(userId), {}, 'GET');

              case 2:
                res = _context9.sent;

                if (!(res.code === 0)) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt("return", res.data.items);

              case 5:
                return _context9.abrupt("return", null);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getLabelsForUser(_x11) {
        return _getLabelsForUser.apply(this, arguments);
      }

      return getLabelsForUser;
    }()
  }, {
    key: "addLabels",
    value: function () {
      var _addLabels = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee10(userId, parent, labels) {
        var arr;
        return _regeneratorRuntime2["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                arr = labels.map(function (label) {
                  return {
                    userId: userId,
                    parent: parent,
                    labelId: label.id
                  };
                });
                _context10.next = 3;
                return this.request('/user/label/add', {
                  userId: userId,
                  parent: parent,
                  labels: arr
                }, 'POST');

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function addLabels(_x12, _x13, _x14) {
        return _addLabels.apply(this, arguments);
      }

      return addLabels;
    }()
  }, {
    key: "setUserFiled",
    value: function () {
      var _setUserFiled = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee11(filed, value) {
        var canSet,
            userId,
            user,
            res,
            arr,
            _args11 = arguments;
        return _regeneratorRuntime2["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                canSet = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : true;
                userId = wx.getStorageSync('userId');
                user = wx.getStorageSync('user');

                if (!userId) {
                  _context11.next = 10;
                  break;
                }

                _context11.next = 6;
                return this.request('/user/change', {
                  userId: userId,
                  filed: filed,
                  value: value
                }, 'POST');

              case 6:
                res = _context11.sent;

                if (!(res.code === 0 && res.data.result)) {
                  _context11.next = 10;
                  break;
                }

                if (canSet) {
                  if (filed === 'hometown') {
                    arr = value.split(' ');
                    user.province = arr[0];
                    user.city = arr[1];
                  } else if (filed === 'avtater') {
                    user[filed] = this.getImgUrl() + value;
                  } else {
                    user[filed] = value;
                  }

                  this.showToast('已保存', 'success');
                  wx.setStorageSync('user', user);
                }

                return _context11.abrupt("return", true);

              case 10:
                if (canSet) {
                  this.showToast('操作失败,重试');
                }

                return _context11.abrupt("return", false);

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function setUserFiled(_x15, _x16) {
        return _setUserFiled.apply(this, arguments);
      }

      return setUserFiled;
    }()
  }, {
    key: "editAvtater",
    value: function () {
      var _editAvtater = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee12() {
        var obj, obj1, isSave;
        return _regeneratorRuntime2["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _core["default"].wx.chooseImage({
                  sizeType: 'compressed',
                  count: 1
                });

              case 2:
                obj = _context12.sent;

                if (!(obj && obj.tempFilePaths)) {
                  _context12.next = 16;
                  break;
                }

                _context12.next = 6;
                return this.uploadFile(obj, {
                  filed: 'avtater'
                });

              case 6:
                obj1 = _context12.sent;

                if (!(obj1.paths.length > 0)) {
                  _context12.next = 15;
                  break;
                }

                _context12.next = 10;
                return this.setUserFiled('avtater', obj1.paths[0], true);

              case 10:
                isSave = _context12.sent;

                if (!isSave) {
                  _context12.next = 13;
                  break;
                }

                return _context12.abrupt("return", obj1.urls[0]);

              case 13:
                _context12.next = 16;
                break;

              case 15:
                this.showToast('头像上传失败');

              case 16:
                return _context12.abrupt("return", null);

              case 17:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function editAvtater() {
        return _editAvtater.apply(this, arguments);
      }

      return editAvtater;
    }()
  }, {
    key: "setSchool",
    value: function () {
      var _setSchool = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee13(school, education, enrollmentYear) {
        var userId, user, res;
        return _regeneratorRuntime2["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                user = wx.getStorageSync('user');

                if (!userId) {
                  _context13.next = 13;
                  break;
                }

                _context13.next = 5;
                return this.request('/user/add/school', {
                  userId: userId,
                  school: school,
                  education: education,
                  enrollmentYear: enrollmentYear
                }, 'POST');

              case 5:
                res = _context13.sent;

                if (!(res.code === 0 && res.data.result)) {
                  _context13.next = 13;
                  break;
                }

                user.school = school;
                user.education = education;
                user.enrollmentYear = enrollmentYear;
                wx.setStorageSync('user', user);
                this.showToast('已保存', 'success');
                return _context13.abrupt("return", true);

              case 13:
                this.showToast('操作失败,重试');
                return _context13.abrupt("return", false);

              case 15:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function setSchool(_x17, _x18, _x19) {
        return _setSchool.apply(this, arguments);
      }

      return setSchool;
    }()
  }, {
    key: "addStudent",
    value: function () {
      var _addStudent = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee14(realName, src) {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context14.next = 3;
                return this.request('/user/student/auth', {
                  userId: userId,
                  realName: realName,
                  src: src
                }, 'POST');

              case 3:
                res = _context14.sent;

                if (!(res.code === 0)) {
                  _context14.next = 7;
                  break;
                }

                this.showToast('已上传', 'success');
                return _context14.abrupt("return", true);

              case 7:
                this.showToast('操作失败,重试');
                return _context14.abrupt("return", false);

              case 9:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function addStudent(_x20, _x21) {
        return _addStudent.apply(this, arguments);
      }

      return addStudent;
    }()
  }, {
    key: "getStudent",
    value: function () {
      var _getStudent = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee15() {
        var userId, res;
        return _regeneratorRuntime2["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                userId = wx.getStorageSync('userId');
                _context15.next = 3;
                return this.request("/user/student/".concat(userId), null, 'GET');

              case 3:
                res = _context15.sent;

                if (!(res.code === 0)) {
                  _context15.next = 6;
                  break;
                }

                return _context15.abrupt("return", res.data.student);

              case 6:
                this.showToast('获取失败,重试');
                return _context15.abrupt("return", null);

              case 8:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getStudent() {
        return _getStudent.apply(this, arguments);
      }

      return getStudent;
    }()
  }, {
    key: "isAuth",
    value: function () {
      var _isAuth = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee16() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.request('/user/isAuth');

              case 2:
                res = _context16.sent;

                if (!(res.code === 0)) {
                  _context16.next = 5;
                  break;
                }

                return _context16.abrupt("return", res.data.isAuth);

              case 5:
                return _context16.abrupt("return", false);

              case 6:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function isAuth() {
        return _isAuth.apply(this, arguments);
      }

      return isAuth;
    }()
  }, {
    key: "getScore",
    value: function () {
      var _getScore = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee17() {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.request('/user/score');

              case 2:
                res = _context17.sent;

                if (!(res.code === 0)) {
                  _context17.next = 5;
                  break;
                }

                return _context17.abrupt("return", res.data);

              case 5:
                return _context17.abrupt("return", null);

              case 6:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getScore() {
        return _getScore.apply(this, arguments);
      }

      return getScore;
    }()
  }, {
    key: "transformScore",
    value: function () {
      var _transformScore = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee18(score) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.request("/user/transform/".concat(score));

              case 2:
                res = _context18.sent;

                if (!(res.code === 0)) {
                  _context18.next = 8;
                  break;
                }

                this.showToast('转换成功', 'success');
                return _context18.abrupt("return", true);

              case 8:
                if (res.erroCode > 0) {
                  this.showToast(res.msg);
                } else {
                  this.showToast();
                }

              case 9:
                return _context18.abrupt("return", false);

              case 10:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function transformScore(_x22) {
        return _transformScore.apply(this, arguments);
      }

      return transformScore;
    }()
  }, {
    key: "cash",
    value: function () {
      var _cash = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee19(score) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.request("/reward/cash/".concat(score));

              case 2:
                res = _context19.sent;

                if (!(res.code === 0)) {
                  _context19.next = 8;
                  break;
                }

                wx.showModal({
                  title: '兑换成功',
                  content: '兑换现金将在2-3个工作日通过公众号「壹淘」已红包的形式发放,请注意查收',
                  showCancel: false
                });
                return _context19.abrupt("return", true);

              case 8:
                if (res.erroCode > 0) {
                  if (res.erroCode === 10020) {
                    //未关注公众号
                    wx.showModal({
                      title: '未关注公众号',
                      confirmText: '去关注',
                      content: '还未关注公众号「壹淘」无法发放兑换的现金',
                      showCancel: false,
                      success: function success(res) {
                        wx.navigateTo({
                          url: '/pages/binding'
                        });
                      }
                    });
                  } else if (res.erroCode === 10021) {
                    //未认证
                    wx.showModal({
                      title: '未学生认证',
                      confirmText: '去认证',
                      content: '还未学生认证,完成认证后可继续兑换',
                      showCancel: false,
                      success: function success(res) {
                        wx.navigateTo({
                          url: '/pages/user-school'
                        });
                      }
                    });
                  }
                } else {
                  this.showToast();
                }

              case 9:
                return _context19.abrupt("return", false);

              case 10:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function cash(_x23) {
        return _cash.apply(this, arguments);
      }

      return cash;
    }()
  }, {
    key: "searchSchool",
    value: function () {
      var _searchSchool = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee20(keyword, pageIndex, pageSize) {
        var res;
        return _regeneratorRuntime2["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (keyword) {
                  _context20.next = 2;
                  break;
                }

                return _context20.abrupt("return", []);

              case 2:
                _context20.next = 4;
                return this.request("/user/school/search/".concat(pageIndex, "/").concat(pageSize, "/").concat(keyword));

              case 4:
                res = _context20.sent;

                if (!(res.code === 0)) {
                  _context20.next = 7;
                  break;
                }

                return _context20.abrupt("return", res.data);

              case 7:
                return _context20.abrupt("return", []);

              case 8:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function searchSchool(_x24, _x25, _x26) {
        return _searchSchool.apply(this, arguments);
      }

      return searchSchool;
    }()
  }]);

  return UserService;
}(_baseService["default"]);

exports["default"] = UserService;