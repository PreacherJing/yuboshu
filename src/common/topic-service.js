import BaseService from "./base-service";
const KEY_TOPIC_TRACK = 'TOPIC_TRACK'
export default class TopicService extends BaseService {
    constructor() {
        super()
    }
    async add(title, des, iconPath, nickName) {
        const res = await this.request('/topic/add', { title, des, iconPath, nickName }, 'POST')
        if (res.code === 0) {
            this.showToast('创建话题成功', 'success')
            return res.data
        } else{
            if (res.erroCode > 0) {
                this.showToast(res.msg)
            } else {
                this.showToast('创建话题失败')
            }
        }
        return null
    }
    async getTopicList(index, size) {
        const res = await this.request(`/topic/list/${index}/${size}`)
        if (res.code === 0) {
            return res.data.rows.map(this.parseTopic.bind(this))
        }
        return null
    }
    async searchTopic(keyword, index, size) {
        const res = await this.request(`/topic/list/search/${keyword}/${index}/${size}`)
        if (res.code === 0) {
            return res.data.rows.map(this.parseTopic.bind(this))
        }
        return null
    }
    async getTopic(id) {
        const res = await this.request(`/topic/detail/${id}`)
        if (res.code === 0) {
            res.data.topic = this.parseTopic(res.data.topic)
            return res.data.topic
        }
        return null
    }
    async topicFollow(id) {
        const res = await this.request(`/topic/follow/${id}`)
        if (res.code === 0) {
            return true
        }
        return false
    }
    async myTopics(pageIndex, pageSize) {
        const res = await this.request(`/topic/user/list/${pageIndex}/${pageSize}`)
        if (res !== -1) {
            return res.data.map(this.parseTopic.bind(this))
        }
        return null
    }
    async topicRank(topicId, pageIndex, pageSize) {
        const res = await this.request(`/topic/user/rank/${topicId}/${pageIndex}/${pageSize}`)
        return res.data
    }
    async removePost(topicId, postId) {
        const res = await this.request(`/post/topic/remove/${topicId}/${postId}`)
        if (res.code === 0) {
            this.showToast('移除成功', 'success')
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
    async recommendPost(topicId, postId, isRecommend) {
        const res = await this.request(`/post/topic/recommend/${topicId}/${postId}/${isRecommend ? 1 : 0}`)
        if (res.code === 0) {
            this.showToast('设置成功', 'success')
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
    topicAddTrack(topic) {
        try {
            let items = wx.getStorageSync(KEY_TOPIC_TRACK)
            if (items) {
                items = items.filter(item => {
                    return item.id !== topic.id
                })
                items.unshift(topic)
                if (items.length > 15) {
                    items = items.slice(0, 15)
                }
            } else {
                items = [topic]
            }
            try {
                wx.setStorageSync(KEY_TOPIC_TRACK, items)
            } catch (e) { }
        } catch (e) {
            console.log(e);
        }
    }
    getTopicTrack() {
        try {
            let items = wx.getStorageSync(KEY_TOPIC_TRACK)
            return items || null
        }
        catch (e) {
            return null
        }
    }
    cleanTopicTrack() {
        try {
            wx.removeStorageSync(KEY_TOPIC_TRACK)
            return true
        } catch (e) {
            showToast('清空数据失败,重试')
            return false
        }
    }
}