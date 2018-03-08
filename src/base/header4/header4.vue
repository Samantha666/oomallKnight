<template>
  <div class="header4">
    <div @click="back" class="icon-back"></div>
    <h3 class="text">{{title}}</h3>
    <router-link to="/menuYear" class="right">历史明细</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    showTan () {
      this.$emit('showTan')
    }
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';

.header4{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 10px 0 5px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  .icon-back{
    flex: 0 50px;
    width: 21px;
    height: 23px;
    background: url("./back.png") no-repeat left;
    background-size: contain;
  }
  .right{
    flex: 0 58px;
    line-height: 44px;
    font-size: 14px;
    color: @color-background-1;
  }
  .text{
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: @font-size-medium-x
  }
}
</style>
