import BaseService from "./base-service";
import wepy from '@wepy/core'
export default class UserService extends BaseService {
    constructor() {
        super()
    }
    async login(shareId = null) {
        const sys = wx.getSystemInfoSync()
        let data = {
            shareId,
            platform: sys.AppPlatform
        }
        let userId = ''
        try {
            userId = 18056 // wx.getStorageSync('userId')
        } catch (error) {
            console.log(error);
        }
        if (userId) {
            data.userId = userId
        } else {
            let res = await wepy.wx.login()
            if (res && res.code) {
                data.code = res.code
            }
        }
        const res = await this.request('/login', data, 'POST')
        if (res.code === 0) {
            const {
                user,
                token
            } = res.data
            if (user) {
                try {
                    wx.setStorageSync('user', user)
                    wx.setStorageSync('userId', user.id)
                    this.setMsgCount(user)
                } catch (error) {
                    console.log(error)
                }
                if (!userId) {
                    try {
                        wx.setStorageSync('userId', user.id)
                    } catch (error) {
                        console.log(error)
                    }
                }
                wx.setStorageSync('token', token)
                return true
            } else {
                try {
                    wx.setStorageSync('userId', res.data.userId)
                } catch (error) {
                    console.log(error)
                }
                wx.setStorageSync('token', token)
                return false
            }
        }
        return -1
    }
    async getUserRecommend() {
        const res = await this.request('/user/follow/recommend', null, 'GET')
        if (res.code === 0) {
            return res.data.map(this.parseUser.bind(this))
        }
        return null
    }
    async getDetail(userId) {
        const res = await this.request(`/user/detail/${userId}`, null, 'GET')
        if (res.code === 0) {
            return res.data.user
        }
        return null
    }
    async  bindInfo(nick, avtater, gender, province, city) {
        const userId = wx.getStorageSync('userId')
        if (userId) {
            const res = await this.request('/user/binding', {
                userId,
                nick,
                avtater,
                gender,
                province,
                city
            }, 'POST')
            if (res.code !== -1) {
                return await this.login()
            }
        }
        showToast()
        return -1
    }
    async addPhoto(userId) {
        let _userId = wx.getStorageSync('userId') || ''
        const {
            userType
        } = wx.getStorageSync('user')

        if (userType === 4 && userId) {
            _userId = userId
        }
        const obj = await wepy.wx.chooseImage({
            sizeType: 'compressed'
        })
        if (obj && obj.tempFilePaths) {
            const obj1 = await this.uploadFile(obj)
            if (obj1.paths.length === 0) {
                this.showToast('头像上传失败')
                return null
            }
            const res = await this.request('/user/photo/add', {
                userId: _userId,
                imgs: obj1.paths
            }, 'POST')
            if (res.code === 0) {
                return res.data.items.map(photo => {
                    photo.src = this.getImgUrl() + photo.src
                    return photo
                })
            } else {
                this.showToast('头像上传失败')
            }
        }
        return null
    }
    async getPhotos(userId) {
        const res = await this.request(`/user/photo/list/${userId}`, null, 'GET')
        if (res.code === 0) {
            return res.data.items.map(photo => {
                photo.src = this.getImgUrl() + photo.src
                return photo
            })
        } else {
            this.showToast('加载失败,重试')
        }
        return null
    }
    async delPhoto(id) {
        const res = await this.request(`/user/photo/del/${id}`, null, 'GET')
        if (res.code === 0) {
            return res.data.result
        } else {
            showToast('删除失败,重试')
        }
        return false
    }
    async getLabels(parent) {
        const res = await this.request('/user/label/choice', {
            parent
        }, 'POST')
        if (res.code === 0) {
            return res.data.items
        }
        return null
    }
    async getLabelsForUser(userId) {
        const res = await this.request(`/user/label/${userId}`, {}, 'GET')
        if (res.code === 0) {
            return res.data.items
        }
        return null
    }
    async addLabels(userId, parent, labels) {
        const arr = labels.map(label => {
            return {
                userId,
                parent: parent,
                labelId: label.id
            }
        })
        await this.request('/user/label/add', {
            userId,
            parent,
            labels: arr
        }, 'POST')
    }
    async setUserFiled(filed, value, canSet = true) {
        const userId = wx.getStorageSync('userId')
        const user = wx.getStorageSync('user')
        if (userId) {
            const res = await this.request('/user/change', {
                userId,
                filed,
                value
            }, 'POST')
            if (res.code === 0 && res.data.result) {
                if (canSet) {
                    if (filed === 'hometown') {
                        const arr = value.split(' ')
                        user.province = arr[0]
                        user.city = arr[1]
                    } else if (filed === 'avtater') {
                        user[filed] = this.getImgUrl() + value
                    } else {
                        user[filed] = value
                    }
                    this.showToast('已保存', 'success')
                    wx.setStorageSync('user', user)
                }
                return true
            }
        }
        if (canSet) {
            this.showToast('操作失败,重试')
        }
        return false
    }
    async editAvtater() {
        const obj = await wepy.wx.chooseImage({
            sizeType: 'compressed',
            count: 1
        })
        if (obj && obj.tempFilePaths) {
            const obj1 = await this.uploadFile(obj, {
                filed: 'avtater'
            })
            if (obj1.paths.length > 0) {
                const isSave = await this.setUserFiled('avtater', obj1.paths[0], true)
                if (isSave) {
                    return obj1.urls[0]
                }
            } else {
                this.showToast('头像上传失败')
            }
        }
        return null
    }
    async setSchool(school, education, enrollmentYear) {
        const userId = wx.getStorageSync('userId')
        const user = wx.getStorageSync('user')
        if (userId) {
            const res = await this.request('/user/add/school', {
                userId,
                school,
                education,
                enrollmentYear
            }, 'POST')
            if (res.code === 0 && res.data.result) {
                user.school = school
                user.education = education
                user.enrollmentYear = enrollmentYear
                wx.setStorageSync('user', user)
                this.showToast('已保存', 'success')
                return true
            }
        }
        this.showToast('操作失败,重试')
        return false
    }
    async addStudent(realName, src) {
        const userId = wx.getStorageSync('userId')
        const res = await this.request('/user/student/auth', {
            userId,
            realName,
            src
        }, 'POST')
        if (res.code === 0) {
            this.showToast('已上传', 'success')
            return true
        }
        this.showToast('操作失败,重试')
        return false
    }
    async getStudent() {
        const userId = wx.getStorageSync('userId')
        const res = await this.request(`/user/student/${userId}`, null, 'GET')
        if (res.code === 0) {
            return res.data.student
        }
        this.showToast('获取失败,重试')
        return null
    }
    async isAuth() {
        // const user = wx.getStorageSync('user');
        // if (user && user.isAuth) {
        //   return true
        // }
        // return false
        const res = await this.request('/user/isAuth')
        if (res.code === 0) {
            return res.data.isAuth
        }
        return false
    }
    async getScore() {
        const res = await this.request('/user/score')
        if (res.code === 0) {
            return res.data
        }
        return null
    }
    async transformScore(score) {
        const res = await this.request(`/user/transform/${score}`)
        if (res.code === 0) {
            this.showToast('转换成功', 'success')
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
    async cash(score) {
        const res = await this.request(`/reward/cash/${score}`)
        if (res.code === 0) {
            wx.showModal({
                title: '兑换成功',
                content: '兑换现金将在2-3个工作日通过公众号「壹淘」已红包的形式发放,请注意查收',
                showCancel: false
            })
            return true
        } else {
            if (res.erroCode > 0) {
                if (res.erroCode === 10020) { //未关注公众号
                    wx.showModal({
                        title: '未关注公众号',
                        confirmText: '去关注',
                        content: '还未关注公众号「壹淘」无法发放兑换的现金',
                        showCancel: false,
                        success: (res) => {
                            wx.navigateTo({
                                url: '/pages/binding'
                            });
                        }
                    })
                } else if (res.erroCode === 10021) {//未认证
                    wx.showModal({
                        title: '未学生认证',
                        confirmText: '去认证',
                        content: '还未学生认证,完成认证后可继续兑换',
                        showCancel: false,
                        success: (res) => {
                            wx.navigateTo({
                                url: '/pages/user-school'
                            });
                        }
                    })
                }
            } else {
                this.showToast()
            }
        }
        return false
    }
    async searchSchool(keyword, pageIndex, pageSize) {
        if (!keyword) {
            return []
        }
        const res = await this.request(`/user/school/search/${pageIndex}/${pageSize}/${keyword}`)
        if (res.code === 0) {
            return res.data
        }
        return []
    }
}