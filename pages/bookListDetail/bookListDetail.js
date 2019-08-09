// pages/bookListDetail/bookListDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    host:"",//host
    id: "",//书架id
    bookList:{},//get到的书单数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      host: getApp().globalData.STATIC_HOST
    })
    console.log(this.data.id);
    let api = getApp().globalData.api;
    wx.request({
      url: api + '/book-list/' + this.data.id,
      success: (res) => {
        this.setData({
          bookList: res.data.bookList.books
        })
        console.log(this.data.bookList)
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

  toDetail(e){
    let id = e.target.dataset.id;
    wx.navigateTo({
      url: `/pages/bookDetail/bookDetail?id=${id}`,
    })
  }
})