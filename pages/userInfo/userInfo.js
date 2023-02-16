// pages/many/many.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allMoney:0,
    yuanList:[
      {yuan:30},{yuan:50},{yuan:100},{yuan:200},{yuan:300},{yuan:500},
    ],
    color1:"white",
    howMoney:0
  },
  genghuan: function(e){
    this.setData({ 
      colorIndex:e.currentTarget.dataset.index,
      howMoney:e.currentTarget.id
    });
     },
  getMoney:function(e){
    var a=parseInt(this.data.allMoney)+parseInt(this.data.howMoney)
    this.setData({ 
      allMoney:a
    })
     },
     outMoney:function(e){
      var a=parseInt(this.data.allMoney)-parseInt(this.data.howMoney)
      this.setData({ 
        allMoney:a
      })
       },
  yuanList:function(e){
    this.setData({
      color1:"rgb(74, 168, 120)"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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