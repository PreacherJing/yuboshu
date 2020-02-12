import BaseService from "./base-service";
import wepy from '@wepy/core'
export default class PostService extends BaseService {
    constructor() {
        super()
    }
    parsePost(post) {
        if (post.user) {
            post.user.gender = this.parseGender(post.user.gender)
        }
        post.origTxt = post.content
        post.content = this.parseEmoji(post.content)
        if (post.imgs.length) {
            post.height = this.getHeight()
            post.imgs = this.parseImgs(post.imgs)
        }
        return post
    }
    async release(userId, content, imgs, posType = 0, mediaSrc = null, location = null, topic = null) {
        let _userId = wx.getStorageSync('userId') || ''
        if (userId && userId !== 'undefined') {
            _userId = parseInt(userId)
        }
        const res = await this.request('/post/release', {
            userId: _userId,
            content,
            imgs,
            posType,
            mediaSrc,
            location,
            topic
        }, 'POST')
        wx.hideLoading();
        if (res.code === 0) {
            return true
        } else {
            let title = '发布失败,重试'
            if (res.erroCode > 0) {
                title = res.msg
            }
            this.showToast(title)
            return false
        }
    }
    async recommend(begin, direction, pageIndex, pageSize) {
        const res = await this.request('/post/list/recommend', {
            begin,
            direction,
            pageIndex,
            pageSize
        }, 'POST')
        if (res.code === 0) {
            return res.data.items.map(this.parsePost.bind(this))
        }
        return null
    }
    async getTop() {
        const res = await this.request('/post/list/top')
        if (res.code === 0) {
            return res.data.items.map(this.parsePost.bind(this))
        }
        return null
    }
    async follow(begin, direction, pageIndex, pageSize) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request('/post/list/follow', {
            userId,
            begin,
            direction,
            pageIndex,
            pageSize
        }, 'POST')
        if (res.code === 0) {
            return res.data.items.map(this.parsePost.bind(this))
        }
        return null
    }
    async followRecommend() {
        const res = await this.request('/post/list/follow/recommend')
        if (res.code === 0) {
            return res.data.items.map(this.parsePost.bind(this))
        }
        return null
    }
    async getTopicPosts(topicId, type, pageIndex, pageSize) {
        const res = await this.request(`/topic/post/list/${topicId}/${type}/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            console.log(res.data.items);

            const items = res.data.items.map(this.parsePost.bind(this))
            return {
                items,
                count: res.data.count
            }
        }
        return null
    }
    async getPostForUser(userId, pageIndex, pageSize) {
        const res = await this.request(`/post/list/user/${userId}/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            return {
                count: res.data.count,
                items: res.data.rows.map((post) => {
                    const date = new Date(post.senDate)
                    post.year = date.getFullYear
                    post.month = date.getMonth() + 1
                    post.day = date.getDate()
                    post = this.parsePost(post)
                    return post
                })
            }
        }
        return null
    }
    async getPost(id) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/post/detail/${userId}/${id}`, null, 'GET')
        if (res.code === 0 && res.data.post) {
            const post = this.parsePost(res.data.post)
            if (post.topic) {
                post.topic.iconPath = this.getQiniuUrl() + post.topic.iconPath
            }
            return post
        }
        return null
    }
    async addComment(toUserId, postId, content, imgs) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request('/post/comment/add', {
            userId,
            toUserId,
            postId,
            commenType: 0,
            content,
            imgs
        }, 'POST')
        wx.hideLoading();
        if (res.code === 0 && res.data.comment) {
            this.showToast('已发布', 'success')
            return res.data.comment
        } else {
            this.showToast(res.erroCode > 0 ? res.msg : '评论失败')
            return null
        }
    }
    async getComments(postId, pageIndex, pageSize) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/post/comment/list/${userId}/${postId}/${pageIndex}/${pageSize}`, null, 'GET')
        if (res.code === 0) {
            return res.data.items.map(this.parseComment.bind(this))
        }
        return null
    }
    async thumbs(postId, commentId, sourceId, likeType, toUserId, isCancel) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request('/post/thumbs', {
            postId,
            commentId,
            sourceId,
            likeType,
            userId,
            toUserId,
            isCancel
        }, 'POST')
        if (res.code === 0 && res.data.result) {
            this.showToast(isCancel ? '已取消' : '已点赞', 'success')
            return true
        } else {
            this.showToast(res.erroCode > 0 ? res.msg : '操作失败,重试')
            return false
        }
    }
    async reply(toUserId, postId, commentId, content, imgs, toUserNick, replyId) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request('/post/comment/reply/add', {
            userId,
            toUserId,
            postId,
            commentId,
            commenType: 0,
            replyId,
            content,
            imgs,
            toUserNick
        }, 'POST')
        wx.hideLoading();
        if (res.code === 0 && res.data.reply) {
            this.showToast('已发布', 'success')
            return res.data.reply
        } else {
            this.showToast(res.erroCode > 0 ? res.msg : '评论失败,重试')
            return null
        }
    }
    async getReplys(commentId, pageIndex, pageSize) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/post/comment/reply/list/${userId}/${commentId}/${pageIndex}/${pageSize}`, null, 'GET')
        if (res.code === 0) {
            return res.data.items.map(this.parseComment.bind(this))
        }
        return null
    }
    async getCommentDetail(id) {
        const res = await this.request(`/post/comment/detail/${id}`, null, 'GET')
        if (res.code === 0) {
            const comment = this.parseComment(res.data.comment)
            return comment
        }
        return null
    }
    async  getLikers(postId, pageIndex, pageSize) {
        const res = await this.request(`/post/like/list/${postId}/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            return res.data.items.map(this.parseUser.bind(this))
        } else {
            return null
        }
    }
    async removePost(id) {
        const result = await wepy.wx.showModal({
            title: '提示',
            content: '确定要删除该条动弹吗？'
        })
        if (result.confirm) {
            const userId = wx.getStorageSync('userId')
            const res = await this.request(`/post/remove/${userId}/${id}`, null, 'GET')
            if (res.code === 0) {
                this.showToast('已删除', 'success')
                return true
            } else {
                this.showToast()
            }
        }
        return false
    }
    async getShareImg(fileName, isUrl = false) {
        const token = wx.getStorageSync('token') || ''
        const res = await wepy.wx.downloadFile({
            url: isUrl ? fileName : `${this.getBaseUrl()}/upload/share/${fileName}`,
            header: {
                token,
                'Content-Type': 'application/json',
                'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
            },
            method: 'GET'
        });
        console.log(res);

        if (res.statusCode === 200) {
            return res.tempFilePath
        }
        return null
    }
    async getUserQr(postId) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/user/qr/${userId}/${postId}`, null, 'GET')
        if (res.code === 0) {
            return res.data
        }
        return null
    }
    async reward(toId, postId, score) {
        const fromId = wx.getStorageSync('userId')
        const res = await this.request('/reward/add', {
            fromId, toId, postId, score
        }, 'POST')
        wx.hideLoading();
        if (res.code === 0) {
            this.showToast('赞赏成功', 'success')
            return true
        } else {
            if (res.erroCode > 0) {
                this.showToast(res.msg)
            } else {
                this.showToast()
            }
        }
        return false
    }
    async rewardLogs(pageIndex, pageSize) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/reward/logs/${userId}/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            return res.data.map(item => {
                item.post = this.parsePost(item.post)
                return item
            })
        }
        return null
    }
}