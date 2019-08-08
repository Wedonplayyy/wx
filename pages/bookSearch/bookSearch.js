// pages/bookSearch/bookSearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',//输入框内容
    flag:false,//是否显示搜索结果
    hotWords:[],//热门搜索词
    randomHotWords:[],//随机热门搜索
    color: ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'yellow'],//颜色
    randomColor: [],//随机颜色
    books:[],//搜索到的图书列表
  },
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let api = getApp().globalData.api;
    wx.request({
      url: api + '/book/hot-word',
      success: (res) => {
        this.setData({
          hotWords:res.data.hotWords
        })
        this.change();
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

  search(e){//点击回车搜索
    let api = getApp().globalData.api;
    this.setData({
      value: e.detail
    })
    console.log(this.data.value);
    wx.request({
      url: api + '/book/fuzzy-search?start=0&limit=50&v=1&query=' + this.data.value,
      success:(res)=> {
        if(res.data.books.length===0){
          console.log("未搜索到~~");
        }
        else{
          console.log("一共找到"+res.data.books.length)
          console.log(res.data);
          this.setData({
            books:res.data.books
          })
        }
      }
    });
    this.setData({
      flag:true
    })
  },

  change(e){//换一换热门搜索
    let array = this.getRandNumForRangeN(0, 21, 6);//随机数组,用于随机搜索热门
    let array1 = this.getRandNumForRangeN(0, 15, 6);//随机数组，用于随机颜色
    let randomWords=[];
    let randomColor=[];
    for (let i in array) {
      randomWords.push(this.data.hotWords[array[i]]);
      randomColor.push(this.data.color[array1[i]]);
    }
    this.setData({
      randomHotWords:randomWords,
      randomColor:randomColor
    });
      
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

  show(){
    this.setData({
      flag:false
    })
  }

})