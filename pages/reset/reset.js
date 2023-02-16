const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
       mobile:'',//保存手机号
       code:'',//保存输入的验证码
       pwd:'',//保存输入的密码
       confirmPwd:'',//保存输入的确认密码
       codeInfo:'获取验证码',//保存用WEB后台获取的验证码 
    },
    getMobile:function(e){
      var mobile=e.detail.value;//获取用户输入的值
      this.setData({
          mobile:mobile
      })
    },
    getCode:function(e){
        var code=e.detail.value;//获取用户输入的值
        this.setData({
            code:code
        })
      },
      getPwd:function(e){
        var pwd=e.detail.value;//获取用户输入的值
        this.setData({
            pwd:pwd
        })
      },
      getConfirmPwd:function(e){
        var confirmPwd=e.detail.value;//获取用户输入的值
        this.setData({
            confirmPwd:confirmPwd
        })
      },
      clear:function(e){
          var id=e.target.dataset.id;
          switch(id){
              case 'mobile':
                   this.setData({
                       mobile:''
                   })
              break;
              case 'code':
                    this.setData({
                        code:''
                    })
               break;
               case 'pwd':
                    this.setData({
                        pwd:''
                    })  
                break;
                    case 'confirmPwd':
                        this.setData({
                            confirmPwd:''
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
      //重置密码
      btnReset:function(){
        if(!this.checkMobile(this.data.mobile)){
          wx.showModal({
            title:'错误信息',
            content:'输入的手机号码格式不正确',
            showCancel:false
          });
          return false;
         }
        else if(this.data.mobile.length==0){
          wx.showModal({
              title:'错误消息',
              content:'手机号码不能为空',
              showCancel:false
            })
            return;
      }
        else if(this.data.code.length==0){
            wx.showModal({
                title:'错误消息',
                content:'验证码不能为空',
                showCancel:false
              })
              return;
        }else if(this.data.code!=this.data.codeInfo){
          this.setData({
              codeInfo:"获取验证码"
            })
          wx.showModal({
              title:'错误消息',
              content:'验证码错误',
              showCancel:false
            })
            return;   
      }
        else if(this.data.pwd.length==0){
            wx.showModal({
                title:'错误消息',
                content:'密码不能为空',
                showCancel:false
              })
              return;
        }
        else if(this.data.confirmPwd!=this.data.pwd){
            wx.showModal({
                title:'错误消息',
                content:'密码与确认密码不一致',
                showCancel:false
              })
              return;
        }else{
          wx.navigateTo({
            url:'/pages/accountLogin/accountLogin',
          })
        }
      },
      getCodeInfo:function(e){
        var codeNum=Math.floor(Math.random()*1000+9000);
        this.setData({
            codeInfo:codeNum
          });
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
      app.globalData.userDate2.userName=this.data.mobile;
    app.globalData.userDate2.userPwd=this.data.pwd;
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