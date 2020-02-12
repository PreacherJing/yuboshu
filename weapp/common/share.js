"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = require('api.js');

var _default = {
  data: {
    mixin: 'MixinText'
  },
  onShareAppMessage: function onShareAppMessage() {
    var user = wx.getStorageSync('user');

    if (_api.User.isQQ()) {
      qq.showShareMenu({
        showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
      });
    } else {
      console.log(getApp().$wepy.$options);
      var post = getApp().$wepy.$options.post;

      if (post) {
        var imageUrl = post.imgs && post.imgs.length ? post.imgs[0].path : "".concat(_api.User.getImgUrl(), "/share.png");
        return {
          title: post.origTxt,
          imageUrl: imageUrl,
          path: "/pages/index?id=".concat(user.id, "&postId=").concat(post.id)
        };
      } else {
        return {
          imageUrl: "".concat(_api.User.getImgUrl(), "/share.png"),
          path: '/pages/index?id=' + user.id
        };
      }
    }
  }
};
exports["default"] = _default;