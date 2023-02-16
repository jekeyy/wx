const app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
      username:'',
      password:'',
      confirmPassword:'',
      mobile:''
  },
  inputUsername:function(e){
    this.setData({
      username:e.detail.value
    })
  },
  inputPassword:function(e){
    this.setData({
      password:e.detail.value
    })
  },
  inputConfirmPassword:function(e){
    this.setData({
      confirmPassword:e.detail.value
    })
  },
  inputMobile:function(e){
    this.setData({
      mobile:e.detail.value
    })
  },
  //清空数据
  clearInfo:function(e){
   switch(e.currentTarget.id){
     case 'clearUsername':
       this.setData({
         username:''
       })
     break;
     case 'clearPassword':
       this.setData({
         password:''
       })
     break;
     case 'clearConfirmPassword':
      this.setData({
        confirmPassword:''
      })
    break;
    case 'clearMobile':
      this.setData({
        mobile:''
      })
    break;
   }
  },

  //用来检验手机号码的格式
  checkMobile:function(mobile){
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;//正则表达式用来检验手机号码的格式
    if(!myreg.test(mobile)){
      return false;
    }else{
      return true;
    }
  },
  btnRegister:function(e){
     if(this.data.username.length<6 || this.data.password.length<6){
       wx.showModal({
         title:'错误信息',
         content:'用户名和密码不得少于6位',
         showCancel:false
       });
       return false;
     }
     else if(this.data.password!=this.data.confirmPassword){
      wx.showModal({
        title:'错误信息',
        content:'确认密码不一致',
        showCancel:false
      });
      return false;
     }
     else if(this.data.mobile.length==0){
      wx.showModal({
        title:'错误信息',
        content:'手机号不能为空',
        showCancel:false
      });
      return false;
     }
     else if(!this.checkMobile(this.data.mobile)){
      wx.showModal({
        title:'错误信息',
        content:'输入的手机号码格式不正确',
        showCancel:false
      });
      return false;
     }else{
       wx.navigateTo({
         url: '/pages/accountLogin/accountLogin',
       })
     }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    app.globalData.userDate2.userName=this.data.username;
    app.globalData.userDate2.userPwd=this.data.password;
    app.globalData.userDate2.mobile=this.data.mobile;
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