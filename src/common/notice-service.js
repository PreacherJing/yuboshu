import BaseService from "./base-service"

export default class NoticeService extends BaseService {
    async  getMsgCount() {
        const res = await this.request('/notice/msg', null, 'GET')
        if (res.code === 0) {
            this.setMsgCount(res.data)
            const obj = res.data
            if (obj.comment) {
                if (obj.comment.imgs && obj.comment.imgs.length) {
                    obj.comment.content = '[图片]' + obj.comment.content
                }
            }
            if (obj.reply) {
                if (obj.reply.imgs && obj.reply.imgs.length) {
                    obj.reply.content = '[图片]' + obj.reply.content
                }
            }
            return res.data
        }
        return null
    }
    setNoticeCount(total) {
        wx.setStorageSync('msgcount', total)
    }
    getNoticeCount() {
        return wx.getStorageSync('msgcount') || 0
    }
    async getSysMsg(pageIndex, pageSize) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/notice/sys/${userId}/${pageIndex}/${pageSize}`, null, 'GET')
        if (res.code === 0) {
            return res.data.items
        }
        return null
    }
    async setRead(id) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/notice/read/${userId}/${id}`, null, 'GET')
        if (res.code === 0) {
            return true
        }
        return false
    }
}