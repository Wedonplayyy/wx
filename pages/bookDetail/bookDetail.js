// pages/bookDetail/bookDetail.js
const app = getApp();
let common = require("../../lib/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    host:"",//host
    id:"",//图书id
    book:{},//get的book数据
    relatedBooks:[],//相关书籍列表
    randomBooks:[],//随机相关列表
    comment:[],//评论
    chapter:0,//章节数量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('firstCanvas')
    this.setData({
      id:options.id,
      host: getApp().globalData.STATIC_HOST
    })
    console.log(this.data.id);
    let api = getApp().globalData.api;
    wx.request({
      url: api + '/book/' + this.data.id,
      success:(res)=> {
        console.log(res.data);
        this.setData({
          book: res.data,
        }); 
        ctx.drawImage(this.data.host + this.data.book.cover, 0, 0, 125, 180);
        ctx.draw();
      }
    });
    wx.request({
      url: common.comment.discussions(this.data.id),
      success: (res) => {
        console.log(res.data);
        this.setData({
          comment:res.data.posts
        });
      }
    });

    wx.request({
      url: api + '/book/' + this.data.id +'/recommend',
      success: (res) => {
        console.log(res.data);
        this.setData({
          relatedBooks:res.data.books
        });
        console.log(this.data.relatedBooks)
        this.change();
      }
    });

    wx.request({
      url: common.book.bookChaptersBookId(options.id),
      success: (res) => {
        console.log(res.data)
        this.setData({
          chapter:res.data.mixToc.chapters.length
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  change() {//换一换热门搜索
    let array = this.getRandNumForRangeN(0, this.data.relatedBooks.length, 3);//随机数组,用于随机相关书籍
    let randomBooks = [];
    for (let i in array) {
      randomBooks.push(this.data.relatedBooks[array[i]]);
    }
    this.setData({
      randomBooks: randomBooks,
    });
    console.log("换一换！")
    console.log(this.data.randomBooks)
  },

  getRandNumForRangeN(least, max, num) {//产生随机不重复数
    // 检查传值是否合法
    if (num > max - least) return false;
    // 产生指定范围的所有数值
    var numList = [];
    for (var i = least; i < max; i++) numList.push(i);
    // 对数组随机排序
    numList.sort(function () { return Math.random() < 0.5 ? -1 : 1 });
    // 返回前N个值
    return numList.slice(0, num);
  },

  toBook(e) {/** 跳转详情页面 */
    let id = e.target.dataset.id;
    wx.navigateTo({
      url: `/pages/book/book?id=${id}`,
    })
  },
})