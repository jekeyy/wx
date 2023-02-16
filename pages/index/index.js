const app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      headerUrl:"../../static/images/avatar.png",
      loginOk:false,
      headUrl:null, 
      news1:[],
      news2:[],
      newImage:[],
      swiperCurrent: 0,
      newList:[],
      gzOk:true,
      fansUrl:"../../static/images/fan.png",
      fansNum:true,
      num:0
  },

  // 轮播图下标
  changDot(e) {
    this.setData({
      swiperCurrent: e.detail.current
    });
  },
  nvpersonal(e){
    wx.switchTab({
      url: '/pages/personal/personal',
    })
  },
  nvcart(e){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  navss(e){
    wx.switchTab({
      url: '/pages/logs/logs',
    })
  },
  gzbtn:function(e){
    if(this.data.gzOk){
      this.setData({
        gzOk:false
      })
      wx.showToast({
        title: '已关注',
        icon: 'success',
        duration: 1000
      })
    }
    else{
      this.setData({
        gzOk:true
      })
      wx.showToast({
        title: '取消关注',
        icon: 'none',
        duration: 1000
      })
    }
  },
  fansbtn:function(e){
     e.currentTarget.id++;
    if(this.data.fansNum){
      this.setData({
        fansNum:false,
        fansUrl:"../../static/images/fan1.png",
       num:e.currentTarget.id
      });
      wx.showToast({
        title: '感谢点赞',
        icon: 'none',
        duration: 1000,
      })
    }
    else{
      e.currentTarget.id--;
      this.setData({
        fansNum:true,
        fansUrl:"../../static/images/fan.png",
        num:e.currentTarget.id
      })
      wx.showToast({
        title: '取消点赞',
        icon: 'none',
        duration: 1000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      headUrl:app.globalData.userDate.userUrl,
      news1:app.globalData.newData.news1,
      news2:app.globalData.newData.news2,
      newImage:app.globalData.newsUrl.Url,
      loginOk:app.globalData.userDate.loginOk
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      headUrl:app.globalData.userDate.userUrl,
      loginOk:app.globalData.userDate.loginOk,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      loginOk:app.globalData.userDate.loginOk,
      headUrl:app.globalData.userDate.userUrl,
      newList:app.globalData.newsUrl.new
    })
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