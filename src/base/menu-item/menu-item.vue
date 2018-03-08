<template>
  <div class="part2">
    <router-link tag="div" to="/">
      <div class="from">
        <div class="qiu blue"></div>
        <h3>{{data.from}}</h3>
        <p>{{data.fromDistance}}</p>
      </div>
      <div class="from-detail">
        <div class="xian"></div>
        <h4>{{data.fromDetail}}</h4>
        <p></p>
      </div>
      <div class="to">
        <div class="qiu red"></div>
        <h3>{{data.to}}</h3>
        <p>{{data.toDistance}}</p>
      </div>
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
@import "../../common/less/variable";
.part2{
  padding: 10px;
  border-bottom: 1px solid @color-border-1;
  .from, .from-detail, .to{
    display: flex;
    justify-content: space-between;
    p{
      flex: 0 50px;
      font-size: @font-size-small;
      text-align: right;
      color: @color-background-1;
    }
  }
  .from, .to{
    line-height: 20px;
    .qiu{
      flex: 0 8px;
      position: relative;
      top: 5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      &.blue{
        background-color: @color-background-1;
      }
      &.red{
        background-color: red;
      }
    }
    h3{
      flex: 1;
      padding-left: 10px;
      font-size: @font-size-medium;
      text-align: left;
    }
  }
  .from-detail{
    margin: 10px 0;
    line-height: 18px;
    position: relative;
    .xian{
      flex: 0 8px;
      position: absolute;
      left: 0;
      top:0;
      bottom: 0;
      width: 8px;
      height: 100%;
      background: url("./to_bottom.png") repeat-y center 1px;
      background-size: 8px;
    }
    h4{
      flex: 1;
      padding-left: 10px;
      margin-left: 8px;
    }
  }
}
</style>
