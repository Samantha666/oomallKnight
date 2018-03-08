<template>
  <div class="appSharing">
    <header1 title="关于我们"></header1>
    <div class="content">
      <img src="./二维码.png"/>
      <i>抠抠骑士</i>
      <div class="tel">客服电话<span>4008-859-000</span></div>
    </div>
    <ul class="footer">
      <li><img src="./qq.png" alt="1">分享到QQ</li>
      <li><img src="./weixin.png" alt="2">分享到微信</li>
      <li><img src="./朋友圈.png" alt="3">分享到朋友圈</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Header1 from '../../base/header1/header1'
export default {
  components: {
    Header1
  }
}
</script>

<style scoped lang="less">
  .appSharing{
    position: relative;
    .content{
      width: 100%;
      height: 100%;
      font-size: 16px;
      img{
        display: block;
        margin: 25% auto 20px auto;
        width: 100px;
        height:100px;
        border-radius: 4px;
      }
      i{
        font-style: normal;
        margin-top: 30px;
        display: block;
        width: 100%;
        text-align: center;
      }
      .tel{
        margin-top: 30px;
        text-align: center;
        span{
          margin-left: 15px;
          color: blue;
        }
      }
    }
    .footer{
      position: fixed;
      bottom: 20px;
      width: 100%;
      padding: 0 5% 0 5%;
      li{
        width:30%;
        float: left;
        text-align: center;
        font-size: 16px;
        img{
          margin-left: 32%;
          margin-bottom: 12px;
          display: block;
          width: 40px;
          height:40px;
          }
        }
      }
    }
</style>
