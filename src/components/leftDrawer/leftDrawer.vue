<template>
    <div class="leftDrawer">
      <div class="header">
        <img src="./msy.jpg"/>
        <ul class="desc">
          <li>秦宇</li>
          <li>135****2466</li>
        </ul>
      </div>
      <div class="content">
        <router-link class="hang" to="/myWallet">
          <img src="./homepage_fill.png"/>
          <span>我的钱包</span>
          <span class="balance">余额：￥0.00</span>
        </router-link>
        <router-link class="hang" to="/">
          <img src="./collection_fill.png"/>
          <span>骑手必读</span>
        </router-link>
        <router-link class="hang" to="/">
          <img src="./hat.png"/>
          <span>在线培训</span>
        </router-link>
        <router-link class="hang" to="/">
          <img src="./customerservice_fill.png"/>
          <span>意见反馈</span>
        </router-link>
        <router-link class="hang" to="/moreSet">
          <img src="./setup_fill.png"/>
          <span>更多设置</span>
        </router-link>
        <router-link class="hang" to="/">
          <img src="./help.png"/>
          <span>帮助中心</span>
        </router-link>
        <router-link class="hang" to="/">
          <img src="./exit.png"/>
          <span>退出登录</span>
        </router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="less">
.leftDrawer{
  .header{
    padding: 15px;
    width: 100%;
    background: cornflowerblue;
    img{
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 6px;
    }
    .desc{
      display: inline-block;
      vertical-align: top;
      margin: 9px 0 0 10px;
      font-size: 14px;
      color: #fff;
    }
    li{
      &:last-child{
        margin-top:10px;
      }
    }
  }
  .content{
    width: 100%;
    height: 100%;
    background: #fff;
    .hang{
      display: block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-left: 25px;
      border-bottom:1px solid #ddd;
      font-size: 14px;
      img{
        display: inline-block;
        vertical-align: top;
        margin-top: 15px;
        width: 20px;
        height: 20px;
      }
      span{
        display: inline-block;
        vertical-align: top;
        margin-left: 20px;
      }
      .balance{
        margin-left: 15px;
        font-size: 10px;
      }
    }
  }
}
</style>
