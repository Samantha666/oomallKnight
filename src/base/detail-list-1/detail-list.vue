<template>
  <div class="detail-list">
    <div class="bg">
      <div class="line">
        <p class="name">{{data.name}}</p>
        <p class="money">{{data.money}}元</p>
      </div>
      <div class="line line2">
        <p class="num">{{data.num}}</p>
        <p class="time">{{data.time}}</p>
      </div>
    </div>
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
.detail-list{
  padding: 10px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid @color-border-1;
  .bg{
    box-sizing: border-box;
    padding-right: 25px;
    width: 100%;
    background: url("./to_right.png") no-repeat;
    background-size: 15px 15px;
    background-position: center right;
  }
  .line{
    display: flex;
    justify-content: space-between;
    line-height: 22px;
    .name{
      font-size: 14px;
    }
  }
  .line2{
    /*margin-top: 10px;*/
    color: #555;
  }
}
</style>
