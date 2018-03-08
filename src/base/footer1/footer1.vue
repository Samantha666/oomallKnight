<template>
  <div class="footer1">
    <router-link to="/login">登录</router-link><router-link to="/register">新用户注册</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="less">
@import "../../common/less/variable";
.footer1{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: white;
  border-top: 1px solid @color-border-1;
  a{
    display: inline-block;
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    font-size: @font-size-medium;
    font-weight: bold;
    &:first-child{
      border-right: 1px solid @color-border-1;
    }
  }
}
</style>
