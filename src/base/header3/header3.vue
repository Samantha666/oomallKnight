<template>
  <div class="header3">
    <div @click="back" class="icon-back"></div>
    <h3 class="text">{{title}}</h3>
    <div @click="showTan" class="icon-add">✚</div>
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

.header3{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 5px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  .icon-back{
    flex: 0 21px;
    width: 21px;
    height: 23px;
    background: url("./back.png") no-repeat center;
    background-size: contain;
  }
  .icon-add{
    flex: 0 21px;
    width: 21px;
    height: 21px;
    font-size: 24px;
    color: #515151;
  }
  .text{
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: @font-size-medium-x
  }
}
</style>
