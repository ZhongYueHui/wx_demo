// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放用户信息
    userInfo: {},
    // 是否显示授权button
    isShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看用户是否授权登陆
    this.getUserInfoRes()
  },
  // 获取用户授权信息和登陆信息
  getUserInfoRes() {
    // 判断用户是否授权
    wx.getSetting({
      success: data => {
        console.log(data)
        // 如果授权
        if (data.authSetting['scope.userInfo']) {
          this.setData({
            isShow: false
          })
        } else {
          // 没有授权
          this.setData({
            isShow: true
          })
        }
      }
    }),
      // 获取用户登陆信息
      wx.getUserInfo({
        success: data => {
          console.log(data)
          this.setData({
            userInfo: data.userInfo
          })
        },
        fail: err => {
          console.log('获取用户信息失败')
        }
      })
  },
  // 监听授权
  handleUserInfo(data) {
    console.log(data.detail.rawData)
    // 允许授权，自动更新用户界面
    if (data.detail.rawData) {
      this.getUserInfoRes()  // 授权后重新调用获取用户信息的方法
      // this.onLoad()  // 直接将这个生命周期函数再初始化一次(不推荐)
    } else {
      // 拒绝授权，不更新界面

    }
  },
  // 开始小程序
  handleStart() {
    console.log('开始小程序');
    wx.switchTab({
      url: '/pages/list/list',
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