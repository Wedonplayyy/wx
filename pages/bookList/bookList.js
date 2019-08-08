// pages/bookList/bookList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{},
    host:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let api = getApp().globalData.api;
    this.setData({
      host: getApp().globalData.STATIC_HOST
    })
    wx.request({
      url: api + '/book-list',
      success: (res) => {
        this.setData({
          data: res.data
        })
        console.log(this.data.data)
      }
    });
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

  toDetail(e){/** 跳转详情页面 */
    let id = e.target.dataset.id;
    wx.navigateTo({
      url: `/pages/bookDetail/bookDetail?id=${id}`,
    })
  },


})