# knight

> 抠抠骑士H5页面

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

/api: 放网络请求的js文件
/base: 放公共模块
/common: 放js,less,img,fonts
  less：
    mixin.less: 函数性文件
    variable.less: 变量文件
  js:
    dom.js: 里面放有transition兼容函数
/components: 放每个页面
  home: 首页
  forgetPassword: 找回密码
  revisePassword: 修改密码
  aboutus: 关于我们
  personalCenter: 个人中心
  leftDrawer: 左抽屉
  addBankCard: 添加银行卡
  openingBranchQuery: 开户支行查询办法
  myWallet: 我的钱包
  register:注册页面
  login: 登录页
  more_set: 更多设置
  bindAccount: 绑定账号
  cards: 我的卡包
  bindAccount: 绑定卡包
  applyMoney: 申请提现
  detail: 当日明细
  menuMouth: 年度账单明细
  menuYear: 单月明细
  task: 我的任务

/router: index.js配置路由
/store: 与Vuex相关

启动命令：npm start
构建命令：npm build
