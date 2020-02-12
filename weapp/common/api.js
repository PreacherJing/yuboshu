"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadFile = downloadFile;
exports.accessSync = accessSync;
exports.mkdirSync = mkdirSync;
Object.defineProperty(exports, "weibo_emojis", {
  enumerable: true,
  get: function get() {
    return _baseService.weibo_emojis;
  }
});
exports.Plane = exports.Follow = exports.Comment = exports.Notice = exports.Topic = exports.User = exports.Post = void 0;

var _postService = _interopRequireDefault(require('post-service.js'));

var _userService = _interopRequireDefault(require('user-service.js'));

var _topicService = _interopRequireDefault(require('topic-service.js'));

var _noticeService = _interopRequireDefault(require('notice-service.js'));

var _commentService = _interopRequireDefault(require('comment-service.js'));

var _followService = _interopRequireDefault(require('follow-service.js'));

var _planeService = _interopRequireDefault(require('plane-service.js'));

var _baseService = require('base-service.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function downloadFile(fileUrl, filePath) {
  wx.downloadFile({
    url: fileUrl,
    filePath: filePath,
    success: function success(res) {
      console.log('downloadFile  success', res);
    },
    fail: function fail(err) {
      console.log('downloadFile  fail', err);
    }
  });
}

function accessSync(cachePath) {
  return new Promise(function (resolve, reject) {
    var fm = wx.getFileSystemManager();

    try {
      fm.accessSync(cachePath);
      resolve();
    } catch (err) {
      resolve(err);
    }
  });
}

function mkdirSync(cachePath) {
  return new Promise(function (resolve, reject) {
    var fm = wx.getFileSystemManager();

    try {
      fm.mkdirSync(cachePath, true);
      resolve();
    } catch (err) {
      resolve(err);
    }
  });
}

var Post = new _postService["default"]();
exports.Post = Post;
var User = new _userService["default"]();
exports.User = User;
var Topic = new _topicService["default"]();
exports.Topic = Topic;
var Notice = new _noticeService["default"]();
exports.Notice = Notice;
var Comment = new _commentService["default"]();
exports.Comment = Comment;
var Follow = new _followService["default"]();
exports.Follow = Follow;
var Plane = new _planeService["default"]();
exports.Plane = Plane;