<template>
  <div class="applyMoney">
    <header1 title="申请提现"></header1>
    <div class="content">
      <p class="max-money">最多可提现{{maxMoney}}元</p>
      <div class="reality">
        <span class="icon-money">￥</span>
        <input type="text" placeholder="请输入金额，100元起提">
      </div>
      <button type="button" class="submit">确定提交</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header1 from '../../base/header1/header1'

export default {
  data () {
    return {
      maxMoney: 50000
    }
  },
  components: {
    Header1
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';

.applyMoney{
  .content{
    margin-top: 30px;
    font-size: 14px;
    .max-money, .reality{
      padding: 10px 30px;
      height: 20px;
      line-height: 20px;
      border-bottom: 1px solid @color-border-1;
    }
    .reality{
      height: 20px;
      line-height: 20px;
      .icon-money{
        line-height: 20px;
        vertical-align: top;
        font-size: 16px;
        font-weight: bold;
      }
      input{
        height: 20px;
        padding-left: 20px;
        vertical-align: top;
      }
    }
    .submit{
      display: block;
      margin: 30px auto 0;
      width: 200px;
      height: 34px;
      color: #fff;
      background-color: @color-background-1;
      border-radius: 4px;
    }
  }
}
</style>
