<template>
  <div class="tan1">
    <div @click.stop="zheCancle" class="zhe"></div>
    <div class="tan">
      <router-link class="tan-link" to="/">添加支付宝账户</router-link>
      <router-link class="tan-link" to="/">添加银行卡账户</router-link>
      <div @click="cancle" class="cancle">取消</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {hasClass} from 'common/js/dom'

export default {
  methods: {
    zheCancle (e) {
      if (hasClass(e.target, 'zhe')) {
        this.$emit('hideTan')
      }
    },
    cancle () {
      this.$emit('hideTan')
    }
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';
.tan1{
  .zhe{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: @color-background-3;
  }
  .tan{
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    z-index: 1100;
    text-align: center;
    .tan-link{
      display: block;
      width: 90%;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      background-color: #fff;
      font-size: @font-size-medium;
      color: darkblue;
      &:first-child{
        border-bottom: 1px solid @color-border-1;
      }
    }
    .cancle{
      width: 90%;
      height: 40px;
      line-height: 40px;
      margin: 5px auto 0;
      background-color: #fff;
      font-size: @font-size-medium;
    }
  }
}
</style>
