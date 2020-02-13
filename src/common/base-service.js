import wepy from '@wepy/core'
const baseUrl = 'http://test.wutuobangxinyougou.com'
// export const baseUrl = 'http://127.0.0.1:7001'
const qiniuUrl = 'http://img.wutuobangxinyougou.com/'
const imgUrl = baseUrl + '/public/images'
const genders = ['未知', '男', '女']
import weibo from './weibo-emotions';
let _height = 0
let _statusBarHeight = 0
let _headHeight = 0
const weibo_icon_url = weibo.weibo_icon_url
const emotions = weibo.emotions
export const weibo_emojis = (function () {
    const _emojis = {}
    for (const key in emotions) {
        if (emotions.hasOwnProperty(key)) {
            const ele = emotions[key];
            for (const item of ele) {
                _emojis[item.value] = {
                    id: item.id,
                    value: item.value,
                    icon: item.icon.replace('/', '_'),
                    url: weibo_icon_url + item.icon
                }
            }
        }
    }
    return _emojis
})()
export default class BaseService {
    constructor() {
        try {
            if (_height === 0) {
                let res = wx.getSystemInfoSync()
                const { screenHeight, pixelRatio, statusBarHeight } = res
                _height = screenHeight * pixelRatio
                _statusBarHeight = statusBarHeight
                res = wx.getMenuButtonBoundingClientRect();
                if (res) {
                    const { bottom, top } = res;
                    _headHeight = bottom + top - statusBarHeight
                    console.log(_headHeight);

                }
            }
        } catch (error) {
            console.log(error);

        }
    }
    showToast(title = '操作失败,重试', icon = 'none') {
        wx.showToast({
            title,
            icon,
            duration: 2000
        })
    }
    isQQ() {
        const sys = wx.getSystemInfoSync();
        if (sys.AppPlatform && sys.AppPlatform === 'qq') {
            return true
        }
        return false
    }
    parseEmoji(txt) {
        if (!txt) {
            return ''
        }
        return txt
            .split(/(\[[\u4e00-\u9fff,\uff1f,\w]{1,8}\])/)
            .filter(str => str.length > 0).map(str => {
                let obj = {}
                if (/\[([\u4e00-\u9fff,\uff1f,\w]{1,8})\]/.test(str)) {
                    if (weibo_emojis[str]) {
                        obj.type = 1
                        obj.src = weibo_emojis[str].url
                    } else {
                        obj.type = 0
                        obj.value = str
                    }
                } else {
                    obj.type = 0
                    obj.value = str
                }
                return obj
            });
    }
    parseComment(comment) {
        comment.height = _height
        comment.origTxt = comment.content
        if (comment.content) {
            comment.content = this.parseEmoji(comment.content);
        }
        if (comment.imgs) {
            comment.imgs = this.parseCommentImgs(comment.imgs)
        }
        if (comment.user) {
            comment.user.gender = this.parseGender(comment.user.gender)
        }
        return comment
    }
    appUpdate() {
        const updateManager = wx.getUpdateManager()

        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log(res.hasUpdate)
        })

        updateManager.onUpdateReady(function () {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success(res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate()
                    }
                }
            })
        })

        updateManager.onUpdateFailed(function () {
            // 新版本下载失败
            showToast('新版本下载失败')
        })
    }
    async request(url, data, method) {
        const token = wx.getStorageSync('token') || ''
        wx.showNavigationBarLoading()
        return await wepy.wx.request({
            url: baseUrl + url,
            data,
            header: {
                token,
                'Content-Type': 'application/json',
                'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
            },
            method
        }).then(res => {
            console.log(res)
            console.log(url)
            wx.hideNavigationBarLoading()
            return res.data
        }).catch(() => {
            console.log(url)
            wx.hideNavigationBarLoading()
            return {
                code: -1
            }
        })
    }
    parseCommentImgs(imgs) {
        return imgs.map(img => {
            const path = img.path
            img.path = qiniuUrl + 'thumb_' + path
            img.origPath = qiniuUrl + path
            return img
        })
    }
    parseImgs(imgs) {
        return imgs.map(img => {
            if (img.isQiniu) {
                const path = img.path
                img.fileName = img.path
                img.path = qiniuUrl + 'thumb_' + path
                img.origPath = qiniuUrl + path
            } else {
                img.path = imgUrl + img.path
                img.origPath = imgUrl + img.origPath
            }
            return img
        })
    }
    parseGender(gender) {
        return genders[gender]
    }
    parseUser(user) {
        if (user.avtater) {
            if (user.avtater.indexOf('http') === -1) {
                user.avtater = imgUrl + user.avtater;
            }
        }
        user.hasFollow = false
        user.sex = user.gender
        user.gender = this.parseGender(user.gender)
        return user
    }
    parseTopic(topic) {
        topic.iconPath = qiniuUrl + topic.iconPath
        return topic
    }
    setMsgCount(user) {
        const {
            sysMsgCount,
            likeCount,
            commentCount,
            replyCount,
            rewardCount,
            planeCount
        } = user
        const total =
            sysMsgCount + likeCount + commentCount + replyCount + rewardCount + planeCount
        wx.setStorageSync('msgcount', total)
    }
    isQQ() {
        const sys = wx.getSystemInfoSync();
        if (sys.AppPlatform && sys.AppPlatform === 'qq') {
            return true
        }
        return false
    }
    getQiniuUrl() {
        return qiniuUrl
    }
    getImgUrl() {
        return imgUrl
    }
    async  getQiniuToken(fileName, width) {
        const res = await this.request(`/upload/qiniu/token/${fileName}/${width > 400 ? 400 : width}`, null, 'GET')
        if (res.code === 0) {
            return res.data
        }
        return null
    }
    async getQiniuTopicToken(fileName) {
        const res = await this.request(`/upload/qiniu/topic/token/${fileName}`, null, 'GET')
        if (res.code === 0) {
            return res.data
        }
        return null
    }
    async qiniUploadFile(imgs, isTopic = false) {
        for (const img of imgs) {
            const fileName = `${new Date().getTime()}.${isTopic ? 'jpg' : img.type}`
            let token = null
            if (isTopic) {
                const res = await this.getQiniuTopicToken(fileName)
                if (res) {
                    token = res.token
                }
            } else {
                token = await this.getQiniuToken(fileName, img.width)
            }
            if (token === null) {
                continue
            }
            const result = await wepy.wx.uploadFile({
                url: 'https://up-z1.qiniup.com',
                filePath: img.path,
                name: 'file',
                formData: {
                    token: token,
                    key: fileName
                }
            }).then(res => {
                console.log(res);

                if (res.statusCode === 200) {
                    const obj = JSON.parse(res.data)
                    const {
                        key
                    } = obj
                    return {
                        path: key,
                        fileName
                    }
                } else {
                    return null
                }
            }).catch(() => {
                return null
            })
            if (result) {
                delete img.type
                img.path = result.path
            } else {
                img.path = null
            }
        }
        return isTopic ? imgs[0].path : imgs
    }
    async uploadFile(obj, formData = null) {
        const token = wx.getStorageSync('token') || ''
        const urls = []
        const paths = []
        for (const filePath of obj.tempFilePaths) {
            const res = await wepy.wx.uploadFile({
                formData,
                url: baseUrl + '/upload',
                filePath: filePath,
                header: {
                    token,
                    'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
                },
                name: 'file'
            })
            try {
                const result = JSON.parse(res.data)
                if (result && result.filePath) {
                    urls.push(imgUrl + result.filePath)
                    paths.push(result.filePath)
                }
            } catch (error) {
                console.log(error)
            }
        }
        return new Promise((resolve, reject) => {
            resolve({
                urls,
                paths
            })
        })
    }
    getHeadHeight() {
        return _headHeight
    }
    getHeight() {
        return _height
    }
    getBaseUrl() {
        return baseUrl
    }
}