// pages/minor/minor.js
let common = require("../../lib/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active1:0,
    active2:0,
    id:0,//分类id,例如female[0]是古代言情
    mins:[],//小分类
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    let api = getApp().globalData.api;
    wx.setNavigationBarTitle({
      title: options.major,
      
    });
    wx.request({
      url: common.classification.getMinor,
      success:(res)=> {
        let temp = res.data[options.gender]
        this.setData({
          mins:temp[this.data.id].mins
        })
        console.log(options.gender)
        console.log(res.data)
        console.log(this.data.mins)
      }
    })

    wx.request({
      url: common.classification.getCatsBooks(options.gender,"hot",options.major,0,1),
      success:(res)=> {
        console.log(res.data)
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

  onChange(event) {
    wx.showToast({
      title: `切换到${event.detail.title}`,
      icon: 'none'
    });
  }
})