import {
    User
} from './api';
export default {
    data: {
        mixin: 'MixinText'
    },
    onShareAppMessage() {
        const user = wx.getStorageSync('user');
        if (User.isQQ()) {
            qq.showShareMenu({
                showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
            });
        } else {
            console.log(getApp().$wepy.$options);
            const post = getApp().$wepy.$options.post
            if (post) {
                const imageUrl = post.imgs && post.imgs.length ? post.imgs[0].path : `${User.getImgUrl()}/share.png`
                return {
                    title: post.origTxt,
                    imageUrl: imageUrl,
                    path: `/pages/index?id=${user.id}&postId=${post.id}`
                };
            } else {
                return {
                    imageUrl: `${User.getImgUrl()}/share.png`,
                    path: '/pages/index?id=' + user.id
                };
            }
        }
    },
}