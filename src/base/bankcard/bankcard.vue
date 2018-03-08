<template>
  <div class="bankcard">
    <div class="content_wrapper">
      <div class="pic"><img src="./bankcard.png"/></div>
      <ul class="content">
        <li>{{card.name}}</li>
        <li>{{card.classify}}</li>
        <li>{{card.cardNum}}</li>
      </ul>
      <div class="default">{{card.acquiesce}}</div>
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
.bankcard{
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
        width: 25px;
        height: 25px;
      }
    }
    .content{
      display: inline-block;
      vertical-align: top;
      margin-left:10px;
      li{
        margin-top: 5px;
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
