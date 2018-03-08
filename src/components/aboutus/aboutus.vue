<template>
    <div class="aboutus">
      <header1 title="关于我们"></header1>
      <div class="content">
        <img src="./msy.jpg"/>
        <i>抠抠骑士</i>
        <div class="version">v1.0.0</div>
        <div class="tel">客服电话<span>4008-859-000</span></div>
      </div>
      <ul class="footer">
        <li>抠抠（福建）电子商务有限公司</li>
        <li>Copyright © 2009-2017 Kouclo All rights Reserved</li>
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
.aboutus{
  position: relative;
  .content{
    width: 100%;
    height: 100%;
    font-size: 14px;
    img{
      display: block;
      margin: 25% auto 20px auto;
      width: 100px;
      height:100px;
      border-radius: 4px;
    }
    i{
      display: block;
      width: 100%;
      text-align: center;
    }
    .version{
      margin: 15px auto 20px auto;
      padding: 6px 0 6px 0;
      width: 60px;
      text-align: center;
      border-radius: 15px;
      background: #ddd;
      color: #fff;
    }
    .tel{
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
    li{
      text-align: center;
      color: #999;
      &:last-child{
        margin-top: 10px;
      }
    }
  }
}
</style>
