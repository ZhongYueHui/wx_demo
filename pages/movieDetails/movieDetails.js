// pages/movieDetails/movieDetails.js
const MOVIE_URL = 'http://t.yushu.im/v2/movie/top250'
const appDatas = getApp()
console.log(appDatas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    movieList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 保存传递的索引
    this.setData({
      index: options.index,
    })
    // 拿到App中的电影数据和index对应的数据
    this.setData({
      movieList: appDatas.data.movieList[this.data.index]
    })
  },
  toMovie(){
    wx.showToast({
      title: '此功能正在开放中，敬请期待...',
      icon:'none'
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

  }
})