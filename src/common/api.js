import PostService from "./post-service";
import UserService from "./user-service";
import TopicService from "./topic-service";
import NoticeService from "./notice-service";
import CommentsService from "./comment-service";
import FollowService from "./follow-service";
import PlaneService from "./plane-service";
export { weibo_emojis } from "./base-service";
export function downloadFile(fileUrl, filePath) {
    wx.downloadFile({
      url: fileUrl,
      filePath: filePath,
      success: function(res) {
        console.log('downloadFile  success', res);
      },
      fail: function(err) {
        console.log('downloadFile  fail', err);
      }
    });
  }
export function accessSync(cachePath) {
    return new Promise(function (resolve, reject) {
        let fm = wx.getFileSystemManager();
        try {
            fm.accessSync(cachePath);
            resolve();
        } catch (err) {
            resolve(err);
        }
    });
}
export function mkdirSync(cachePath) {
    return new Promise(function (resolve, reject) {
        let fm = wx.getFileSystemManager();
        try {
            fm.mkdirSync(cachePath, true);
            resolve();
        } catch (err) {
            resolve(err);
        }
    });
}
export const Post = new PostService()
export const User = new UserService()
export const Topic = new TopicService()
export const Notice = new NoticeService()
export const Comment = new CommentsService()
export const Follow = new FollowService()
export const Plane = new PlaneService()