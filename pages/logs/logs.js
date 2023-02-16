const App = getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    // 图标
    searchIcon: "../../static/images/searh.png",
    eyeIconOne: "../../static/images/可见.png",
    eyeIcon: "../../static/images/不可见.png",
    upperLeftArrow: "../../static/images/进入.png",
    recommend: [ //热门推荐
      {
        title: "冰箱"
      },
      {
        title: "红魔手机"
      },
      {
        title: "洗衣机"
      },
      {
        title: "电视机"
      },
      {
        title: "冰箱 双门"
      },
      {
        title: "海尔洗衣机 滚筒"
      },
      {
        title: "手机自营"
      },
      {
        title: "小天鹅洗衣机全自动"
      },
      {
        title: "手机"
      },
      {
        title: "笔记本"
      }
    ],
    historyStorage: [],        //历史搜索
    historyStorageShow: false,
    falg: true,         //换一批
    hotsearch1: [{ title: "德国" }, { title: "梅西" }, { title: "英国女王" }, { title: "吴磊" }, { title: "疫情防控" }, { title: "冻龄白金面霜" }, { title: "杨幂" }, { title: "英国留学门槛" }, { title: "五分钟儿童教育短片" }, { title: "梅西二儿子哭了" }, { title: "内马尔" }, { title: "魅族" }],
    hotsearch2: [{ title: "阿根廷" }, { title: "C罗" }, { title: "华晨宇" }, { title: "成龙" }, { title: "C罗安慰门将" }, { title: "西班牙vs德国" }, { title: "白敬亭" }, { title: "重庆疫情" }, { title: "汪小菲" }, { title: "世界杯" }, { title: "小米手机" }, { title: "大熊猫" }],
    // searchresult: false,
    inputValue: "",        //输入框输入的值
    replaceValue: "",     //替换输入框的值
    eye: true,        //显示隐藏
    searchresult: false,
    searchResult: [{ result: "世界杯" }, { result: "疫情防控" }, { result: "大熊猫" }, { result: "西班牙vs德国" }, { result: "C罗" }, { result: "华晨宇" }, { result: "梅西" }, { result: "内马尔" }, { result: "小米手机" }]//虚拟的查询结果
  },

  /**
   * 获取顶部固定高度
   */

  /**
   * 换一批操作
   */
  changeother: function () {
    this.setData({
      falg: !this.data.falg
    })
  },
 
  /**
   * 热门搜索显示隐藏
   */
  reye: function () {
    this.setData({
      eye: !this.data.eye
    })
  },
 
  /**
   * 清除
   */
  remove: function () {
    var _this = this
    wx: wx.showModal({
      content: '确认清除所有历史记录?',
      success: function (res) {
        if (res.confirm) {
          wx: wx.removeStorage({
            key: 'historyStorage',
            success: function (res) {
              _this.setData({
                historyStorage: []
              })
              wx.setStorageSync("historyStorage", [])
            },
          })
        } else {
          console.log("点击取消")
        }
      },
    })
  },
 
 
  /**
   * 获取input的值
   */
  getInputValue:function(e) {
    //console.log("获取value值",e.detail.value)   // {value: "ff", cursor: 2}
    this.setData({
      inputValue: e.detail.value
    })
    this.setData({
      searchresult: true,
    })
  },
 
  /**
   * 点击搜索提交跳转并存储历史记录
   */
  searchbegin: function (e) {
    let _this = this
    var data = e.currentTarget.dataset;
    _this.data.replaceValue = e.currentTarget.dataset.postname
    // _this.data.replaceValue = 
    wx: wx.setStorage({
      key: 'historyStorage',
      data: _this.data.historyStorage.concat(_this.data.inputValue),
      data: _this.data.historyStorage.concat(_this.data.replaceValue)
    })
    // console.log(_this.data.inputValue)
    // console.log(_this.data.historyStorage)
    wx.navigateTo({
      url: '/pages/many/many?postName=' + data['postname']
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 历史搜索
    let that = this
    wx.getStorage({
      key: 'historyStorage',
      success: function (res) {
        console.log(res.data)
        that.setData({
          historyStorageShow: true,
          historyStorage: res.data
        })
      }
    })
  },
  //点击进入详情页
  goToList: function (e) {
    
  },
  goUpdate: function() {
    this.onLoad()
    console.log("我更新啦")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    this.setData({
      inputValue: ""
    })
  },
 
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    this.setData({
      inputValue: ""
    })
  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
 
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
 
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
 
  }
})