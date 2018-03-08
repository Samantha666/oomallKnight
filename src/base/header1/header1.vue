<template>
  <div class="header1">
    <div @click="back" class="icon-back"></div>
    <h3 class="text">{{title}}</h3>
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
    }
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';

.header1{
  position: relative;
  width:100%;
  height: 44px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  .icon-back{
    position: absolute;
    top: 11px;
    left: 5px;
    width: 21px;
    height: 23px;
    background: url("./back.png") no-repeat center;
    background-size: contain;
    text-align: left;
  }
  .text{
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: @font-size-medium-x
  }
}
</style>
