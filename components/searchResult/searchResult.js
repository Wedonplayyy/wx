// components/searchResult/searchResult.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    books:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    host: getApp().globalData.STATIC_HOST
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(e) {/** 跳转详情页面 */
    let id = e.target.dataset.id
      wx.navigateTo({
        url: `/pages/bookDetail/bookDetail?id=${id}`,
      })
    },
  }
})
