const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        pagePath: "/pages/vegiStock/vegiStock",
        text: "白菜证券",
        iconPath: "../assets/tab/ShopIconGray.png",
        selectedIconPath: "../assets/tab/ShopIconActive.png",
      },
      {
        pagePath: "/pages/nookea/nookea",
        text: "狸家",
        iconPath: "../assets/tab/DiyIconGray.png",
        selectedIconPath: "../assets/tab/DiyIconActive.png",
      },
      {
        pagePath: "/pages/profile/profile",
        text: "护照信息",
        iconPath: "../assets/tab/PassportIconGray.png",
        selectedIconPath: "../assets/tab/PassportIcon.png",
      },
    ],
    //适配IphoneX的屏幕底部横线
    isIphoneX: app.globalData.isIphoneX,
  },
  attached() {},
  methods: {
    switchTab(e) {
      const dataset = e.currentTarget.dataset;
      const path = dataset.path;
      //tabbar切换界面
      wx.switchTab({
        url: path,
      });
    },
  },
});
