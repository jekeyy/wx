const app=getApp()
// pages/auth/accountLogin/accountLogin.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    userName:'',
    userPwd:'',
    loginOk:true
  },
  btnLogin:function(e){
     if(this.data.username.length<1 || this.data.password.length<1){
         wx.showModal({
           title: '错误信息',
           content: '请输入用户名或密码',
           showCancel: false,
           confirmColor:'#00FF00'
         })
         return false;
     }else if(this.data.username!=this.data.userName||this.data.userPwd!=this.data.password){
      wx.showModal({
        title: '错误信息',
        content: '用户名或密码错误',
        showCancel: false,
        confirmColor:'#00FF00'
      })
      return false;
      }
     else{
      wx.switchTab({  //跳转到tabbar页面
        url: '/pages/personal/personal',
     })
     }
    },
  clearInfo:function(e){
    var typeInfo=e.target.dataset.id;
    if(typeInfo=="username"){
        this.setData({
            username:''
        })
    }else{
      this.setData({
          password:''
      })
    }
  },
  inuputUsernameHandler:function(e){
     // console.log(e.detail.value);
      this.setData({
          username:e.detail.value
      })
  },
  inuputPasswordHandler:function(e){
      //console.log(e.detail.value);
      this.setData({
          password:e.detail.value
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      userName:app.globalData.userDate2.userName,
      userPwd:app.globalData.userDate2.userPwd,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
  },
  

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    app.globalData.userDate.loginOk=this.data.loginOk;
    app.globalData.userDate.userName=this.data.username;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})