import BaseService from "./base-service";

export default class CommentsService extends BaseService {
    async getList(url, pageIndex, pageSize) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`${url}/${userId}/${pageIndex}/${pageSize}`, null, 'GET')
        if (res.code === 0) {
            return res.data.items.map(item => {
                item.height = this.getHeight()
                if (item.user) {
                    item.user.gender = this.parseGender(item.user.gender)
                }
                if (item.content) {
                    item.content = this.parseEmoji(item.content);
                }
                if (item.source && item.source.imgs) {
                    item.source.imgs = this.parseCommentImgs(item.source.imgs)
                }
                if (item.imgs) {
                    item.imgs = this.parseCommentImgs(item.imgs)
                }
                return item
            })
        }
        return null
    }
    async getCommentForUser(pageIndex, pageSize) {
        return await this.getList('/notice/comment', pageIndex, pageSize)
    }
    async getLikeForUser(pageIndex, pageSize) {
        return await this.getList('/notice/like', pageIndex, pageSize)
    }
    async getReplyForUser(pageIndex, pageSize) {
        return await this.getList('/notice/reply', pageIndex, pageSize)
    }
}