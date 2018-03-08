<template>
    <div class="alipay">
      <div class="content_wrapper">
        <div class="pic"><img src="./alipay.png"/></div>
        <ul class="content">
          <li>支付宝</li>
          <li>{{card.cardNum}}</li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    card: {
      type: Object
    }
  }
}
</script>

<style lang="less">
.alipay{
  .content_wrapper{
    position: relative;
    margin: 10px auto;
    padding: 10px;
    text-align: left;
    width: 75%;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    .pic{
      display: inline-block;
      vertical-align: top;
      img{
        width: 48px;
        height: 48px;
      }
    }
    .content{
      display: inline-block;
      vertical-align: top;
      margin:10px 0 0 10px;
      li{
        &:last-child{
          margin-top: 25px;
        }
      }
    }
    .default{
      position: absolute;
      top: 10px;
      right: 10px;
      color: blue;
    }
  }
}
</style>
