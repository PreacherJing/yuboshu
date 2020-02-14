import BaseService from "./base-service";

export default class FollowService extends BaseService {
    async  getFans(pageIndex, pageSize) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/user/follow/list/${userId}/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            return res.data.items.map(item => {
                if (item.user) {
                    item.user = this.parseUser(item.user)
                }
                return item
            })
        }
        return null
    }
    async gerUserFans(userId, pageIndex, pageSize) {
        const res = await this.request(`/user/follow/to/${userId}/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            return res.data.map(this.parseUser.bind(this))
        }
        return null
    }
    async getUserFollows(userId, pageIndex, pageSize) {
        const res = await this.request(`/user/follow/from/${userId}/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            return res.data.map(this.parseUser.bind(this))
        }
        return null
    }
    async concern(toId) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/user/follow/add/${userId}/${toId}`)
        if (res.code === 0) {
            this.showToast('关注成功', 'success')
            return true
        } else {
            this.showToast(res.erroCode > 0 ? res.msg : '关注失败,重试')
            return false
        }
    }
    async takeOff(toId) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/user/follow/cancel/${userId}/${toId}`)
        if (res.code === 0) {
            this.showToast('已取关', 'success')
            return true
        } else {
            this.showToast(res.erroCode > 0 ? res.msg : '取关失败,重试')
            return false
        }
    }
    async getUserRank() {
        const res = await this.request('/user/follow/rank/index')
        return res.data
    }
    async getRank(pageIndex, pageSize) {
        const res = await this.request(`/user/follow/rank/${pageIndex}/${pageSize}`)
        if (res.code === 0) {
            return res.data.map(item => {
                if (item.user) {
                    item.user = this.parseUser(item.user)
                }
                return item
            })
        }
        return null
    }
}