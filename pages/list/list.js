// pages/list/list.js
let datas = require('../../datas/list-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data
    })
  },
  // 点击跳转到文章详情页面
  detailPage(e) {
    // 接收文章分类的下标传递到detail中
    let index = e.currentTarget.dataset.index
    wx.navigateTo({ // 可以返回 使用redirect不能返回
      url: '/pages/detail/detail?index=' + index,
    });
  },
  // 点击轮播图图片跳转到详情
  goImageDetail(e) {
    let index = e.target.dataset.index
    wx.navigateTo({ // 可以返回 使用redirect不能返回
      url: '/pages/detail/detail?index=' + index,
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

  }
})