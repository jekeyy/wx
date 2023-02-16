// pages/personal/personal.js
const app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      test1:null,
      loginOk:false,
      userInfo:null,
      headUrl:null,
      headName:null,
      userName:null,
      noneUrl:null
  },
 
  wxlogin:function(e){
    var that =this
    wx.getUserProfile({
      desc: '获取你的昵称、头像、地区及性别',
      success:(res)=>{
        this.setData({
          userInfo:res.userInfo,
          headUrl:res.userInfo.avatarUrl,
          headName:res.userInfo.nickName,
          loginOk:true,
          test1:1,
        });
      }
    })
  },
  userInfo:function(e){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:function(res) {
        that.setData({
          headUrl:res.tempFilePaths[0],
        });
      }
    })
  },
  out:function(e){
    var that = this;
    wx.showModal({
      title:'提示',
      content:'是否退出',
      success (res) {
        if (res.confirm) {
          that.setData({
            loginOk:false
          })
          console.log('用户退出')
        } else if (res.cancel) {
          console.log('用户取消退出')
        }
      }
    })
  },
  call:function(){
      wx.makePhoneCall({
        phoneNumber: '13602378503',
      }).catch((e) => {
        // console.log(e)  //用catch(e)来捕获错误{makePhoneCall:fail cancel}
      })
  },
  //页面跳转
  accountLogin:function(e){
    wx.navigateTo({
      url: '../../pages/accountLogin/accountLogin',
    })
  },
  allMoney:function(e){
    wx.navigateTo({
      url: '/pages/userInfo/userInfo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   loginOk:app.globalData.userDate.loginOk,
    //   headName:app.globalData.userDate2.userName,
    // })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      headName:app.globalData.userDate.userName,
      headUrl:app.globalData.userDate.userUrl,
      loginOk:app.globalData.userDate.loginOk,
      userName:app.globalData.userDate2.userName
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      loginOk:app.globalData.userDate.loginOk,
      userName:app.globalData.userDate2.userName,
      noneUrl:app.globalData.userDate.noneUrl
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    app.globalData.userDate.userName=this.data.headName;
    app.globalData.userDate.loginOk=this.data.loginOk;
    app.globalData.userDate.userUrl=this.data.headUrl;
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