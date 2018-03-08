<template>
  <div class="detail-list-2">
    <router-link to="/menuMouth" class="bg">
      <div class="left">
        <h3>{{data.mouth}}月账单</h3>
        <p class="time">{{data.time}}</p>
      </div>
      <div class="right">￥{{data.money}}</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';
.detail-list-2{
  padding: 10px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid @color-border-1;
  .bg{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 25px;
    width: 100%;
    background: url("./to_right.png") no-repeat;
    background-size: 15px 15px;
    background-position: center right;
    .left{
      line-height: 20px;
      h3{
        font-size: 14px;
      }
      .time{
        color: #555;
      }
    }
    .right{
      line-height: 40px;
    }
  }
}
</style>
