// components/category/category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String
    },
    array:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toMinor(e) {
      let msg = e.target.dataset.msg;
      wx.navigateTo({
        url: '/pages/minor/minor',
      })
    },
  }
})
