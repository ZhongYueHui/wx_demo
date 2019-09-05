// pages/detail/detail.js
// 读取datas数据
let datas = require('../../datas/list-data')

// 读取App.js中的公共变量
let appDatas = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObject: {},
    index: null,
    // 是否收藏
    isShow: false,
    musicPlay: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收list传递过来的index
    let index = options.index
    this.setData({
      dataObject: datas.list_data[index],
      index: index
    })
    // 获取store是否存在
    let store = wx.getStorageSync('iscollections')
    console.log(store)
    // 不存在就新建一个空对象，不然后面无法执行
    if (!store) {
      wx.setStorageSync('iscollections', {})
    }
    // 判断当前的文章是否收藏,如果收藏(true)，更改isShow的状态,如果没有收藏(false)，则不用去修改，如果是一个空对象(undefined)也不用去更改
    if (store[index]) {
      this.setData({
        isShow: true
      })
    }

    // 查看当前页的音乐是否在播放(当App中的状态和index和当前页面一致的时候就说明符合)
    if (appDatas.data.isPlay && appDatas.data.pageIndex === index) {
      this.setData({
        musicPlay: true
      })
    }
  },
  collection() {
    this.setData({
      isShow: !this.data.isShow
    })
    // 提示用户收藏
    wx.showToast({
      // 如果是true就表示收藏了，false就去取消了
      title: this.data.isShow ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    // 收藏本地存储化 格式为{0:true,1:false}
    let { index } = this.data

    // 这里不能每次都初始化obj，不然之前的状态无法保存
    // let obj = {}

    // 获取本地存储的收藏数据
    wx.getStorage({
      key: 'iscollections',
      success: (res) => {
        console.log(res)
        // 将之前保存的数据重新赋值给对象，就不会被覆盖
        let obj = res.data
        obj[index] = this.data.isShow
        // 设置本地存储的数据，增加
        wx.setStorage({
          key: 'iscollections',
          data: obj,
          success: () => {
            console.log('缓存成功')
          }
        })
      },
    })
  },
  // 处理音乐播放
  handlePlayMusic() {
    // 点击更改状态切换图片
    let musicPlay = this.data.musicPlay
    let { index } = this.data
    this.setData({
      musicPlay: !musicPlay
    })
    let bgMusic = wx.getBackgroundAudioManager()

    // 监听音乐播放
    bgMusic.onPlay(() => {
      console.log('播放');
      this.setData({
        musicPlay: true
      })
      // 更改App.js中的状态
      appDatas.data.isPlay = true
      appDatas.data.pageIndex = index
    })
    // 监听音乐暂停
    bgMusic.onPause(() => {
      console.log('暂停');
      this.setData({
        musicPlay: false
      })
      appDatas.data.isPlay = false
    })
    console.log(appDatas.data.isPlay + '-----------' + appDatas.data.pageIndex);

    let { dataUrl, title } = this.data.dataObject.music
    // 音乐播放配置
    if (!musicPlay) {
      // 播放
      bgMusic.title = title
      bgMusic.src = dataUrl
      bgMusic.play()
    } else {
      // 暂停
      bgMusic.pause()
    }
  },
  // 分享
  handleShare() {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到QQ空间', '分享到微博']
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