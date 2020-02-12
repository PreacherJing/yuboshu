import BaseService from "./base-service";

export default class PlaneService extends BaseService {
    async add(content) {
        const res = await this.request('/plane/add', {
            content
        }, 'POST')
        wx.hideLoading();
        if (res.code === 0) {
            this.showToast('已发送', 'success')
            return res.data
        }
        this.showToast('发送失败')
        return null
    }
    async remove(id) {
        const res = await this.request(`/plane/remove/${id}`)
        wx.hideLoading();
        if (res.code === 0) {
            this.showToast('已撤回', 'success')
            return true
        }
        this.showToast('撤回失败,重试')
        return false
    }
    async edit(id, content) {
        const res = await this.request('/plane/edit', {
            id,
            content
        }, 'POST')
        wx.hideLoading();
        if (res.code === 0) {
            this.showToast('已更改', 'success')
            return true
        }
        this.showToast('更改失败,重试')
        return false
    }
    async list(pageIndex, pageSize) {
        const res = await this.request(`/plane/list/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            return res.data.map(item => {
                if (item.user) {
                    item.user = this.parseUser(item.user)
                }
                item.content = this.parseEmoji(item.content)
                return item
            })
        }
        return null
    }
    async get() {
        const res = await this.request('/plane/get')
        if (res.code === 0) {
            return res.data
        }
        return null
    }
    async seen(id) {
        const res = await this.request(`/plane/seen/${id}`)
        if (res.code === 0) {
            return true
        }
        return false
    }
    async reply(planeId, replyId, type, toId, content, imgs) {
        const res = await this.request('/plane/reply', {
            planeId, replyId, type, toId, content, imgs
        }, 'POST')
        wx.hideLoading();
        if (res.code === 0) {
            this.showToast('已回复', 'success')
            return res.data
        }
        this.showToast('回复失败,重试')
        return false
    }
    async getReplys(pageIndex, pageSize) {
        const res = await this.request(`/plane/replys/list/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            return res.data.map(item => {
                if (item.user) {
                    item.user = this.parseUser(item.user)
                }
                item.content = this.parseEmoji(item.content)
                if (item.imgs) {
                    item.imgs = this.parseCommentImgs(item.imgs)
                }
                if (item.source) {
                    item.source.content = this.parseEmoji(item.source.content)
                    if (item.source.imgs) {
                        item.source.imgs = this.parseCommentImgs(item.source.imgs)
                    }
                }
                return item
            })
        }
        return null
    }

}