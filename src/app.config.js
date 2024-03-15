export default defineAppConfig({
  pages: ["pages/index/index", "pages/mine/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#7A7E83",
    selectedColor: "#3CC51F",
    borderStyle: "black",
    backgroundColor: "#F7F7F7",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "./images/icon-index.png",
        selectedIconPath: "./images/icon-index-active.png",
        text: "首页",
      },
      {
        pagePath: "pages/mine/index",
        iconPath: "./images/icon-mine.png",
        selectedIconPath: "./images/icon-mine-active.png",
        text: "我的",
      },
    ],
  },
});
