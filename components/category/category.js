// components/category/category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String
    },
    gender:{
      type: String
    },
    array:{
      type: Array
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
      let gender = e.target.dataset.gender;
      let major = e.target.dataset.major;
      let id = e.target.dataset.id;
      wx.navigateTo({
        url: `/pages/minor/minor?gender=${gender}&major=${major}&id=${id}`,
      })
    },
  }
})
