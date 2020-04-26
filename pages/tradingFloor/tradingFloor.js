// pages/tradingFloor/tradingFloor.js
Page({
  data: {
    order: 'time',
  },
  onTapAdd: function() {

  },
  onTapCreate: function() {
    wx.navigateTo({
      url: '/pages/roomCreate/roomCreate',
      complete: (res) => {
        console.log(res)
      }
    })
  },
  onTapTime: function() {
    this.setData({
      order:'time'
    })
  },
  onTapPrice: function() {
    this.setData({
      order:'price'
    })
  }
})